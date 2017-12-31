package model

import "github.com/jinzhu/gorm"

type Talent struct {
	gorm.Model
	Name             string `gorm:"type:varchar(100)" json:"name"`
	Talent           string `gorm:"type:varchar(100)" json:"talent"`
	ContactInfo      string `gorm:"type:varchar(100)" json:"contact_info"`
	School           string `gorm:"type:varchar(100)" json:"school"`
	Description      string `gorm:"type:text"         json:"description"`
}
