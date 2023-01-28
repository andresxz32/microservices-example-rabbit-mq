package main

import "user-service/src/app/backend/v1/routes"

func main() {
	// Our server will live in the routes package
	routes.Run()
}
