package main

import (
	"log"

	"github.com/rabbitmq/amqp091-go"
	amqp "github.com/rabbitmq/amqp091-go"
)

func main() {
	connectRabbitMq()
}

func failOnError(err error, msg string) {
	if err != nil {
		log.Panicf("%s: %s", msg, err)
	}
}

func connectRabbitMq() {
	connection, err := amqp.Dial("amqp://guest:guest@localhost:5672/")
	failOnError(err, "Failed to connect to RabbitMQ")
	defer connection.Close()

	log.Println("Successfully connected to RabbitMQ")

	connectionChannel, err := connection.Channel()
	failOnError(err, "Failed to open a channel")
	defer connectionChannel.Close()

	initConsumer(connectionChannel)
}

func initConsumer(connectionChannel *amqp091.Channel) {

	messages, err := connectionChannel.Consume(
		"user_service", // queue
		"",             // consumer
		true,           // auto-ack
		false,          // exclusive
		false,          // no-local
		false,          // no-wait
		nil,            // args
	)
	failOnError(err, "Failed to register a consumer")

	forever := make(chan bool)
	go func() {
		for message := range messages {
			// For example, show received message in a console.
			log.Printf(" > Received message: %s\n", message.Body)
		}
	}()
	<-forever

}
