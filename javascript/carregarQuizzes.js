let qtdPerguntas = 0;
let objQuizzClicado = {};
let quizzClicadoLevels = [];
let elementoQuizzClicado;

function carregarQuizzes () {
    const promisse = axios.get('https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes');

    promisse.then(renderizarQuizzes);
}

function renderizarQuizzes(resposta) {
    const arrayQuizzes = resposta.data;
    
    document.querySelector(".quizzes-outros").innerHTML = "";
    
    for (let i = 0; i < arrayQuizzes.length; i++) {
        let quizzImg = arrayQuizzes[i].image;
        let quizzTitulo = arrayQuizzes[i].title;
        let quizzID = arrayQuizzes[i].id;

        document.querySelector(".quizzes-outros").innerHTML += `
            <div class="quizz" onclick="abrirQuiz(this)">
                <img src=${quizzImg} alt="">
                <div class="degrade"></div>
                <p>${quizzTitulo}</p>
                <h6 class="id-escondido">${quizzID}</h6>
            </div>`
    }

    
}

function carregarQuizClicado (quizzClicado) {
    elementoQuizzClicado = quizzClicado;
    const quizzClicadoID = quizzClicado.querySelector(".id-escondido").innerHTML;
    const promisse = axios.get(`https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes/${quizzClicadoID}`);
    promisse.then(renderizarQuizzClicado);
}

function renderizarQuizzClicado (resposta) {
    objQuizzClicado = resposta.data;
    console.log(objQuizzClicado);
    let quizzClicadoImg = objQuizzClicado.image;
    let quizzClicadoTitulo = objQuizzClicado.title;
    let quizzClicadoPerguntas = objQuizzClicado.questions;
    quizzClicadoLevels = objQuizzClicado.levels;
    qtdPerguntas = quizzClicadoPerguntas.length;

    document.querySelector(".tituloQuizComImagem").innerHTML = "";

    document.querySelector(".tituloQuizComImagem").innerHTML = `
        <img src=${quizzClicadoImg} alt="">
        <div class="desfocarImagem"></div>
        <div class="tituloQuiz">
        <p>${quizzClicadoTitulo}</p>
        </div>`;

    document.querySelector(".containerTela2").innerHTML = "";

    for (let i = 0; i < quizzClicadoPerguntas.length; i++) {
        let pergunta = quizzClicadoPerguntas[i].title;
        let textoHTML = "";
        
        textoHTML += `
            <div class="pergunta">
                <div class="tituloPergunta corPergunta1">
                    <h3>${pergunta}</h3>
                </div>
                <div class="containerRespostas">`;

        const arrayRespostasEmbaralhadas = quizzClicadoPerguntas[i].answers;
        arrayRespostasEmbaralhadas.sort(comparador);

        for (let k = 0; k < arrayRespostasEmbaralhadas.length; k++) {
            let imgResposta = arrayRespostasEmbaralhadas[k].image;
            let textoResposta = arrayRespostasEmbaralhadas[k].text;
            let isCorrectAnswer = arrayRespostasEmbaralhadas[k].isCorrectAnswer;
            textoHTML += `
                <div class="resposta" onclick="verificarResposta(this)">
                    <div>
                        <img src=${imgResposta} alt="">
                    </div>
                    <h4>${textoResposta}</h4>
                    <div class="desfocarDiv escondido"></div>
                    <h6 class="resposta-escondida">${isCorrectAnswer}</h6>
                </div>`;

        }
        textoHTML += `</div></div>`;
        document.querySelector(".containerTela2").innerHTML += textoHTML;
    }


}

function comparador() { 
	return Math.random() - 0.5; 
}

carregarQuizzes();