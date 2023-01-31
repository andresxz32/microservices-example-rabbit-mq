package helpers

import (
	"fmt"
)

func GetErrorMessage(property string, tag string) string {
	var messages = map[string]string{
		"required": fmt.Sprintf(`The property << %s >> is %s`, property, tag),
		"email":    fmt.Sprintf(`The property << %s >> must be a %s`, property, tag),
		"uuid":     fmt.Sprintf(`The property << %s >> must be a %sv4`, property, tag),
	}
	return messages[tag]
}
