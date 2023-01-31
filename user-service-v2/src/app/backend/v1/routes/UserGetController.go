package routes

import (
	"net/http"

	middleware "user-service/src/app/backend/middlewares"
	DTO "user-service/src/app/backend/v1/data-transfer"

	"github.com/gin-gonic/gin"
)

//GET request for users
func UserGetController(rg *gin.RouterGroup) {

	users := rg.Group("/users")

	//Route for get all users
	users.GET("/", getUsers)

	//Route for get user by id
	users.GET("/:userId", middleware.ParamsValidator(getUserById))
}

//Controller Method for get all users
func getUsers(context *gin.Context) {
	context.JSON(http.StatusOK, "users")
}

//Controller Method for get user by id
func getUserById(context *gin.Context, params *DTO.GetUserById) {
	context.JSON(http.StatusOK, params)
}
