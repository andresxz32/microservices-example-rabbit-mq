package routes

import "github.com/gin-gonic/gin"

var router = gin.Default()

// Run will start the server
func Run() {
	routes()
	router.Run(":5000")
}

//Method for declare routes
func routes() {

	//Declare prefix
	v1 := router.Group("/api/v1")

	//Call user GET routes
	UserGetRoutes(v1)

	//Call user POST routes
	UserPostRoutes(v1)
}
