var tabela = document.querySelector("table")

tabela.addEventListener("dblclick", function(event){
   
    var alvoEvento = event.target;
    var paiAlvo = alvoEvento.parentNode;

    if(paiAlvo.classList.contains("paciente")){
        paiAlvo.classList.add("fadeout")
    } else {
        return;
    }
    setTimeout(function(){
        paiAlvo.remove();    
    },500);

    //*/
});

