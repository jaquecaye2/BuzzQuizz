function zerarEscondido(){
    document.querySelector("section.tela2").classList.add("escondido")
    document.querySelector("section.tela3").classList.add("escondido")
    document.querySelector(".containerTela3-1").classList.remove("escondido")
    document.querySelector(".containerTela3-2").classList.add("escondido")
    document.querySelector(".containerTela3-3").classList.add("escondido")
    document.querySelector(".containerTela3-4").classList.add("escondido")
}

function abrirQuiz(quizzClicado){
    carregarQuizClicado(quizzClicado);
    document.querySelector("section.tela2").classList.remove("escondido")
    document.querySelector("section.tela3").classList.add("escondido")
    document.querySelector("section.tela2").scrollTop = 0
}

function voltarHome(){
    zerarEscondido()
    document.querySelector("section.tela1").scrollTop = 0
}

function criarQuiz(){
    document.querySelector("section.tela3").classList.remove("escondido")
    document.querySelector("section.tela3").scrollTop = 0
}

function scrolarTopPaginaForm(){
    document.querySelector("section.tela3").scrollTop = 0
    document.querySelector("div.containerTela3-1").scrollTop = 0
    document.querySelector("div.containerTela3-2").scrollTop = 0
    document.querySelector("div.containerTela3-3").scrollTop = 0
    document.querySelector("div.containerTela3-4").scrollTop = 0
}

function passarParaTela2Form(){
    scrolarTopPaginaForm()
    document.querySelector(".containerTela3-1").classList.add("escondido")
    document.querySelector(".containerTela3-2").classList.remove("escondido")
}

function passarParaTela3Form(){
    scrolarTopPaginaForm()
    document.querySelector(".containerTela3-2").classList.add("escondido")
    document.querySelector(".containerTela3-3").classList.remove("escondido")
}

function passarParaTela4Form(){
    scrolarTopPaginaForm()
    document.querySelector(".containerTela3-3").classList.add("escondido")
    document.querySelector(".containerTela3-4").classList.remove("escondido")
}

function abrirPerguntaForm(elemento){
    const divPerguntaSelecionada = elemento.parentNode.parentNode.parentNode
    console.log(divPerguntaSelecionada)
    divPerguntaSelecionada.querySelector(".pergunta-fechada").classList.add("escondido")
    divPerguntaSelecionada.querySelector(".pergunta-aberta").classList.remove("escondido")
}