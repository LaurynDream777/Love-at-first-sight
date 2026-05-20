console.log('Game started');

const player = document.querySelector('.player');
const heel = document.querySelector('.object--1');
const restartButton = document.querySelector('.restart');

let playerY = 300;
let velocity = 0;
let gravity = 0;
let jumping = false;

let heelX = 1100;
let heelSpeed = 8;

document.addEventListener("keydown", (event) => {
    if (event.code === "Space" && !jumping) {
        velocity = -16;
        jumping = true;
    }
});

function gameLoop() {

  

    // FLOOR
    if (playerY > 250) {
        playerY = 250;
        velocity = 0;
        jumping = false;
    }

    player.style.top = `${playerY}px`;

    // MOVE HEEL
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