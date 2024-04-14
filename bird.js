let cvs = document.querySelector("#flappybird");
let ctx = cvs.getContext("2d");

let bird = new Image();
let bg = new Image();
let pipeUp = new Image();
let pipeBottom = new Image();
let fg = new Image();
let up = new Image();
let down = new Image();

bird.src = "images/bird.png";
bg.src = "images/bg.png";
pipeUp.src = "images/pipeUp.png";
pipeBottom.src = "images/pipeBottom.png";
fg.src = "images/fg.png";
up.src = "images/bird_up.png";
down.src = "images/bird_down.png";

gap = 110;
let xPos = 10;
let yPos = 150;

let score = 0;

let grav = 0.3;
let change = 5;

pipes_x = [cvs.width, cvs.width + 150];
pipes_y = [0, -100];

document.addEventListener('click', function () {
    change = 4;
});

function draw() {
    ctx.drawImage(bg, 0, 0);

    if (change > 0) {
        ctx.drawImage(up, xPos, yPos);
    } else { 
        ctx.drawImage(down, xPos, yPos);
    } 

    for (let i = 0; i < pipes_x.length; i++) {
        ctx.drawImage(pipeUp, pipes_x[i], pipes_y[i]);
        ctx.drawImage(pipeBottom, pipes_x[i], pipes_y[i] + pipeUp.height + gap);
        pipes_x[i] = pipes_x[i] - 2;

        if (pipes_x[i] === 50) {
            pipes_x.push(pipes_x[pipes_x.length - 1] + 250);
            pipes_y.push(Math.floor(Math.random() * pipeUp.height) - pipeUp.height);
        }

        if (xPos + bird.width >= pipes_x[i] && xPos <= pipes_x[i] + pipeUp.width
           && (yPos <= pipes_y[i] + pipeUp.height || yPos + bird.height >= pipes_y[i] 
           + pipeUp.height + gap) || yPos + bird.height >= cvs.height - fg.height) {
                pipes_x = [cvs.width];
                pipes_y = [0];
                score = 0;
                xPos = 10;
                yPos = 150;
                change = 5;
            }

            if(pipes_x[i] < 5){
                score++;
            }
    }

    ctx.drawImage(fg, 0, 394);

    yPos -= change;
    change -= grav;

    ctx.fillStyle = "#000";
    ctx.font = "24px Arial";
    ctx.fillText("Счет: " + score, 10, 500);

    requestAnimationFrame(draw);
}

draw();