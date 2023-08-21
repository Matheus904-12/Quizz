const questions = [
    {
        question: "Qual é a capital da França?",
        options: ["Paris", "Madri", "Roma", "Berlim"],
        correctAnswer: 0,
    },
    {
        question: "Qual é a capital do Brasil?",
        options: ["Brasília", "Rio de Janeiro", "São Paulo", "Belo Horizonte"],
        correctAnswer: 0,
    },
    {
        question: "Qual é o maior planeta do Sistema Solar?",
        options: ["Marte", "Júpiter", "Vênus", "Urano"],
        correctAnswer: 1,
    },
    {
        question: "Qual é o processo pelo qual as plantas convertem luz solar em energia?",
        options: ["Fotossíntese", "Respiração celular", "Osmose", "Mitose"],
        correctAnswer: 0,
    },
    {
        question: "Qual é a maior lua de Júpiter?",
        options: ["Europa", "Ganimedes", "Calisto", "Io"],
        correctAnswer: 0,
    }
    // Adicione mais questões aqui
];

const questionContainer = document.querySelector('.question');
const optionsContainer = document.querySelector('.options');
const scoreDisplay = document.getElementById('score');
const chancesDisplay = document.getElementById('chances');
const timerDisplay = document.getElementById('timer');
const timeLeftDisplay = document.getElementById('time-left');
const timerCircle = document.querySelector('.timer-circle');
const resultDisplay = document.getElementById('result');

let currentQuestionIndex = 0;
let score = 0;
let chances = 2;
let timeLeft = 60;
let timer;

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement('button');
        optionElement.classList.add('option');
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => checkAnswer(index));
        optionsContainer.appendChild(optionElement);
    });

    startTimer();
}

function startTimer() {
    updateTimerDisplay();
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();

        if (timeLeft <= 0) {
            clearInterval(timer);
            checkAnswer(-1);
        }
    }, 1000);
}

function updateTimerDisplay() {
    const timePercent = (timeLeft / 60) * 100;
    timerCircle.style.background = `conic-gradient(transparent ${360 - timePercent * 3.6}deg, #fff ${360 - timePercent * 3.6}deg)`;
    document.getElementById('time-left').textContent = timeLeft;
}

function checkAnswer(selectedIndex) {
    clearInterval(timer);

    const currentQuestion = questions[currentQuestionIndex];
    const correctIndex = currentQuestion.correctAnswer;

    if (selectedIndex === correctIndex) {
        score += 10;
        scoreDisplay.textContent = score;
        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            timeLeft = 60;
            displayQuestion();
        } else {
            questionContainer.textContent = "Quiz completado!";
            optionsContainer.innerHTML = '';
            resultDisplay.textContent = '';
            timerCircle.style.display = 'none';
            backgroundMusic.pause();
        }
    } else {
        chances--;
        chancesDisplay.textContent = chances;

        if (chances === 0) {
            currentQuestionIndex = 0;
            score = 0;
            chances = 2;
            timeLeft = 60;
            displayQuestion();
        } else {
            resultDisplay.textContent = "Resposta incorreta. Tente novamente!";
            timeLeft = 60;
            displayQuestion();
        }
        incorrectSound.play();
    }
}

// Início do Quiz
displayQuestion();
backgroundMusic.play();
