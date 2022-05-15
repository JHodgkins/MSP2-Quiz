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

// Randomise for question array : source Stack Overflow: https://stackoverflow.com/questions/3718282/javascript-shuffling-objects-inside-an-object-randomize
function randomise(questionsArray) {
    return Math.random() - 0.5;
}

// Display question and available answer choices
function displayQuestionOnScreen() {
    randomiseQuestionArray  = questions.sort(randomise);
    userQuestion = questions[currentQuestion];
    gameQuestion.innerText = userQuestion.question;
    questionChoiceA.innerHTML = userQuestion.choiceA;
    questionChoiceB.innerHTML = userQuestion.choiceB;
    questionChoiceC.innerHTML = userQuestion.choiceC;
    questionChoiceD.innerHTML = userQuestion.choiceD;
};

// Check clicked on answer matches correct object answer 
function checkSelectedAnswer(choice) {
    if(choice == questions[currentQuestion].correct) {
        alert('Well Done, you got the Question correct');
    }else {
        alert(`Question was incorrect, the correct answer was ${questions[currentQuestion].correct}`);
    };
    if(currentQuestion < totalQuestionsLength) {
        currentQuestion++;
        displayQuestionOnScreen();
    };
};
// Game start
function gameStart() {
    intro.style.display = 'none';
    
    gameLoad.style.display = 'block';
    displayQuestionOnScreen();
    playBtn.innerText = 'Restart QuizBox';
}



// event listeners

// Start QiozBox game
startGame.addEventListener('click', gameStart);