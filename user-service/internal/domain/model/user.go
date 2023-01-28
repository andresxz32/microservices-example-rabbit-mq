package model

import (
	"fmt"
	"strings"
)

type User struct {
	FirstName string `bson:"firstName" json:"firstName"`
	LastName  string `bson:"lastName" json:"lastName"`
	UserName  string `bson:"userName" json:"userName"`
	Password  string `bson:"password" json:"password"`
}

func (user User) String() string {
	return fmt.Sprintf("%s, %s",  user.FirstName,user.LastName,user.UserName,user.Password)
}

func (person Person) WithUpperCase() Person {
	return Person{
		FirstName: strings.ToUpper(person.FirstName),
		LastName: strings.ToUpper(person.LastName),
		UserName: strings.ToUpper(person.UserName),
		Password: strings.ToUpper(person.Password)
	}
}