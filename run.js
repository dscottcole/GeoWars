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

// const projectilesAni = () => {
//     drawProjectiles()
// }

const enemies = () => {
    generateEnemy()
}

// const test = () => {
//     window.addEventListener('click', (e) => {

//     })
// }

const animateInterval = setInterval(animate, 50)
// const projectileInterval = setInterval(projectilesAni,1000)
const enemyInterval = setInterval (enemies, 2000)

