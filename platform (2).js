console.log('Game started');



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
const woman = document.querySelector('.ex-girl');
const kiss = document.querySelector('.object--4');
const heart = document.querySelector('.object--5');
const gloss = document.querySelector('.object--6');


// ================= VARIABLES =================
let playerY = 300; //player vertical position

let heelX = 1100; //starting X position
let heelSpeed = 10; // speed of heel
let homeX = 3000; //home starting X position
let dadX = 4900; //dad starting X position
let kissX = 6800;
let heartX = 8000
let glossX = 9500

let velocityY = 0;
let gravity = 0.6;
let isJumping = false;
let isPaused = false;

let womanX = 1200;   // start her far away
let womanMoving = false;
let womanSpeed = 50;

let gameOver = false;

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

    if (!gameOver) {
    velocityY += gravity;
    playerY += velocityY;

    if (playerY >= 300) {
        playerY = 300;
        velocityY = 0;
        isJumping = false;
    }
}

    player.element.style.top = `${playerY}px`;

    // ----- MOVING OBJECTS -----
    if (!gameOver) {
        heelX -= heelSpeed;
        homeX -= heelSpeed;
        dadX -= heelSpeed;
        kissX -= heelSpeed;
        heartX -= heelSpeed;
        glossX -= heelSpeed;
    }

    heel.style.left = `${heelX}px`;
    home.style.left = `${homeX}px`;
    dad.style.left = `${dadX}px`;
    kiss.style.left = `${kissX}px`;
    heart.style.left = `${heartX}px`;
    gloss.style.left = `${glossX}px`;

    if (womanMoving) {
    womanX -= womanSpeed;
    woman.style.left = `${womanX}px`;
    }
    if (
    !gameOver &&
    (
        bumpedInto(player.element, heel) ||
        bumpedInto(player.element, dad) ||
        bumpedInto(player.element, home) ||
        bumpedInto(player.element, kiss) ||
        bumpedInto(player.element, heart) ||
        bumpedInto(player.element, gloss)
    ) &&
    playerY >= 200  
) {
    gameOver = true;
    heel.style.display = "none";
    home.style.display = "none";
    dad.style.display = "none";
    kiss.style.display = "none";
    heart.style.display = "none";
    gloss.style.display = "none";
    womanMoving = true;
    woman.style.display = "block";
    womanX = 1200;
    woman.style.left = `${womanX}px`;
}
    if (womanMoving && bumpedInto(player.element, woman)) {
    console.log("Game Over");
    isPaused = true;
    womanMoving = false;
    }


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
        heelX = 1100;
        homeX = 3000;
        dadX = 4900;

        womanX = 1200;
        womanMoving = false;

        gameOver = false;
        isPaused = false;

        woman.style.display = "none";
        heel.style.display = "block";
        home.style.display = "block";
        dad.style.display = "block";
        kiss.style.display = "block";
        heart.style.display = "block";
        gloss.style.display = "block";


        heel.style.left = `${heelX}px`;
        home.style.left = `${homeX}px`;
        dad.style.left = `${dadX}px`;
        kiss.style.left = `${kissX}px`;
        heart.style.left = `${heartX}px`;
        gloss.style.left = `${glossX}px`;
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

// ================= COLLISION =============
function bumpedInto(a, b){
    const r1 = a.getBoundingClientRect();
    const r2 = b.getBoundingClientRect();

    return(
        r1.left + 10 < r2.right &&
        r1.right - 10 > r2.left &&
        r1.bottom - 10 > r2.top &&
        r1.top + 10 < r2.bottom
    );
}

// ================= START GAME =================
gameLoop();
