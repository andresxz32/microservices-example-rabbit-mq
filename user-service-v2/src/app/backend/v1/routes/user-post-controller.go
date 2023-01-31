package routes

import (
	"net/http"
	middleware "user-service/src/app/backend/middlewares"
	DTO "user-service/src/app/backend/v1/data-transfer"

	"github.com/gin-gonic/gin"
)

//POST request for users
func UserPostController(rg *gin.RouterGroup) {

	users := rg.Group("/users")

	//Add middleware for validate user model
	users.POST("/", middleware.BodyValidator(createUser))
}

func createUser(context *gin.Context, body *DTO.CreateUser) {
	context.JSON(http.StatusOK, gin.H{
		"status": "you are logged in",
		"data":   body,
	})
}
