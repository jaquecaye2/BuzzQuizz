function abrirQuiz(quizzClicado){
    carregarQuizClicado(quizzClicado);
    document.querySelector("section.tela2").classList.remove("escondido")
    document.querySelector("section.tela3").classList.add("escondido")
}

function voltarHome(){
    document.querySelector("section.tela2").classList.add("escondido")
    document.querySelector("section.tela3").classList.add("escondido")
}

function criarQuiz(){
    document.querySelector("section.tela3").classList.remove("escondido")
}

function passarParaTela2Form(){
    document.querySelector(".containerTela3-1").classList.add("escondido")
    document.querySelector(".containerTela3-2").classList.remove("escondido")
}

function passarParaTela3Form(){
    document.querySelector(".containerTela3-2").classList.add("escondido")
    document.querySelector(".containerTela3-3").classList.remove("escondido")
}

function passarParaTela4Form(){
    document.querySelector(".containerTela3-3").classList.add("escondido")
    document.querySelector(".containerTela3-4").classList.remove("escondido")
}
