let contadorRespostas = 0;
let contadorRespostasCertas = 0;
let imagemResultado = "";
let textoResultado = "";
let tituloResultado = "";
let mediaAcerto = 0;


function verificarResposta(respostaClicada) {
    let arrayRespostas = respostaClicada.parentNode.querySelectorAll(".resposta");

    if (respostaClicada.querySelector(".resposta-escondida").innerText === "true") {
        contadorRespostasCertas ++;
    }


    for (let i = 0; i < arrayRespostas.length; i++) {
        arrayRespostas[i].removeAttribute("onclick");
    
        if (arrayRespostas[i].querySelector(".resposta-escondida").innerText === "true") {
            arrayRespostas[i].classList.add("respostaCerta");
        } else {
            arrayRespostas[i].classList.add("respostaErrada");
        }
        
        if (arrayRespostas[i] !== respostaClicada) {
            arrayRespostas[i].querySelector(".desfocarDiv").classList.remove("escondido");
        }
    
    }
    contadorRespostas ++;
    setTimeout(scrolProximaPergunta, 2000, respostaClicada);
}

function scrolProximaPergunta (respostaClicada) {
    let numProximaPergunta;
    let elementoPerguntaRespondida = respostaClicada.parentNode.parentNode;
    let arrayPerguntas = document.querySelectorAll(".pergunta");
    for (let i = 0; i < arrayPerguntas.length; i++) {
        if (arrayPerguntas[i] === elementoPerguntaRespondida) {
            numProximaPergunta = i + 1;
        }
    }

    if (numProximaPergunta <= arrayPerguntas.length - 1) {
        arrayPerguntas[numProximaPergunta].scrollIntoView();
    }

    verificarFimQuizz();
}


function verificarFimQuizz () {
    if (contadorRespostas === qtdPerguntas) {
        verificarLevel();

        document.querySelector(".containerTela2").innerHTML += `
            <div class="respostaQuiz">
            <div class="tituloResposta corResposta">
                <h3>${mediaAcerto}% de acerto: ${tituloResultado}</h3>
            </div>
            <div class="textoResposta">
                <div class="imagemResposta">
                    <img src=${imagemResultado} alt="">
                </div>
            <div class="textoRespostaQuiz">
                <p>${textoResultado}</p>
            </div>
            </div>
            <div class="botoes">
                <button class="botaoReiniciar">Reiniciar Quizz</button>
                <button class="botaoVoltarHome" onclick="voltarHome()">Voltar para home</button>
            </div>`

        document.querySelector(".respostaQuiz").scrollIntoView();

    }
}

function verificarLevel () {
    mediaAcerto = 0;
    mediaAcerto = Math.round(100 * contadorRespostasCertas / qtdPerguntas);
    console.log(mediaAcerto);
    console.log(quizzClicadoLevels);

    let arrayMinLevel = [];
    for (let i = 0; i < quizzClicadoLevels.length; i++) {
        arrayMinLevel.push(quizzClicadoLevels[i].minValue)
    }
    arrayMinLevel.sort((a, b) => a - b);
    
    let minLevelResultado = 0;
    for (let i = 0; i < arrayMinLevel.length - 1; i++) {
        if (mediaAcerto >= arrayMinLevel[i] && mediaAcerto < arrayMinLevel[i+1]) {
            minLevelResultado = arrayMinLevel[i]
        } else {
            minLevelResultado = arrayMinLevel[i+1];
        }
    }
    
    for (let i = 0; i < quizzClicadoLevels.length; i++) {
        if (minLevelResultado === quizzClicadoLevels[i].minValue) {
            imagemResultado = quizzClicadoLevels[i].image;
            textoResultado = quizzClicadoLevels[i].text;
            tituloResultado = quizzClicadoLevels[i].title;
        }
    }
}