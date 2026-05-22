console.log('Game started');

const player = document.querySelector('.player');
const heel = document.querySelector('.object--1');
const restartButton = document.querySelector('.restart');
const home = document.querySelector ('.object--2')
const dad = document.querySelector('.object--3')

let playerY = 300;
let heelX = 1100;
let heelSpeed = 8;
let homeX = 3000;
let dadX = 4900;



function gameLoop() {
player.style.top = `${playerY}px`;
heelX -= heelSpeed;
heel.style.left = `${heelX}px`;
homeX -=heelSpeed;
home.style.left = `${homeX}px`;
dadX -= heelSpeed;
dad.style.left = `${dadX}px`;




requestAnimationFrame(gameLoop);
}


function resetGame() {
    heelX = 1100;
    heel.style.left = `${heelX}px`;
    heel.style.display = "block";
    homeX = 3000;
    home.style.left = `${homeX}px`;
    dadX = 4900
    dad.style.left = `${dadX}px`;
}
restartButton.addEventListener("click", resetGame);
gameLoop();  