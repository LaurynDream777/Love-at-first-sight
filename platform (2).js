console.log('Game started');


// ================= SIMPLE CLASS (REQUIRED BY TEACHER) =================
class Player {
    constructor(element) {
        this.element = element; //places html element in the object
    }
}


// ================= ELEMENTS =================
const player = new Player(document.querySelector('.player'));
const heel = document.querySelector('.object--1');
const home = document.querySelector('.object--2');
const dad = document.querySelector('.object--3');
const restartButton = document.querySelector('.restart');
const pauseButton = document.querySelector('.pause');
const street = document.querySelector('.street');


// ================= VARIABLES =================
let playerY = 300; //player vertical position

let heelX = 1100; //starting X position
let heelSpeed = 15; // speed of heel

let homeX = 3000; //home starting X position
let dadX = 4900; //dad starting X position

let velocityY = 0;
let gravity = 0.8;
let isJumping = false;
let isPaused = false;


// ================= GAME LOOP =================
function gameLoop() {

    if (spacePressed && !isJumping) {
    velocityY = -15;
    isJumping = true;
}
    if (isPaused) {
        requestAnimationFrame(gameLoop);
        return;
    }

    // ----- JUMP PHYSICS -----
    velocityY += gravity; //increases gravity
    playerY += velocityY; //updates the players vertical position

    if (playerY >= 300) {
        playerY = 300; //keeps player on ground
        velocityY = 0;
        isJumping = false;
    }

    player.element.style.top = `${playerY}px`; //updates player position

    // ----- MOVING OBJECTS -----
    heelX -= heelSpeed;
    heel.style.left = `${heelX}px`;

    homeX -= heelSpeed;
    home.style.left = `${homeX}px`;

    dadX -= heelSpeed;
    dad.style.left = `${dadX}px`;

    requestAnimationFrame(gameLoop);
}


// ================= JUMP CONTROL =================
let spacePressed = false;

document.addEventListener("keydown", function () {
    spacePressed = true;
});

document.addEventListener("keyup", function () {
    spacePressed = false;
});


// ================= RESET BUTTON =================
restartButton.addEventListener("click", function() {
    heelX = 1100; // resets position
    homeX = 3000;
    dadX = 4900;

    heel.style.left = `${heelX}px`; //updates position
    home.style.left = `${homeX}px`;
    dad.style.left = `${dadX}px`;
});

//================= PAUSE BUTTON ====================
pauseButton.addEventListener("click", function () {
    isPaused = !isPaused; //toggles pause

    if (isPaused) {
        street.style.animationPlayState = "paused"; //stops street movement
    } else {
        street.style.animationPlayState = "running"; //runs street movement
    }
});


// ================= START GAME =================
gameLoop();