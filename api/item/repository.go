package item

import (
	"database/sql"
	"log"
	"net/http"
	"strconv"
	"time"

	"encoding/json"
	"github.com/gorilla/mux"
)

type Item struct {
	ID              int64  `json:"id"`
	Title           string `json:"title"`
	Category        string `json:"category"`
	MetaImage       string `json:"meta_image"`
	MetaDescription string `json:"meta_description"`
	URL             string `json:"url"`
}

type ItemCreationRequest struct {
	Title           string `json:"title"`
	Category        string `json:"category"`
	MetaImage       string `json:"meta_image"`
	MetaDescription string `json:"meta_description"`
	URL             string `json:"url"`
}

type Items []Item

func HandleRequest(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		switch r.Method {
		case "GET":
			stmt := "SELECT id, title, category, meta_image, meta_description, url FROM items"
			rows, err := db.Query(stmt)
			if err != nil {
				log.Print(err)
			}
			defer rows.Close()
			items := make(Items, 0)

			for rows.Next() {
				var item Item
				if err := rows.Scan(&item.ID, &item.Title, &item.Category, &item.MetaImage, &item.MetaDescription, &item.URL); err != nil {
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
			var t ItemCreationRequest

			if err := json.NewDecoder(r.Body).Decode(&t); err != nil {
				http.Error(w, err.Error(), http.StatusBadRequest)
				return
			}

			stmt := `INSERT into items (title, category, meta_image, meta_description, url) VALUES ($1, $2, $3, $4, $5) RETURNING id`

			var lastInsertId int64
			err := db.QueryRow(stmt, t.Title, t.Category, t.MetaImage, t.MetaDescription, t.URL).Scan(&lastInsertId)
			if err != nil {
				panic(err)
			}

			item := Item{
				ID:              lastInsertId,
				Title:           t.Title,
				Category:        t.Category,
				MetaImage:       t.MetaImage,
				MetaDescription: t.MetaDescription,
				URL:             t.URL,
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
