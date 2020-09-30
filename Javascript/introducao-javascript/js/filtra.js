var filtro = document.querySelector("#filtrar-tabela");

filtro.addEventListener( "input", function() {
    
    var pacientes = document.querySelectorAll(".paciente");

    if(this.value.length>0){
        pacientes.forEach(paciente => {        
            var nome = paciente.querySelector(".info-nome").textContent;
    
            var expressao = new RegExp(this.value, "i");

            if(!expressao.test(nome)) {
                paciente.classList.add("invisivel");
            } else{
                paciente.classList.remove("invisivel");
            }
        });   
    }else{
        pacientes.forEach(paciente => {   
            paciente.classList.remove("invisivel");
        });
    }
    
    
});