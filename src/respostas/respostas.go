package respostas

import (
	"encoding/json"
	"log"
	"net/http"
)

//Erro representa a resposta de erro da API
type ErroAPI struct {
	Erro string `json:"erro"`
}

//JSON Retorna uma resposta em formato JSON
func JSON(w http.ResponseWriter, statusCode int, dados interface{}) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(statusCode)

	if erro := json.NewEncoder(w).Encode(dados); erro != nil {
		log.Fatal(erro)
	}
}

//TratarStatusCodeErro trata as requisições com statusCode igual ou superior a 400
func TratarStatusCodeErro(w http.ResponseWriter, r *http.Response) {
	var erro ErroAPI
	json.NewDecoder(r.Body).Decode(&erro)
	JSON(w, r.StatusCode, erro)

}