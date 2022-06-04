var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";


var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");

    let peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhvalida = validaAltura(altura);


    if (!pesoEhValido) {
        console.log("Peso inválido");
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhvalida) {
        console.log("Altura inválido");
        alturaEhvalida = false;
        tdImc.textContent = "Altura Inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhvalida) {
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso) {
    if ( peso >= 0 && peso < 1000 ) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura){
    if ( altura >= 0 && altura <=3.0) {
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso,altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

/* função anonima
titulo.addEventListener("click", function(){
    console.log("olha ");
});

função nomeada 
titulo.addEventListener("click",mostraMensagem());
function mostraMensagem(){
    console.log("olha");
};
*/