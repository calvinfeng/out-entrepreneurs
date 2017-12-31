package main

import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
	"goyak/model"
)

// SetupDatabase will perform database connection and auto migration on all gorm.Models
func SetupDatabase() (*gorm.DB, error) {
	db, err := gorm.Open(
		"postgres",
		"user=cfeng password=cfeng dbname=out_entrepreneurs sslmode=disable",
	)

	if err != nil {
		return nil, err
	}

	db.AutoMigrate(&model.User{}, &model.Message{}, &model.ChatRoom{}, &model.Team{})

	return db, nil
}
