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
        imagePath: "brasil20.jpeg"
    },
    {
        question: "Qual é o maior planeta do Sistema Solar?",
        options: ["Marte", "Júpiter", "Vênus", "Urano"],
        correctAnswer: 1,
        imagePath: "url_da_imagem_2.jpg"
    },
    {
        question: "Qual é o processo pelo qual as plantas convertem luz solar em energia?",
        options: ["Fotossíntese", "Respiração celular", "Osmose", "Mitose"],
        correctAnswer: 0,
        imagePath: "url_da_imagem_3.jpg"
    },
    {
        question: "Qual é a maior lua de Júpiter?",
        options: ["Europa", "Ganimedes", "Calisto", "Io"],
        correctAnswer: 0,
    }
    // Adicione mais questões aqui
];

const correctSound = new Audio("correct-sound.mp3");
const incorrectSound = new Audio("incorrect-sound.mp3");
const backgroundMusic = new Audio("background-music.mp3");
backgroundMusic.loop = true;

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
let timer; // Referência ao temporizador

function displayQuestion() {
    questionContainer.textContent = questions[currentQuestionIndex].question;
    optionsContainer.innerHTML = '';

    const optionContainer = document.createElement('div');
    optionContainer.classList.add('option-container');

    questions[currentQuestionIndex].options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');

        const colors = ['red', 'yellow', 'green', 'blue'];
        optionElement.style.backgroundColor = colors[index];

        const optionText = document.createElement('span');
        optionText.textContent = option;
        optionElement.appendChild(optionText);

        optionElement.addEventListener('click', () => checkAnswer(index));
        optionContainer.appendChild(optionElement);
    });

    optionsContainer.appendChild(optionContainer);

    startTimer();
}

function startTimer() {
    updateTimerDisplay();
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();

        if (timeLeft <= 0) {
            clearInterval(timer);
            checkAnswer(-1); // Tempo esgotado
        }
    }, 1000);
}

function updateTimerDisplay() {
    timeLeftDisplay.textContent = timeLeft < 10 ? `0${timeLeft}` : timeLeft;
    const timePercent = (timeLeft / 60) * 100;
    timerCircle.style.background = `conic-gradient(transparent ${360 - timePercent * 3.6}deg, #fff ${360 - timePercent * 3.6}deg)`;
}

function checkAnswer(selectedIndex) {
    clearInterval(timer);

    const correctAnswerIndex = questions[currentQuestionIndex].correctAnswer;
    const selectedOption = optionsContainer.querySelectorAll('.option')[selectedIndex];

    if (selectedIndex === correctAnswerIndex) {
        score += 10;
        scoreDisplay.textContent = `Pontuação: ${score}`;
        selectedOption.classList.add('clicked', 'correct');
        correctSound.play();
    } else {
        selectedOption.classList.add('clicked', 'incorrect');
        chances--;
        chancesDisplay.textContent = `Chances: ${chances}`;
        incorrectSound.play();
    }

    setTimeout(() => {
        selectedOption.classList.remove('clicked', 'correct', 'incorrect');
        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            timeLeft = 60;
            displayQuestion();
        } else {
            backgroundMusic.pause();
            questionContainer.textContent = "Quiz completado!";
            optionsContainer.innerHTML = '';
            timerDisplay.textContent = '';
            resultDisplay.textContent = `Sua pontuação final: ${score}`;
        }
    }, 1000);
}

playBackgroundMusic();
displayQuestion();
