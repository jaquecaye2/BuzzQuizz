let tituloQuiz
let URLimagemQuiz
let quantPerguntas
let quantNiveis
let textoPergunta
let corPergunta
let respostasCriarQuiz = []
let urlsImagem = []
let perguntas = []


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
        renderizarCriarPerguntas()
    }
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

        if (textoPergunta.length < 20) {
            alert(`Texto da pergunta inserido incorretamente na pergunta ${i+1}, tente novamente`)
            cont ++
        }
        if (!isValidColor(corPergunta)) {
            alert(`Cor da pergunta inserida incorretamente na pergunta ${i+1}, tente novamente`)
            cont ++
        }

        for (let k = 0; k < respostasCriarQuiz.length; k++){
            let respostaCriarQuiz = respostasCriarQuiz[k].value
            let urlImagem = urlsImagem[k].value

            if (respostaCriarQuiz === "") {
                alert(`Resposta inserida incorretamente na pergunta ${i+1}, resposta${k+1}, tente novamente`)
                cont ++
            }
            if (!isValidURL(urlImagem)) {
                alert(`URL inserida incorretamente na pergunta ${i+1}, resposta${k+1}, tente novamente`)
                cont ++
            }
        }
    }

    if (cont === 0){
        scrolarTopPaginaForm()
        document.querySelector(".containerTela3-2").classList.add("escondido")
        document.querySelector(".containerTela3-3").classList.remove("escondido")
    }
}