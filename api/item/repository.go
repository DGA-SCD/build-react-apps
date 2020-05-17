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
	ID           int64      `json:"id"`
	CategoryID   NullString `json:"category_id"`
	CategoryName NullString `json:"category_name"`
	URL          string     `json:"url"`
}

type ItemCreationRequest struct {
	CategoryID int64  `json:"category_id"`
	URL        string `json:"url"`
}

type NullString struct {
	sql.NullString
}

// MarshalJSON for NullString
func (ns *NullString) MarshalJSON() ([]byte, error) {
	if !ns.Valid {
		return []byte("null"), nil
	}
	return json.Marshal(ns.String)
}

type Items []Item

func HandleRequest(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		switch r.Method {
		case "GET":
			stmt := "SELECT i.id, c.id, c.name, url FROM items i LEFT JOIN categories c ON i.category_id = c.id ORDER by i.id DESC"
			rows, err := db.Query(stmt)
			if err != nil {
				log.Print(err)
			}
			defer rows.Close()
			items := make(Items, 0)

			for rows.Next() {
				var item Item
				if err := rows.Scan(&item.ID, &item.CategoryID, &item.CategoryName, &item.URL); err != nil {
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

			stmt := `INSERT into items (category_id, url) VALUES ($1, $2) RETURNING id`

			var lastInsertId int64
			err := db.QueryRow(stmt, i.CategoryID, i.URL).Scan(&lastInsertId)
			if err != nil {
				panic(err)
			}

			stmt = "SELECT name FROM categories WHERE id = $1"
			var categoryName NullString
			err = db.QueryRow(stmt, i.CategoryID).Scan(&categoryName)
			if err != nil {
				log.Print(err)
			}

			item := Item{
				ID:           lastInsertId,
				CategoryName: categoryName,
				URL:          i.URL,
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
