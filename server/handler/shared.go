package handler

import (
	"encoding/json"
	"net/http"
)

type ErrorResponse struct {
	Error string `json:"error"`
}

func RenderError(w http.ResponseWriter, message string, code int) {
	res := ErrorResponse{
		Error: message,
	}

	bytes, _ := json.Marshal(res)
	w.WriteHeader(code)
	w.Write(bytes)
}
