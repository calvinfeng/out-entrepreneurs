package model

import "github.com/jinzhu/gorm"

type Team struct {
	gorm.Model
	Name             string `gorm:"type:varchar(100)" json:"team_name"`
	TeamCategory     string `gorm:"type:varchar(100)" json:"team_category"`
	PositionTitle    string `gorm:"type:varchar(100)" json:"position_title"`
	PositionCategory string `gorm:"type:varchar(100)" json:"position_category"`
	ContactInfo      string `gorm:"type:varchar(100)" json:"contact_info"`
	School           string `gorm:"type:varchar(100)" json:"school"`
	Description      string `gorm:"type:text"         json:"description"`
}
