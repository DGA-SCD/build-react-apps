package main

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"
	"strings"
	"time"

	"github.com/ODDS-TEAM/build-react-apps/api/category"
	"github.com/ODDS-TEAM/build-react-apps/api/internal/middleware"
	"github.com/ODDS-TEAM/build-react-apps/api/item"
	"github.com/gorilla/mux"
	_ "github.com/lib/pq"
	"github.com/spf13/viper"
)

func init() {
	viper.SetDefault("port", "1323")
	viper.SetDefault("cors.allow.origin", "*")
	viper.SetDefault("db.conn.string", "host=localhost user=postgres password=mysecretpassword dbname=postgres sslmode=disable")

	viper.AutomaticEnv()
	viper.SetEnvKeyReplacer(strings.NewReplacer(".", "_"))
}

func newDBClient(connStr string) (*sql.DB, error) {
	return sql.Open("postgres", connStr)
}

func main() {
	r := mux.NewRouter()
	r.Use(mux.CORSMethodMiddleware(r))
	r.Use(middleware.Headers(viper.GetString("cors.allow.origin")))

	r.HandleFunc("/healths", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprint(w, "ok")
	})

	db, err := newDBClient(viper.GetString("db.conn.string"))
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	// Additional headers for preflight request
	r.PathPrefix("/").Methods(http.MethodOptions).HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Headers", r.Header.Get("Access-Control-Request-Headers"))
	})

	r.HandleFunc("/items", item.HandleRequest(db)).Methods(http.MethodGet, http.MethodPost)
	r.HandleFunc("/items/{id}", item.Delete(db)).Methods(http.MethodDelete)

	r.HandleFunc("/categories", category.HandleRequest(db)).Methods(http.MethodGet, http.MethodPost)
	r.HandleFunc("/categories/{id}", category.Delete(db)).Methods(http.MethodDelete)

	srv := &http.Server{
		Handler:      r,
		Addr:         "0.0.0.0:" + viper.GetString("port"),
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
	}

	srv.ListenAndServe()
}
