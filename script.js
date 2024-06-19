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
                afirmacao: "afirmação"
            },
            {
                texto: "Bastian Schweinsteiger",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial, uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
        alternativas: [
            {
                texto: "FLA - FLU",
                afirmacao: "afirmação"
            },
            {
                texto: "Dérbi",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Qual o time europeu que ganhou mais vezes a Champions League?",
        alternativas: [
            {
                texto: "Real Madrid (Espanha)",
                afirmacao: "afirmação"
            },
            {
                texto: "Barcelona (Espanha)",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Qual foi o único jogador brasileiro que ganhou o prêmio de gol mais bonito da FIFA?",
        alternativas: [
            {
                texto: "Ronaldo Fenômeno",
                afirmacao: "afirmação"
            },
            {
                texto: "Messi",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Qual é o time brasileiro considerado o pior time do mundo?",
        alternativas: [
            {
                texto: "Íbis",
                afirmacao: "afirmação"
            },
            {
                texto: "Americano",
                afirmacao: "afirmação"
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
