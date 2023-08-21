// Definindo as perguntas do quiz
const questions = [
    {
        question: "Qual é a capital da França?",
        options: [
            '<i class="fas fa-flag"></i> Paris',
            '<i class="fas fa-flag"></i> Madri',
            '<i class="fas fa-flag"></i> Roma',
            '<i class="fas fa-flag"></i> Berlim'
        ],
        correctAnswer: 0,
        imagePath: "frança2.jpg"
    },
    // ... outras perguntas ...
];

// Cores para as alternativas
const colors = ["#FF5555", "#FFD700", "#4CAF50", "#3498DB"];

// Carregando áudios
const correctSound = new Audio('depositphotos_426537900-track-correct-guess-bing.mp3');
const incorrectSound = new Audio('som_de_resposta_errada_efeito_sonoro_toquesengracadosmp3.com');
const backgroundMusic = new Audio('LAKEY INSPIRED - Me 2 (Feat. Julian Avila).mp3');
backgroundMusic.loop = true;

// Selecionando elementos DOM
const questionContainer = document.querySelector('.question');
const optionsContainer = document.querySelector('.options-container');
const scoreDisplay = document.getElementById('score');
const chancesDisplay = document.getElementById('chances');
const timerCircle = document.querySelector('.timer-circle');
const resultDisplay = document.getElementById('result');

// Variáveis de estado do quiz
let currentQuestionIndex = 0;
let score = 0;
let chances = 2;
let timeLeft = 60;
let timer;

// Iniciando a reprodução da música de fundo quando o conteúdo é carregado
document.addEventListener("DOMContentLoaded", function() {
    backgroundMusic.play();
});

// Função para exibir uma pergunta
function displayQuestion() {
    // ... código para exibir a pergunta ...
}

// Função para iniciar o temporizador
function startTimer() {
    // ... código para iniciar o temporizador ...
}

// Função para atualizar a exibição do temporizador
function updateTimerDisplay() {
    // ... código para atualizar a exibição do temporizador ...
}

// Função para verificar a resposta selecionada
function checkAnswer(selectedIndex) {
    // ... código para verificar a resposta e atualizar o estado ...
}

// Início do Quiz
displayQuestion();
backgroundMusic.play();
Aqui estão as partes principais do seu código explicadas:

Definindo as perguntas do quiz: Nesta seção, você está criando um array chamado questions que contém objetos representando cada pergunta do quiz. Cada objeto possui propriedades como question, options, correctAnswer e imagePath.

Cores para as alternativas: Aqui, você criou um array chamado colors que armazena cores em formato hexadecimal para personalizar o fundo dos botões de resposta.

Carregando áudios: Você está criando objetos de áudio para os sons de resposta correta, resposta incorreta e música de fundo, usando a classe Audio.

Selecionando elementos DOM: Você está usando métodos como querySelector e getElementById para selecionar elementos HTML com base em suas classes ou IDs.

Variáveis de estado do quiz: Estas variáveis acompanham o estado atual do quiz, como o índice da pergunta atual, pontuação, chances restantes, tempo restante e identificador para o temporizador.

Iniciando a reprodução da música de fundo: Você está usando um ouvinte de evento DOMContentLoaded para iniciar a reprodução da música de fundo assim que o conteúdo for totalmente carregado.

Funções: Aqui, você definiu várias funções para realizar tarefas específicas, como exibir perguntas, iniciar o temporizador, atualizar a exibição do temporizador e verificar respostas.

Início do Quiz: Você inicia o quiz chamando a função displayQuestion() e inicia a reprodução da música de fundo.

Cada seção do código desempenha um papel importante no funcionamento do seu quiz. Ao explicar em sala de aula, você pode percorrer cada seção, explicar o que ela faz e como ela contribui para o funcionamento geral do quiz. Isso ajudará seus alunos a entenderem como cada parte do código está interconectada para criar a experiência completa do quiz.