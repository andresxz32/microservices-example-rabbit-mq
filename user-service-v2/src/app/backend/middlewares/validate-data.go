package middlewares

import (
	"fmt"
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"
)

func ReqValidate[T any](next func(*gin.Context, *T)) gin.HandlerFunc {
	return func(context *gin.Context) {
		body := new(T)
		err := context.ShouldBindJSON(body)

		if err != nil {
			errorMessages := []string{}
			for _, e := range err.(validator.ValidationErrors) {
				errorMessages = append(errorMessages, getErrorMessage(strings.ToLower(e.Field()), e.ActualTag()))

			}

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

func getErrorMessage(property string, tag string) string {
	var messages = map[string]string{
		"required": fmt.Sprintf(`The property %s is %s`, property, tag),
		"email":    fmt.Sprintf(`The property %s must be a %s`, property, tag),
		"uuid":     fmt.Sprintf(`The property %s must be a %sv4`, property, tag),
	}
	return messages[tag]
}
