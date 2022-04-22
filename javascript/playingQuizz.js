function verificarResposta(respostaClicada) {
    let arrayRespostas = respostaClicada.parentNode.querySelectorAll(".resposta");
    for (let i = 0; i < arrayRespostas.length; i++) {
        arrayRespostas[i].removeAttribute("onclick");
    
        if (arrayRespostas[i].querySelector(".resposta-escondida").innerText === "true") {
            arrayRespostas[i].classList.add("respostaCerta");
        } else {
            arrayRespostas[i].classList.add("respostaErrada");
        }
        
        if (arrayRespostas[i] !== respostaClicada) {
            arrayRespostas[i].querySelector(".desfocarDiv").classList.remove("escondido");
            console.log(arrayRespostas[i].querySelector(".desfocarDiv"));
        }
    
    }
}