package handler

import (
	"encoding/json"
	"github.com/jinzhu/gorm"
	"github.com/sirupsen/logrus"
	"out-entrepreneurs/server/model"
	"net/http"
)

// Axios does not use Content-Type:application/x-www-form-urlencoded when it sends params through POST. It’s using
// Content-Type:application/json
func NewTeamCreateHandler(db *gorm.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if err := r.ParseForm(); err != nil {
			logrus.Error(err)
		}

		decoder := json.NewDecoder(r.Body)
		var team model.Team
		if err := decoder.Decode(&team); err != nil {
			RenderError(w, "Failed to parse JSON into struct", 400)
			return
		}

		if err := db.Create(&team).Error; err != nil {
			RenderError(w, err.Error(), 400)
			return
		}

		w.WriteHeader(http.StatusOK)
		w.Write([]byte("OK"))
	}
}

func NewTeamListHandler(db *gorm.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		var teams []model.Team
		if err := db.Find(&teams).Error; err != nil {
			RenderError(w, err.Error(), 400)
			return
		}

		if bytes, err := json.Marshal(teams); err != nil {
			RenderError(w, err.Error(), 500)
			return
		} else {
			w.WriteHeader(http.StatusOK)
			w.Write(bytes)
		}
	}
}