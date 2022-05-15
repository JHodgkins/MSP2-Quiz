// select game elements
const startGame = document.getElementById("start_game");
const intro = document.getElementById("intro");
const gameLoad = document.getElementById("gameLoad");

// Game start
function gameStart() {
    intro.style.display = 'none';
    gameLoad.style.display = 'block';
}

// event listeners
startGame.addEventListener('click', gameStart);