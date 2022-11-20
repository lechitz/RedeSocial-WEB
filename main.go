package main

import (
	"fmt"
	"log"
	"net/http"
	"webapp/src/Router"
)

func main() {
	fmt.Println("Rodando WebApp")
	r := Router.Gerar()

	log.Fatal(http.ListenAndServe(":3000", r))
}
