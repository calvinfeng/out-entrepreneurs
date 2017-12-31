package main

import (
	"fmt"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
	"out-entrepreneurs/server/model"
)

const (
	User     = "cfeng"
	Password = "cfeng"
)

// SetupDatabase will perform database connection and auto migration on all gorm.Models
func SetupDatabase() (*gorm.DB, error) {
	db, err := gorm.Open(
		"postgres",
		fmt.Sprintf("user=%v password=%s dbname=out_entrepreneurs sslmode=disable", User, Password),
	)

	if err != nil {
		return nil, err
	}

	db.AutoMigrate(&model.Team{}, &model.Talent{})

	return db, nil
}
