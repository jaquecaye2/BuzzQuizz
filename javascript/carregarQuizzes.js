function carregarQuizzes () {
    const promisse = axios.get('https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes');

    promisse.then(renderizarQuizzes);
}

function renderizarQuizzes(resposta) {
    const arrayQuizzes = resposta.data;
    console.log(arrayQuizzes);
    console.log(arrayQuizzes[0]);
    
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
            </div>`;
    }


}

function carregarQuizClicado (quizzClicado) {
    const quizzClicadoID = quizzClicado.querySelector(".id-escondido").innerHTML;
    const promisse = axios.get(`https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes/${quizzClicadoID}`);
    promisse.then(renderizarQuizzClicado);
}

function renderizarQuizzClicado (resposta) {
    const objQuizz = resposta.data;
    let quizzClicadoImg = objQuizz.image;
    let quizzClicadoTitulo = objQuizz.title;
    let quizzClicadoPerguntas = objQuizz.questions;

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


        for (let k = 0; k < quizzClicadoPerguntas[i].answers.length; k++) {
            let imgResposta = quizzClicadoPerguntas[i].answers[k].image;
            let textoResposta = quizzClicadoPerguntas[i].answers[k].text;
            textoHTML += `
                <div class="resposta">
                    <div>
                        <img src=${imgResposta} alt="">
                    </div>
                    <h4>${textoResposta}</h4>
                    <div class="desfocarDiv escondido"></div>
                </div>`;

        }
        textoHTML += `</div></div>`;
        document.querySelector(".containerTela2").innerHTML += textoHTML;
    }


}

carregarQuizzes();