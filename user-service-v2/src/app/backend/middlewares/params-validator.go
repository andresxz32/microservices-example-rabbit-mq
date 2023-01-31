package middlewares

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"

	helpers "user-service/src/app/backend/helpers"
)

var validate *validator.Validate

func ParamsValidator[T any](next func(*gin.Context, *T)) gin.HandlerFunc {
	return func(context *gin.Context) {
		params := new(T)
		err := context.ShouldBindUri(params)

		if err != nil {
			errorMessages := []string{}
			for _, e := range err.(validator.ValidationErrors) {
				errorMessages = append(errorMessages, helpers.GetErrorMessage(e.Field(), e.ActualTag()))
			}

			context.JSON(http.StatusUnprocessableEntity, gin.H{
				"errors":     errorMessages,
				"message":    "Unprocessable Entity",
				"statusCode": http.StatusUnprocessableEntity,
			})
			return
		}
		next(context, params)
	}
}
