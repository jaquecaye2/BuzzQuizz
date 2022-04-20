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

        document.querySelector(".quizzes-outros").innerHTML += `
            <div class="quizz" onclick="abrirQuiz()">
            <img src=${quizzImg} alt="">
            <div class="degrade"></div>
            <p>${quizzTitulo}</p>
            </div>`
    }


}

carregarQuizzes();