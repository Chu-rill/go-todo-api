package main

import (
	"context"
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type Todo struct {
	ID int `json:"id"`
	Completed bool `json:"completed"`
	Body string `json:"body"`
}

func main(){

	fmt.Println("hello world")

	err := godotenv.Load(".env")
	if err != nil{
		log.Fatal("Error loading .env file")
	}

	MONGODB_URI := os.Getenv("MONGODB_URI")
	clientOptions := options.Client().ApplyURI(MONGODB_URI)
	client,err := mongo.Connect(context.Background(),clientOptions)

	if err != nil {
		log.Fatal(err)
	}

	err = client.Ping(context.Background(),nil)

	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Connected to MONGODB ATLAS")

}