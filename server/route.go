package main

import (
	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"github.com/jinzhu/gorm"
	"net/http"
	"out-entrepreneurs/server/handler"
)

func LoadRoutes(db *gorm.DB) http.Handler {
	// Defining middleware
	logMiddleware := NewServerLoggingMiddleware()

	// Instantiate router
	muxRouter := mux.NewRouter().StrictSlash(true)

	// Name-spacing the API
	api := muxRouter.PathPrefix("/api").Subrouter()
	api.Handle("/teams", handler.NewTeamCreateHandler(db)).Methods("POST")
	api.Handle("/teams", handler.NewTeamListHandler(db)).Methods("GET")
	api.Handle("/talents", handler.NewTalentCreateHandler(db)).Methods("POST")
	api.Handle("/talents", handler.NewTalentListHandler(db)).Methods("GET")
	muxRouter.PathPrefix("/").Handler(http.FileServer(http.Dir("public")))

	// NOTE: CORS is probably not necessary because API calls are only coming from frontend
	return handlers.CORS()(logMiddleware(muxRouter))
}
