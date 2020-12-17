
if (window.navigator.userAgent.indexOf("Edge") > -1) {
    console.log("hh");
    document.getElementById("aboutGridWrapper").style.gridTemplateRows = "50vh 50vh calc(100vh - 70px) calc(100vh - 70px) 50vh 0px";
}

function scrollVision() {
    window.scrollTo(window.scrollX, 
        document.getElementById("our-vision").offsetTop - 70);
}

function scrollWho() {
    window.scrollTo(window.scrollX, 
        document.getElementById("who").offsetTop - 70);
}

function scrollSocialMedia() {
    window.scrollTo(window.scrollX, 
        document.getElementById("our-social-media").offsetTop - 70);
}

function scrollReviews() {
    window.scrollTo(window.scrollX, 
        document.getElementById("our-reviews").offsetTop - 70);
}





var review_headers = [
    "riktigt dåligt",
    "untasty",
    "dålig konsistens",
    "sås",
    "anders",
    "Håkan Lundin"
];

var review_bodies = [
    "ingen service och personalen bråkade",
    "not very tasty",
    "antingen var såsen kletig eller tunnare än vatten",
    "sås",
    "ingelhag",
    "Wery good kuality and god service"
];

var review_stars = [
    "★☆☆☆☆",
    "★★☆☆☆",
    "★★☆☆☆",
    "★★★★★",
    "★★★★☆",
    "★★★★★"
];

var review_index = 0;

updateReview = function() {
    review_index = (review_index + 1) % review_bodies.length;
    document.getElementById("review_header_1").textContent = review_headers[review_index];
    document.getElementById("review_body_1").textContent = review_bodies[review_index];
    document.getElementById("review_stars_1").textContent = review_stars[review_index];
    setTimeout(updateReview, 1000);
}

var drawingCanvas = {
    canvas : document.getElementById("review-canvas"),
    start : function () {
        this.width = document.documentElement.clientWidth;
        this.height = 300;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        console.log(this.width);
        this.canvas.style.backgroundColor = "#FFE4D5";
        this.context = this.canvas.getContext("2d");
        this.interval = setInterval(this.draw, 15);
        this.balls = []
        for (let i = 0; i < (Math.random() + 0.5) * 20; i++) {
            this.balls.push(
                new Ball(100 + Math.random() * (this.width - 200), 100 + Math.random() * (this.height - 200), 
                Math.random() * 50, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10)
            )
        }
    },
    draw : function() {
        ctx = drawingCanvas.context;
        ctx.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
        for (let i = 0; i < drawingCanvas.balls.length; i++) {
            drawingCanvas.balls[i].update();
            drawingCanvas.balls[i].draw();
        }
    }
}


class Ball {
    constructor(x, y, width, x_speed, y_speed) {
        this.x = x; this.y = y; this.width = width; this.x_speed = x_speed; this.y_speed = y_speed;
        let possibleColors = ["#a20a0a", "#D00D0D", "#8C0909", "#460404", "#F11D1D"];
        this.color = possibleColors[Math.floor(Math.random() * possibleColors.length)];
        this.gravityFactor = Math.random()
    }
    draw = function() {
        ctx = drawingCanvas.context;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.width, 0, 2 * Math.PI);
        ctx.fill();
    }
    update = function() {
        this.x += this.x_speed; this.y += this.y_speed;
        this.y_speed += 0.3;

        if (this.x - this.width < 0) {
            this.x_speed = -this.x_speed;
            this.x = this.width;
        } 
        else if (this.x + this.width > drawingCanvas.width) {
            this.x_speed = -this.x_speed;
            this.x = drawingCanvas.width - this.width;
        }

        if (this.y - this.width < 0) {
            this.y_speed = -this.y_speed + 1;
            this.y = this.width;
        } 
        else if (this.y + this.width > drawingCanvas.height) {
            this.y_speed = -((Math.random() + 0.1) * 10);
            this.y = drawingCanvas.height - this.width;
        }

    }
}


window.onload = updateReview();
window.onload = drawingCanvas.start();