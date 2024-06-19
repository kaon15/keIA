const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quem ganhou o prêmio de Melhor em Campo na final da Copa do Mundo de 2014?",
        alternativas: [
            {
                texto: "Lionel Messi",
                afirmacao: "por que ele foi o melhor jogador em campo"
            },
            {
                texto: "Bastian Schweinsteiger",
                afirmacao: "ele nao foi o melhor em campo"
            }
        ]
    },
    {
        enunciado: "Como é conhecido o clássico de maior rivalidade no Rio de Janeiro?",
        alternativas: [
            {
                texto: "FLA - FLU",
                afirmacao: "isso mesmo"
            },
            {
                texto: "Dérbi",
                afirmacao: "ta maluco parceiro"
            }
        ]
    },
    {
        enunciado: "Qual o time europeu que ganhou mais vezes a Champions League?",
        alternativas: [
            {
                texto: "Real Madrid (Espanha)",
                afirmacao: "15 champions na conta"
            },
            {
                texto: "Barcelona (Espanha)",
                afirmacao: "segundo melhor time espanhol"
            }
        ]
    },
    {
        enunciado: "Qual foi o único jogador brasileiro que ganhou o prêmio de gol mais bonito da FIFA?",
        alternativas: [
            {
                texto: " Neymar",
                afirmacao: "melhor do Basil atualmente"
            },
            {
                texto: "Messi",
                afirmacao: "é argentino"
            }
        ]
    },
    {
        enunciado: "Qual é o time brasileiro considerado o pior time do mundo?",
        alternativas: [
            {
                texto: "Birigui",
                afirmacao: "simplesmente o pior"
            },
            {
                texto: "Americano",
                afirmacao: "tão ruim que nem conheço"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
