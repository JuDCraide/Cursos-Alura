var botao = document.querySelector("#buscar-pacientes");

botao.addEventListener("click", function(event){

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
   
    xhr.addEventListener("load", function(){

        var erroAjax = document.querySelector("#erro-ajax");

        if( xhr.status == 200){
            
            erroAjax.classList.add("invisivel");

            var resposta = xhr.responseText;

            var pacientes = JSON.parse(resposta);
    
            pacientes.forEach(paciente => {
                adicionaPaciente(paciente);
            });
        } else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            
            erroAjax.classList.remove("invisivel");
        }
       
    });
   
    xhr.send();

});