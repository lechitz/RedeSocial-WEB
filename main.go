package main

import (
	"fmt"
	"log"
	"net/http"
	"webapp/src/Router"
	"webapp/src/config"
	"webapp/src/cookies"
	"webapp/src/utils"
)

func main() {
	config.Carregar()
	cookies.Configurar()
	utils.CarregarTemplates()
	r := Router.Gerar()

	fmt.Printf("Escutando na Porta %d\n", config.Porta)
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%d", config.Porta), r))
}
