const lines = [
    "Initializing system...",
    "Loading profile...",
    "Connecting...",
    "Access granted",
    "Welcome Gustavo"
];

let i = 0;
let j = 0;
const speed = 40;
const terminal = document.getElementById("terminal-text");

function type() {
    if (i < lines.length) {
        if (j < lines[i].length) {
            terminal.innerHTML += lines[i][j];
            j++;
            setTimeout(type, speed);
        } else {
            terminal.innerHTML += "<br>";
            i++;
            j = 0;
            setTimeout(type, 400);
        }
    } else {
        setTimeout(() => {
            document.getElementById("terminal").style.display = "none";
            document.getElementById("main-content").style.display = "block";
        }, 800);
    }
}

type();