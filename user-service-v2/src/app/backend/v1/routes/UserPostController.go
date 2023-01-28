package routes

import (
	"net/http"

	"github.com/gin-gonic/gin"

	middleware "user-service/src/app/backend/middlewares"
	DTO "user-service/src/app/backend/v1/data-transfer"
)

func UserPostController(rg *gin.RouterGroup) {
	// var createUserDto DTO.CreateUser
	users := rg.Group("/users")
	users.POST("/", middleware.ReqValidate(createUser))
}

func createUser(context *gin.Context, body *DTO.CreateUser) {

	context.JSON(http.StatusOK, gin.H{
		"status": "you are logged in",
		"data":   body,
	})
}
