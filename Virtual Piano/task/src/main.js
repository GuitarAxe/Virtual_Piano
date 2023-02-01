document.addEventListener('keydown', function(event) {
    let audio = undefined;
    if (event.code === "KeyA") {
        audio = new Audio("audio/A.mp3");
    }
    if (event.code === "KeyS") {
        audio = new Audio("audio/S.mp3");
    }
    if (event.code === "KeyD") {
        audio = new Audio("audio/D.mp3");
    }
    if (event.code === "KeyF") {
        audio = new Audio("audio/F.mp3");
    }
    if (event.code === "KeyG") {
        audio = new Audio("audio/G.mp3");
    }
    if (event.code === "KeyH") {
        audio = new Audio("audio/H.mp3");
    }
    if (event.code === "KeyJ") {
        audio = new Audio("audio/J.mp3");
    }
    if (event.code === "KeyW") {
        audio = new Audio("audio/W.mp3");
    }
    if (event.code === "KeyE") {
        audio = new Audio("audio/E.mp3");
    }
    if (event.code === "KeyT") {
        audio = new Audio("audio/T.mp3");
    }
    if (event.code === "KeyY") {
        audio = new Audio("audio/Y.mp3");
    }
    if (event.code === "KeyU") {
        audio = new Audio("audio/U.mp3");
    }
    if (audio !== undefined) {
        audio.play();
    }
    console.log(`The '${event.key}' key is pressed.`);
});