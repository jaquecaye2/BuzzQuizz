function verificarResposta(respostaClicada) {
    let arrayRespostas = respostaClicada.parentNode.querySelectorAll(".resposta");
    for (let i = 0; i < arrayRespostas.length; i++) {
        arrayRespostas[i].removeAttribute("onclick");
    }

    if (respostaClicada.querySelector(".resposta-escondida").innerText === "true") {
        console.log("Acertou");
    } else {
        console.log("Errou");
    }

}