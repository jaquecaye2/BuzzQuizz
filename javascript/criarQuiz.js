let tituloQuiz
let URLimagemQuiz
let quantPerguntas
let quantNiveis

function isValidURL(string) {
    let res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    return (res !== null)
}

function validacaoTelaInfoBasicas(){
    tituloQuiz = document.querySelector("#tituloQuiz").value
    console.log(tituloQuiz.length)
    URLimagemQuiz = document.querySelector("#URLimagemQuiz").value
    quantPerguntas = document.querySelector("#quantPerguntas").value
    quantNiveis = document.querySelector("#quantNiveis").value

    if (tituloQuiz.length < 20 || tituloQuiz.length > 65) {
        alert("Informação inserida incorretamente, tente novamente")
    } else if (quantPerguntas < 3) {
        alert("Informação inserida incorretamente, tente novamente")
    } else if (quantNiveis < 2) {
        alert("Informação inserida incorretamente, tente novamente")
    } else if (!isValidURL(URLimagemQuiz)) {
        alert("Informação inserida incorretamente, tente novamente")
    } else {
        scrolarTopPaginaForm()
        document.querySelector(".containerTela3-1").classList.add("escondido")
        document.querySelector(".containerTela3-2").classList.remove("escondido")
    }
}