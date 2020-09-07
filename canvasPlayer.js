document.addEventListener('DOMContentLoaded', () => {
loadWorld()
})

const body = document.querySelector("body")
// const world = document.querySelector('#world')


let player = {}

const createCanvas = () => {
    const world = document.createElement('canvas')
    world.id = 'world'
    world.width = '800'
    world.height = '600'
    world.style.backgroundColor = 'black'
    world.style.border = "1px solid black"
    body.append(world)

    if (world.getContext) {

        let ctx = world.getContext('2d');
        let raf
        let r = 25
        let ball = {
            xPos: world.width/2,
            yPos: world.height/2,
            velocity: 25,
            radius: r,
            color: 'blue',
            draw: function() {
            ctx.beginPath();
            ctx.arc(this.xPos, this.yPos, this.radius, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fillStyle = this.color;
            ctx.fill();
            }
        }
        
        function draw() {
            ctx.clearRect(0,0, world.width, world.height);
            ball.draw();
            globalPlayerParams(ball)
            console.log(player)
            raf = window.requestAnimationFrame(draw);
        }

        ball.draw()

    //////////

        let Top = 87
        let Bottom = 83
        let Left = 65
        let Right = 68

        const keydownHandler = event => {
        console.log({code: event.keyCode})
            if (event.keyCode == Bottom) { 
                if (ball.yPos + ball.velocity > world.height - (ball.radius)) {
                    ball.yPos
                } else {
                    ball.yPos += ball.velocity
                }
            }
            if (event.keyCode == Left) {
                if (ball.xPos - ball.velocity < ball.radius) {
                    ball.xPos 
                } else {
                    ball.xPos -= ball.velocity;
                }
            }
            if (event.keyCode === Top) {
                if (ball.yPos - ball.velocity < ball.radius) {
                    ball.yPos 
                } else {
                    ball.yPos -= ball.velocity;
                }
            }
            if (event.keyCode == Right) {
                if (ball.xPos + ball.velocity > world.width - (ball.radius)) {
                    ball.xPos
                } else {
                    ball.xPos += ball.velocity
                }
            }

            draw()
            globalPlayerParams(ball)
            console.log(`x: ${ball.xPos}`)
            console.log(`y: ${ball.yPos}`)
            test()       
        }

        window.addEventListener("keydown",keydownHandler);

        }

}

const globalPlayerParams = (ball) => {
    player.xPos = ball.xPos
    player.yPos = ball.yPos
    player.radius = ball.radius
    player.velocity = ball.velocity
}

const loadWorld = () => {
    createCanvas()
}
