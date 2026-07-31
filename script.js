let currentScene = 1;

function nextScene() {
const current =
    document.getElementById(
        `scene${currentScene}`
    );

current.classList.remove("active");

currentScene++;

const next =
    document.getElementById(
        `scene${currentScene}`
    );

if (next) {

    next.classList.add("active");

    if (currentScene === 4) {

        setTimeout(() => {

            next.classList.add("opened");

        }, 500);

    }

}
}
function loveExplosion() {

const button =
    document.querySelector(
        ".pulse-button"
    );

button.innerHTML =
    "I LOVE YOU NURUL ❤️";


for (
    let i = 0;
    i < 50;
    i++
) {

    createHeart();

}


setTimeout(() => {

    nextScene();

}, 3000);
}

function createHeart() {

const heart =
    document.createElement(
        "div"
    );

heart.className =
    "floating-heart";

heart.innerHTML =
    [
        "❤️",
        "💗",
        "💖",
        "💕",
        "💘"
    ][
        Math.floor(
            Math.random() * 5
        )
    ];


heart.style.left =
    Math.random() * 100 + "vw";


heart.style.fontSize =
    (15 +
    Math.random() * 30)
    + "px";


heart.style.animationDuration =
    (3 +
    Math.random() * 4)
    + "s";


document.body.appendChild(
    heart
);


setTimeout(() => {

    heart.remove();

}, 7000);

}

setInterval(() => {

if (
    Math.random() >
    0.5
) {

    createHeart();

}

}, 1000);

function finalSurprise() {

const button =
    document.querySelector(
        "#scene6 .main-button"
    );

button.innerHTML =
    "I LOVE YOU TOO ❤️";


for (
    let i = 0;
    i < 100;
    i++
) {

    setTimeout(
        createHeart,
        i * 30
    );

}
}
