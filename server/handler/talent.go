package handler

import (
	"encoding/json"
	"github.com/jinzhu/gorm"
	"github.com/sirupsen/logrus"
	"net/http"
	"out-entrepreneurs/server/model"
)

// Axios does not use Content-Type:application/x-www-form-urlencoded when it sends params through POST. It’s using
// Content-Type:application/json
func NewTalentCreateHandler(db *gorm.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if err := r.ParseForm(); err != nil {
			logrus.Error(err)
		}

		decoder := json.NewDecoder(r.Body)
		var talent model.Talent
		if err := decoder.Decode(&talent); err != nil {
			RenderError(w, "Failed to parse JSON into struct", 400)
			return
		}

		if err := db.Create(&talent).Error; err != nil {
			RenderError(w, err.Error(), 400)
			return
		}

		w.WriteHeader(http.StatusOK)
		w.Write([]byte("OK"))
	}
}

func NewTalentListHandler(db *gorm.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		var talents []model.Talent
		if err := db.Find(&talents).Error; err != nil {
			RenderError(w, err.Error(), 400)
			return
		}

		if bytes, err := json.Marshal(talents); err != nil {
			RenderError(w, err.Error(), 500)
			return
		} else {
			w.WriteHeader(http.StatusOK)
			w.Write(bytes)
		}
	}
}
