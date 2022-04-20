function validacaoTelaInfoBasicas(){
    let tituloQuiz = document.querySelector("#tituloQuiz").value
    console.log(tituloQuiz.length)
    let URLimagemQuiz = document.querySelector("#URLimagemQuiz").value
    let quantPerguntas = document.querySelector("#quantPerguntas").value
    let quantNiveis = document.querySelector("#quantNiveis").value

    if (tituloQuiz.length < 20 || tituloQuiz.length > 65) {
        alert("Informação inserida incorretamente, tente novamente")
    } else if (quantPerguntas < 3) {
        alert("Informação inserida incorretamente, tente novamente")
    } else if (quantNiveis < 2) {
        alert("Informação inserida incorretamente, tente novamente")
    } else {
        scrolarTopPaginaForm()
        document.querySelector(".containerTela3-1").classList.add("escondido")
        document.querySelector(".containerTela3-2").classList.remove("escondido")
    }
}