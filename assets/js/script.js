// select game elements
const startGame = document.getElementById("start_game");
const intro = document.getElementById("intro");
const gameLoad = document.getElementById("gameLoad");
const playBtn = document.getElementById("play");
const gameQuestion = document.getElementById("question");
const questionChoiceA = document.getElementById("A");
const questionChoiceB = document.getElementById("B");
const questionChoiceC = document.getElementById("C");
const questionChoiceD = document.getElementById("D");

// get total amount of questions and set a variable to hold current question index
const totalQuestionsLength = questions.length -1;
let currentQuestion = 0;

// Game start
function gameStart() {
    intro.style.display = 'none';
    gameLoad.style.display = 'block';
    playBtn.innerText = 'Restart QuizBox';
}

// event listeners

// Start QiozBox game
startGame.addEventListener('click', gameStart);