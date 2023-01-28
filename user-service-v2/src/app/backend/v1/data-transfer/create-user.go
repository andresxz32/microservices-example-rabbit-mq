package DTO

type CreateUser struct {
	Id       string `json:"id" binding:"required,uuid" `
	Name     string `json:"name" binding:"required"`
	LastName string `json:"lastName" binding:"required"`
	Email    string `json:"email" binding:"required" binding:"email"`
	Password string `json:"password" binding:"required"`
	Phone    string `json:"phone" binding:"required,e164"`
}
