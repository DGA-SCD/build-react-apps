package category

import (
	"database/sql"
	"log"
	"net/http"
	"strconv"

	"encoding/json"
	"github.com/gorilla/mux"
)

type Category struct {
	ID   int64  `json:"id"`
	Name string `json:"name"`
}

type CategoryCreationRequest struct {
	Name string `json:"name"`
}

type Categories []Category

func HandleRequest(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		switch r.Method {
		case "GET":
			stmt := "SELECT id, name FROM categories"
			rows, err := db.Query(stmt)
			if err != nil {
				log.Print(err)
			}
			defer rows.Close()
			categories := make(Categories, 0)

			for rows.Next() {
				var category Category
				if err := rows.Scan(&category.ID, &category.Name); err != nil {
					log.Fatal(err)
				}
				categories = append(categories, category)
			}

			js, err := json.Marshal(categories)
			if err != nil {
				http.Error(w, err.Error(), http.StatusInternalServerError)
				return
			}

			w.Header().Set("Content-Type", "application/json")
			w.Write(js)
		case "POST":
			var c CategoryCreationRequest

			if err := json.NewDecoder(r.Body).Decode(&c); err != nil {
				http.Error(w, err.Error(), http.StatusBadRequest)
				return
			}

			stmt := `INSERT into categories (name) VALUES ($1) RETURNING id`

			var lastInsertId int64
			err := db.QueryRow(stmt, c.Name).Scan(&lastInsertId)
			if err != nil {
				panic(err)
			}

			category := Category{
				ID:   lastInsertId,
				Name: c.Name,
			}

			js, err := json.Marshal(category)
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

		stmt := `DELETE FROM categories WHERE id = $1`
		db.Exec(stmt, id)

		json.NewEncoder(w).Encode(http.StatusOK)
	}
}
