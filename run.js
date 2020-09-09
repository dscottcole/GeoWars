let startTime
let endTime
let survivalTime

document.addEventListener('DOMContentLoaded', () => {
    player.draw()
    enablePlayer()
    enableMouse()
    startTime = Date.now()

    // test()
})

const animate = () => {
    ctx.clearRect(0,0, world.width, world.height);
    player.draw()
    player.hitDetect()
    drawProjectiles()
    drawEnemies()
}

const enemies = () => {
    generateEnemy()
}

// const test = () => {
//     window.addEventListener('click', (e) => {

//     })
// }

const timeAlive = () => {
    survivalTime = (endTime - startTime)/1000
    console.log(survivalTime)
}

const animateInterval = setInterval(animate, 50)
const enemyInterval = setInterval (enemies, 500)

