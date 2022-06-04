var botaoAdicionar = document.querySelector("#buscar-paciente");

botaoAdicionar.addEventListener("click", function () {

    var xhr = new XMLHttpRequest();

    xhr.open("GET","  http://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function() {
        var erroAjax = document.querySelector('#erro-ajax');
        if (xhr.status == 200){
            erroAjax.classList.add('invisivel');
            //console.log(xhr.responseText); da a resposta da requisição

        var resposta = xhr.responseText;
        console.log(resposta);//Json
        console.log(typeof resposta);

        var pacientes = JSON.parse(resposta); // transformando em um objeto em javaScript
        console.log(pacientes);
        console.log(typeof pacientes);

        pacientes.forEach(function(paciente) {
            adicionarPacienteNaTabela(paciente);
        });
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel");
        }
        
    });

    xhr.send();// envia a requisição

});