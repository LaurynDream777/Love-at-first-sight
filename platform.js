console.log('Game started');

const player = document.querySelector('.player');
const heel = document.querySelector('.object--1');
const restartButton = document.querySelector('.restart');

let playerY = 300;
let heelX = 1100;
let heelSpeed = 8;



function gameLoop() {


    player.style.top = `${playerY}px`;
    heelX -= heelSpeed;

   

    heel.style.left = `${heelX}px`;

   

    requestAnimationFrame(gameLoop);
}
function resetGame() {
    heelX = 1300;
    heel.style.left = `${heelX}px`;
    heel.style.display = "block";
}
restartButton.addEventListener("click", resetGame);
gameLoop();  