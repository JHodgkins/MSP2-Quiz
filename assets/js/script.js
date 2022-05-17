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
const gameProgress = document.getElementById("progress");
const gameStreak = document.getElementById("streak");

// Total question to ask through the quiz
let totalQuestionsToAnswer = 3;

// Set current questions correct counter to initial value of 0
let currentQuestionsCorrect = 0;

// Set streak counter to initial value of 0, longest streak value set to 0
let streak = 0;
let longestStreak = 0;

//set game points value to initl value 0, bonus pounts value set to 100
let gamePoints = 0;
let bonus = 100;

// get total amount of questions and set a variable to hold current question index
let totalQuestionsLength = questions.length -1;
let currentQuestion = 0;

// Set length of shuffled array to questions amount for quiz
totalQuestionsLength = totalQuestionsToAnswer -1;

// Randomise for question array : source Stack Overflow: https://stackoverflow.com/questions/3718282/javascript-shuffling-objects-inside-an-object-randomize
function randomise(q) {
    return Math.random() - 1;
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

// show visual indication of how many questions there are
function numberOfQuestionsIndicator() {
    let i = 0;
    for(let i = 0; i <= totalQuestionsLength; i++) {
    let questionNumber = i +1;
    gameProgress.innerHTML += '<span class="game-progress" id="'+i+'">' + questionNumber + '</span>';
    }
};

// Check clicked on answer matches correct object answer 
function checkSelectedAnswer(choice) {
    if(choice == questions[currentQuestion].correct) {
        alert('Well Done, you got the Question correct');
        correctChoice(choice);
        incrementQuestionsCorrect();
        currentQuestionsCorrect++;
        streak++;
        longestStreak = streak;
        gameStreak.innerText = streak;
        gamePoints += bonus;
        streakAward();
    }else {
        alert(`Question was incorrect, the correct answer was ${questions[currentQuestion].correct}`);
        incorrectChoice(choice);
        if(streak >= 1) {
            streak = 0;
        }
        gameStreak.innerText = streak;
    };
    if(currentQuestion < totalQuestionsLength) {
        currentQuestion++;
        displayQuestionOnScreen();
    };
};

function incorrectChoice(choice) {
    document.getElementById(currentQuestion).classList.add('incorrect-choice');
}

function correctChoice(choice) {
    document.getElementById(currentQuestion).classList.add('correct-choice');
}

// Incroment correct questions correct
function incrementQuestionsCorrect(){
    let currentQuestionsCorrect = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++currentQuestionsCorrect;
    return currentQuestionsCorrect; 
}

// Alert user when a certain streak count is reached
function streakAward() {
    if(streak == 2 || streak == 5 || streak == 10 || streak == 15) {
        alert(`You just got a ${streak} question streak, well done keep going`);
    }};

// Game start
function gameStart() {
    intro.style.display = 'none';
    gameLoad.style.display = 'block';
    displayQuestionOnScreen();
    playBtn.innerText = 'Restart QuizBox';
    numberOfQuestionsIndicator()
}

// event listeners

// Start QiozBox game
startGame.addEventListener('click', gameStart);