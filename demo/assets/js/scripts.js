// Text animation effect

class Scrambler {
    constructor(element) {
        this.element = element;
        this.update = this.update.bind(this);
        this.chars = "0!<>-_\\/[]{}Р“С“Р’СћР“СћРІР‚С™Р’В¬Р“СћРІвЂљВ¬Р’Сњ=+*^?#.,~$%1";
    }

    setText(newText) {
        const oldText = this.element.innerText;
        const promise = new Promise((resolve) => this.resolve = resolve);
        const length = Math.max(oldText.length, newText.length);

        this.queue = []

        for (let i = 0; i < length; i++) {
            const to = newText[i] || "";
            const from = oldText[i] || "";

            const start = Math.floor(Math.random() * 40);
            const end = start + Math.floor(Math.random() * 40);

            this.queue.push({
                from,
                to,
                start,
                end
            });
        }

        cancelAnimationFrame(this.frameRequest);

        this.frame = 0;
        this.update();

        return promise;
    }

    update() {
        let output = "",
            complete = 0;

        for (let i = 0, n = this.queue.length; i < n; i++) {
            let {
                from,
                to,
                start,
                end,
                char
            } = this.queue[i];

            if (this.frame >= end) {
                complete++;
                output += to;
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.25) {
                    char = this.randomChar();
                    this.queue[i].char = char;
                }

                output += char;
            } else {
                output += from;
            }
        }

        this.element.innerHTML = output;

        if (complete === this.queue.length) {
            this.resolve();
        } else {
            this.frameRequest = requestAnimationFrame(this.update);
            this.frame++;
        }
    }

    randomChar() {
        return this.chars[
            Math.floor(Math.random() * this.chars.length)
        ];
    }
}

var counter = 0;
const phrases = ["Rhin", "Rural"];
const element = document.querySelector(".main-text");
const fx = new Scrambler(element);

const next = () => {
    fx.setText(phrases[counter])
        .then(setTimeout(next, 5000));

    counter = ++counter % phrases.length;
}

next();


var i = 0,
    titleText = [
        "Rhi", "Rh", "R",
        "Rh", "Rhi", "Rhin"
    ];

if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", loaded());
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", loaded());
}

function loaded() {
    setInterval(() => {
        document.getElementsByTagName("title")[0]
            .innerHTML = titleText[i++ % titleText.length];
    }, 300);
}




// Music play random and popup close and content unblure
var audioFiles = [
    "audio1",
    "audio2",
    "audio3",
    "audio4"
];

var playRandomAudio = true; // Change playRandomAudio to "false" to play only the first audio file in the array
var audioPlayer = null;

function playAudio() {
    if (playRandomAudio) {
        var randomIndex = Math.floor(Math.random() * audioFiles.length);
        audioPlayer = document.getElementById(audioFiles[randomIndex]);
    } else {
        audioPlayer = document.getElementById(audioFiles[0]);
    }
    audioPlayer.play();
}

var popup = document.getElementById("popup");
var blurryContent = document.getElementById("blurry-content");
var enterButton = document.getElementById("enter-button");

enterButton.onclick = function() {
    popup.style.visibility = "hidden";
    popup.style.opacity = "0";
    blurryContent.style.filter = "none";
    playAudio();
}