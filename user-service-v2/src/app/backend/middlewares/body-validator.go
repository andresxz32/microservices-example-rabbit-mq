package middlewares

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"

	helpers "user-service/src/app/backend/helpers"
)

//Declare function for validate body of request
func BodyValidator[T any](next func(*gin.Context, *T)) gin.HandlerFunc {
	return func(context *gin.Context) {

		//Set model to validate
		body := new(T)

		//Get errors
		err := context.ShouldBindJSON(body)

		// Validate if exist errors
		if err != nil {

			errorMessages := []string{}

			//Extract errors
			for _, e := range err.(validator.ValidationErrors) {

				// Add errors to stack errors
				errorMessages = append(errorMessages, helpers.GetErrorMessage(e.Field(), e.ActualTag()))

			}

			// Return response with Error struct
			context.JSON(http.StatusUnprocessableEntity, gin.H{
				"errors":     errorMessages,
				"message":    "Unprocessable Entity",
				"statusCode": http.StatusUnprocessableEntity,
			})
			return
		}
		next(context, body)
	}
}
