const body = document.querySelector("body")
const world = document.querySelector('#world')
const metricsDiv = document.querySelector('.metrics')

let ctx = world.getContext('2d');

class Player {
    constructor(xPos, yPos, radius, velocity, color) {
        this.xPos = xPos
        this.yPos = yPos
        this.radius = radius
        this.velocity = velocity
        this.color = color
    }
    hitDetect () {
        enemiesArray.forEach(enemy => {
            if (this.xPos+this.radius >= enemy.xPos && this.xPos - this.radius <= enemy.xPos+enemy.width && this.yPos+this.radius >= enemy.yPos && this.yPos - this.radius <= enemy.yPos+enemy.height) {
                hideCanvas()
                clearIntervals()
                submitNewScore(enemiesDestroyed, survivalTime, accuracy)
                // console.log(`Time Alive: ${survivalTime} seconds`)
                // console.log(`Accuracy: ${accuracy} %`)
                // console.log(`Score: ${enemiesDestroyed}`)
            }
        })
    }
    draw () {
        ctx.beginPath();
        ctx.arc(this.xPos, this.yPos, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

let Top = 87
let Bottom = 83
let Left = 65
let Right = 68

const keydownHandler = event => {
// console.log({code: event.keyCode})
    if (event.keyCode == Bottom) { 
        if (player.yPos + player.velocity > world.height - (player.radius)) {
            player.yPos
        } else {
            player.yPos += player.velocity
        }
    }
    if (event.keyCode == Left) {
        if (player.xPos - player.velocity < player.radius) {
            player.xPos 
        } else {
            player.xPos -= player.velocity;
        }
    }
    if (event.keyCode === Top) {
        if (player.yPos - player.velocity < player.radius) {
            player.yPos 
        } else {
            player.yPos -= player.velocity;
        }
    }
    if (event.keyCode == Right) {
        if (player.xPos + player.velocity > world.width - (player.radius)) {
            player.xPos
        } else {
            player.xPos += player.velocity
        }
    }
    // console.log(`x: ${player.xPos}`)
    // console.log(`y: ${player.yPos}`)     
}

const enablePlayer = () => {
    window.addEventListener("keydown",keydownHandler)
}