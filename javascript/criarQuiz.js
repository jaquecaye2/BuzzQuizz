let tituloQuiz
let URLimagemQuiz
let quantPerguntas
let quantNiveis
let textoPergunta
let corPergunta
let respostasCriarQuiz = []
let urlsImagem = []
let perguntas = []
let tituloNivel
let niveis = []
let quizCriado
let questions = []
let answers = []
let levels = []
let idsMeusQuizes = []

function isValidURL(string) {
    let res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    return (res !== null)
}

function isValidColor(string){
    let res = string.match(/(^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$)/g) 
    return (res !== null)
}

function validacaoTelaInfoBasicas(){
    tituloQuiz = document.querySelector("#tituloQuiz").value
    URLimagemQuiz = document.querySelector("#URLimagemQuiz").value
    quantPerguntas = document.querySelector("#quantPerguntas").value
    quantNiveis = document.querySelector("#quantNiveis").value

    /*if (tituloQuiz.length < 20 || tituloQuiz.length > 65) {
        alert("Informação inserida incorretamente, tente novamente")
    } else if (quantPerguntas < 3) {
        alert("Informação inserida incorretamente, tente novamente")
    } else if (quantNiveis < 2) {
        alert("Informação inserida incorretamente, tente novamente")
    } else if (!isValidURL(URLimagemQuiz)) {
        alert("Informação inserida incorretamente, tente novamente")
    } else {}
        */scrolarTopPaginaForm()
        document.querySelector(".containerTela3-1").classList.add("escondido")
        document.querySelector(".containerTela3-2").classList.remove("escondido")
        renderizarCriarPerguntas()
    
}

function renderizarCriarPerguntas(){
    let ulPerguntasCriadas = document.querySelector(".perguntas")

    ulPerguntasCriadas.innerHTML = ""

    for (let i = 0; i < quantPerguntas; i++){
        ulPerguntasCriadas.innerHTML += `
            <div class="criarPergunta">
                <div class="pergunta-fechada">
                    <div class="form form-fechado">
                        <h6>Pergunta ${i+1}</h6>
                        <ion-icon name="create-outline" onclick="abrirPerguntaForm(this)"></ion-icon>
                    </div>
                </div>
                <div class="form pergunta-aberta escondido">
                    <h6>Pergunta ${i+1}</h6>
                    <input type="text" id="textoPergunta" placeholder="Texto da pergunta">
                    <input type="text" id="corPergunta" placeholder="Cor de fundo da pergunta">
                    <h6>Resposta correta</h6>
                    <input type="text" class="respostaCriarQuiz" placeholder="Resposta correta">
                    <input type="url" class="urlImagem" placeholder="URL da imagem">
                    <h6>Respostas incorretas</h6>
                    <input type="text" class="respostaCriarQuiz" placeholder="Resposta incorreta 1">
                    <input type="url" class="urlImagem" placeholder="URL da imagem 1">
                    <input type="text" class="respostaCriarQuiz" placeholder="Resposta incorreta 2">
                    <input type="url" class="urlImagem" placeholder="URL da imagem 2">
                    <input type="text" class="respostaCriarQuiz" placeholder="Resposta incorreta 3">
                    <input type="url" class="urlImagem" placeholder="URL da imagem 3">
                </div>
            </div>
        `
    }
}

function validacaoTelaPerguntasQuiz(){
    
    perguntas = document.querySelectorAll(".criarPergunta")

    let cont = 0

    for (let i = 0; i < perguntas.length; i++){
        textoPergunta = perguntas[i].querySelector("#textoPergunta").value
        corPergunta = perguntas[i].querySelector("#corPergunta").value
        respostasCriarQuiz = perguntas[i].querySelectorAll(".respostaCriarQuiz")
        urlsImagem = perguntas[i].querySelectorAll(".urlImagem")

        /*if (textoPergunta.length < 20) {
            alert(`Texto da pergunta inserido incorretamente na pergunta ${i+1}, tente novamente`)
            cont ++
        }
        if (!isValidColor(corPergunta)) {
            alert(`Cor da pergunta inserida incorretamente na pergunta ${i+1}, tente novamente`)
            cont ++
        }*/

        let answer

        for (let k = 0; k < respostasCriarQuiz.length; k++){
            let respostaCriarQuiz = respostasCriarQuiz[k].value
            let urlImagem = urlsImagem[k].value

            /*if (respostaCriarQuiz === "") {
                alert(`Resposta inserida incorretamente na pergunta ${i+1}, resposta${k+1}, tente novamente`)
                cont ++
            }
            if (!isValidURL(urlImagem)) {
                alert(`URL inserida incorretamente na pergunta ${i+1}, resposta${k+1}, tente novamente`)
                cont ++
            }*/

            if (k === 0){
                answer = {
                    text: respostaCriarQuiz,
                    image: urlImagem,
                    isCorrectAnswer: true
                }
            } else {
                answer = {
                    text: respostaCriarQuiz,
                    image: urlImagem,
                    isCorrectAnswer: false
                }
            }

            answers.push(answer)
        }

        let question = {
            title: textoPergunta,
            color: corPergunta,
            answers: answers
        }

        questions.push(question)

        answers = []
    }

    if (cont === 0){
        scrolarTopPaginaForm()
        document.querySelector(".containerTela3-2").classList.add("escondido")
        document.querySelector(".containerTela3-3").classList.remove("escondido")
        renderizarCriarNives()
    }
}

function renderizarCriarNives(){
    let ulNiveisCriados = document.querySelector(".niveis")

    ulNiveisCriados.innerHTML = ""

    for (let i = 0; i < quantNiveis; i++){
        ulNiveisCriados.innerHTML += `
            <div class="criarNivel">
                <div class="pergunta-fechada">
                    <div class="form form-fechado">
                        <h6>Nível ${i+1}</h6>
                        <ion-icon name="create-outline" onclick="abrirPerguntaForm(this)"></ion-icon>
                    </div>
                </div>
                <div class="form pergunta-aberta escondido">
                    <h6>Nível ${i+1}</h6>
                    <input type="text" id="tituloNivel" placeholder="Título do nível">
                    <input type="number" id="porcentagemAcertoMin" placeholder="% de acerto mínima">
                    <input type="url" id="URLimagemNivel" placeholder="URL da imagem do nível">
                    <input type="text" id="descricaoNivel" placeholder="Descrição do nível">
                </div>
            </div>
        `
    }
}

function validacaoTelaNiveisQuiz(){
    niveis = document.querySelectorAll(".criarNivel")

    let cont = 0

    let porcentagens = []

    for (let i = 0; i < niveis.length; i++){
        tituloNivel = niveis[i].querySelector("#tituloNivel").value
        porcentagemAcertoMin = niveis[i].querySelector("#porcentagemAcertoMin").value
        URLimagemNivel = niveis[i].querySelector("#URLimagemNivel").value
        descricaoNivel = niveis[i].querySelector("#descricaoNivel").value

        porcentagens.push(porcentagemAcertoMin)

        /*if (tituloNivel.length < 10) {
            alert(`Título do nível inserido incorretamente na pergunta ${i+1}, tente novamente`)
            cont ++
        }
        if (porcentagemAcertoMin < 0 || porcentagemAcertoMin > 100) {
            alert(`Porcentagem de acerto mínimo inserido incorretamente na pergunta ${i+1}, tente novamente`)
            cont ++
        }
        if (!isValidURL(URLimagemNivel)) {
            alert(`URL inserida incorretamente na pergunta ${i+1}, tente novamente`)
            cont ++
        }
        if (descricaoNivel.length < 30) {
            alert(`Descrição do nível inserida incorretamente na pergunta ${i+1}, tente novamente`)
            cont ++
        }*/

        let level = {
            title: tituloNivel,
            image: URLimagemNivel,
            text: descricaoNivel,
            minValue: porcentagemAcertoMin
        }

        levels.push(level)
    }

    /*if (cont === 0 && porcentagens.indexOf("0") !== -1){}*/
        scrolarTopPaginaForm()
        document.querySelector(".containerTela3-3").classList.add("escondido")
        document.querySelector(".containerTela3-4").classList.remove("escondido")
        enviarQuizServidor()
        carregarQuizzes()
        encontrarIdQuizCriado()
}

function renderizarSucessoQuiz(){
    let ulTelaSucesso = document.querySelector(".quadroQuiz")

    ulTelaSucesso.innerHTML = ""

    ulTelaSucesso.innerHTML += `
            <img src="${URLimagemQuiz}" alt="">
            <div class="degrade"></div>
            <p>${tituloQuiz}</p>
        `
}

function enviarQuizServidor(){
    quizCriado = {
        title: tituloQuiz,
        image: URLimagemQuiz,
        questions: questions,
        levels: levels
    }

    title = ""
    image = ""
    questions = []
    levels = []

    let promise = axios.post("https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes", quizCriado)
    promise.then(renderizarSucessoQuiz())
    promise.catch(function (){
        console.log("DEU MUITO RUIMM")
    })
}

function encontrarIdQuizCriado(){
    const promisse = axios.get('https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes');

    let arrayQuizzes

    promisse.then(function (resposta){
        arrayQuizzes = resposta.data;
        for (let i = 0; i < arrayQuizzes.length; i++){
            if (arrayQuizzes[i].title === quizCriado.title){
                idsMeusQuizes.push(arrayQuizzes[i].id)
            }
        }
    })
}