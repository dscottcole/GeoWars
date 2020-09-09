document.addEventListener('DOMContentLoaded', () => {
    player.draw()
    enablePlayer()
    enableMouse()
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

const animateInterval = setInterval(animate, 50)
const enemyInterval = setInterval (enemies, 500)

