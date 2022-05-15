// select game elements
const startGame = document.getElementById("start_game");
const intro = document.getElementById("intro");
const gameLoad = document.getElementById("gameLoad");
const playBtn = document.getElementById("play");

// Game start
function gameStart() {
    intro.style.display = 'none';
    gameLoad.style.display = 'block';
    playBtn.innerText = 'Restart QuizBox';
}

// event listeners
startGame.addEventListener('click', gameStart);