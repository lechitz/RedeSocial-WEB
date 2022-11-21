//Quando um item tiver um id chamado #formulario-cadastro vai ser atrelado um evento pra ele com o 'submit' que vai chamar a função
$('#formulario-cadastro').on('submit', criarUsuario);

function criarUsuario(evento) {
    evento.preventDefault(); //evita de atualizar a página

    if ($('#senha').val() != $('#confirmar-senha').val()) {
        alert("As senhas não coincidem!");
        return;
    }

    $.ajax({
        url: "/usuarios",
        method: "POST",
        data: {
            nome: $('#nome').val(),
            email: $('#email').val(),
            nick: $('#nick').val(),
            senha: $('#senha').val()
        }
    }).done(function () {
        alert("usuario cadastrado com sucesso!");
    }).fail(function (erro) {
        console.log(erro);
        alert("Erro ao cadastrar usuário!");
    });

}