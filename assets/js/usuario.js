$('#parardeseguir').on('click', pararDeSeguir);
$('#seguir').on('click', seguir);
$('#editar-usuario').on('submit', editar);

function pararDeSeguir() {
    const usuarioId = $(this).data('usuario-id');
    $(this).prop('disabled', true);

    $.ajax({
        url: `/usuarios/${usuarioId}/parardeseguir`,
        method: "POST"
    }).done(function () {
        window.location = `/usuarios/${usuarioId}`;
    }).fail(function () {
        Swal.fire("Ops...", "Erro ao parar de seguir usuário", "error");
        $('#parardeseguir').prop('disabled', false);
    });
}

function seguir() {
    const usuarioId = $(this).data('usuario-id');
    $(this).prop('disabled', true);

    $.ajax({
        url: `/usuarios/${usuarioId}/seguir`,
        method: "POST"
    }).done(function () {
        window.location = `/usuarios/${usuarioId}`;
    }).fail(function () {
        Swal.fire("Ops...", "Erro ao seguir usuário", "error");
        $('#seguir').prop('disabled', false);
    });
}

function editar(evento) {
    evento.preventDefault();

    $.ajax({
        url: "/editar-usuario",
        method: "PUT",
        data: {
            nome: $('#nome').val(),
            email: $('#email').val(),
            nick: $('#nick').val(),
        }
    }).done(function () {
        Swal.fire("Sucesso!", "Usuário atualizado com sucesso.", "success")
            .then(function () {
                window.location = "/perfil";
            });
    }).fail(function () {
        Swal.fire("Ops...", "Erro ao atualizar o usuário.", "error");
    });
}