var hymnAudio = new Audio("../sounds/hymn.mp3");
hymnAudio.play();

function fadeOutAudio(audio, duration) {
    const step = 0.05;
    const interval = duration / (audio.volume / step);

    const fadeOut = setInterval(() => {
        if (audio.volume > step) {
            audio.volume -= step;
        } else {
            audio.volume = 0;
            clearInterval(fadeOut);
        }
    }, interval);
}

function transitionToWhite() {
    var cave = document.querySelector(".cave");

    cave.classList.add("cave-zoom");
    fadeOutAudio(hymnAudio, 5000);

    setTimeout(() => {
        cave.classList.add("cave-nobg");
        cave.classList.remove("cave-zoom");
        cave.classList.add("speed-transition");
    }, 4000);
}

function wiseCatSpeaks() {
    var wise_cat = document.querySelector(".wise-cat");
    var cat = document.querySelector(".cat");
    var cave = document.querySelector(".cave");
    var text = document.querySelector(".wise-text");

    setTimeout(() => {
        cave.classList.add("hide");
        wise_cat.classList.remove("hide");
        wise_cat.classList.add("show");
    }, 5000);

    setTimeout(() => {
        var audio = new Audio("./sounds/cat-meow.mp3");
        audio.play();
        cat.classList.add("opacity-1");
        text.classList.add("opacity-1");
    }, 5100);
}

document.querySelector(".cave-entrance").addEventListener("click", function () {
    transitionToWhite();
    wiseCatSpeaks();
});