package Router

import (
	"github.com/gorilla/mux"
	"webapp/src/Router/rotas"
)

//Gerar retorna um router com todas as rotas configuradas
func Gerar() *mux.Router {
	r := mux.NewRouter()
	return rotas.Configurar(r)
}
