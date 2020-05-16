package item

import (
	"database/sql"
	"log"
	"net/http"
	"strconv"

	"encoding/json"
	"github.com/gorilla/mux"
)

type Item struct {
	ID              int64  `json:"id"`
	Title           string `json:"title"`
	CategoryID      string `json:"category_id"`
	CategoryName    string `json:"category_name"`
	MetaImageURL    string `json:"meta_image_url"`
	MetaDescription string `json:"meta_description"`
	URL             string `json:"url"`
}

type ItemCreationRequest struct {
	Title           string `json:"title"`
	CategoryID      int64  `json:"category_id"`
	MetaImageURL    string `json:"meta_image_url"`
	MetaDescription string `json:"meta_description"`
	URL             string `json:"url"`
}

type Items []Item

func HandleRequest(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		switch r.Method {
		case "GET":
			stmt := "SELECT i.id, title, c.id, c.name, meta_image_url, meta_description, url FROM items i JOIN categories c ON i.category_id = c.id"
			rows, err := db.Query(stmt)
			if err != nil {
				log.Print(err)
			}
			defer rows.Close()
			items := make(Items, 0)

			for rows.Next() {
				var item Item
				if err := rows.Scan(&item.ID, &item.Title, &item.CategoryID, &item.CategoryName, &item.MetaImageURL, &item.MetaDescription, &item.URL); err != nil {
					log.Fatal(err)
				}
				items = append(items, item)
			}

			js, err := json.Marshal(items)
			if err != nil {
				http.Error(w, err.Error(), http.StatusInternalServerError)
				return
			}

			w.Header().Set("Content-Type", "application/json")
			w.Write(js)
		case "POST":
			var i ItemCreationRequest

			if err := json.NewDecoder(r.Body).Decode(&i); err != nil {
				http.Error(w, err.Error(), http.StatusBadRequest)
				return
			}

			stmt := `INSERT into items (title, category_id, meta_image_url, meta_description, url) VALUES ($1, $2, $3, $4, $5) RETURNING id`

			var lastInsertId int64
			err := db.QueryRow(stmt, i.Title, i.CategoryID, i.MetaImageURL, i.MetaDescription, i.URL).Scan(&lastInsertId)
			if err != nil {
				panic(err)
			}

			stmt = "SELECT name FROM categories WHERE id = $1"
			var categoryName string
			err = db.QueryRow(stmt, i.CategoryID).Scan(&categoryName)
			if err != nil {
				log.Print(err)
			}

			item := Item{
				ID:              lastInsertId,
				Title:           i.Title,
				CategoryName:    categoryName,
				MetaImageURL:    i.MetaImageURL,
				MetaDescription: i.MetaDescription,
				URL:             i.URL,
			}

			js, err := json.Marshal(item)
			if err != nil {
				http.Error(w, err.Error(), http.StatusInternalServerError)
				return
			}

			w.Header().Set("Content-Type", "application/json")
			w.Write(js)
		}
	}
}

func Delete(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		vars := mux.Vars(r)
		id, err := strconv.ParseInt(vars["id"], 10, 64)
		if err == nil {
			log.Print(err)
		}

		stmt := `DELETE FROM items WHERE id = $1`
		db.Exec(stmt, id)

		json.NewEncoder(w).Encode(http.StatusOK)
	}
}
