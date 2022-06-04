
var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function (event){
    //console.log(event.target);//propriedade event target pega o local onde foi feito o evento
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode // tr = paciente = remover


    //outro jeito event.target.parentNode.remove();
    event.target.parentNode.classList.add("fadeOut");

    if (event.target.tagName == 'TD') {
        setTimeout(function(){
            paiDoAlvo.remove();
        }, 500);
    }
}); 



/*pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function (){
        this.remove();
    })
})*/