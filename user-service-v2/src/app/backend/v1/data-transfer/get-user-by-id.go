package DTO

type GetUserById struct {
	UserId string `uri:"userId" binding:"required,uuid"`
}
