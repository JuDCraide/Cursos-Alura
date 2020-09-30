
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista" ;

var pacientes=document.querySelectorAll(".paciente");

for(var i=0; i<pacientes.length; i++) {

    var paciente=pacientes[i];

    var tdpeso=paciente.querySelector(".info-peso");
    var peso = tdpeso.textContent;

    var tdaltura=paciente.querySelector(".info-altura");
    var altura = tdaltura.textContent;
 
    var tdimc = paciente.querySelector(".info-imc");

      var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);
    
    if (!pesoValido) {
        tdimc.textContent = "Peso Inválido";
        paciente.classList.add("paciente-invalido")
    }

    if (!alturaValida) {
        tdimc.textContent = "Altura Inválido";
        paciente.classList.add("paciente-invalido")
    }


    if (alturaValida && pesoValido){
        tdimc.textContent = calculaImc(peso,altura)
    }

}

function calculaImc(peso,altura){
    var imc = peso / (altura * altura); 
    return imc.toFixed(2);
}

function validaPeso(peso){
    if (peso <= 0 || peso >= 1000) {
        return false;
    }
    return true;
}

function validaAltura(altura){
    if (altura<=0 || altura>=3.00 ) {
        return false;
    }
    return true;
}