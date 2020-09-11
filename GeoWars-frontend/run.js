let startTime = 0
let endTime = 0
let survivalTime = 0

let player
let animateInterval
let enemyInterval
let timeInterval

document.addEventListener('DOMContentLoaded', () => {
    appendCornerLogo()
    enableLoginForm()
    enableRegistrationForm()
    loginCheck()
    enableButtons()
})

const gameOn = () => {
    showCanvas()
    player = new Player(world.width/2, world.height/2, 25, 25, 'blue')
    player.draw()
    enablePlayer()
    enableIntervals()
    enableMouse()
    startTime = Date.now()
    appendMetrics()
}


const animate = () => {
    ctx.clearRect(0,0, world.width, world.height);
    player.draw()
    player.hitDetect()
    drawProjectiles()
    drawEnemies()
    timeAlive()
    calcAccuracy()
}

const enemies = () => {
    generateEnemy()
}

const timeAlive = () => {
    endTime = Date.now()
    survivalTime = (endTime - startTime)/1000
}

const enableIntervals = () => {
    animateInterval = setInterval(animate, 50)
    enemyInterval = setInterval (enemies, 500)
    timeInterval = setInterval(displayTime, 1000)
}

const clearIntervals = () => {
    clearInterval(animateInterval)
    clearInterval(enemyInterval)
    clearInterval(timeInterval)
}

const appendMetrics = () => {
    
    const survivalSpan = document.createElement('span')
    survivalSpan.id = 'survivalTime'
    survivalSpan.innerText = 'Time Alive: 0 seconds'
    const scoreSpan = document.createElement('span')
    scoreSpan.id = 'score'
    scoreSpan.innerText = 'Score: 0'
    const accuracySpan = document.createElement('span')
    accuracySpan.id = 'accuracy'
    accuracySpan.innerText = 'Accuracy: 0 %'
    metricsDiv.append(survivalSpan, scoreSpan, accuracySpan)
}

const scoreIncrease = () => {
    const scoreSpan = document.querySelector('#score')
    scoreSpan.innerText = `Score: ${enemiesDestroyed}`
}

const displayTime = () => {
    const survivalSpan = document.querySelector('#survivalTime')
    survivalSpan.innerText = `Time Alive:  ${survivalTime} seconds`
}

const displayAccuracy = () => {
    const accuracySpan = document.querySelector('#accuracy')
    if (isNaN(accuracy)) {
        accuracySpan.innerText = `Accuracy:  0 %`
    } else {
        accuracySpan.innerText = `Accuracy:  ${accuracy} %`
    }
    
}

const clearMetrics = () => {
    while (metricsDiv.firstChild) metricsDiv.removeChild(metricsDiv.firstChild)
    startTime = 0
    endTime = 0
    survivalTime = 0
    enemiesDestroyed = 0
    projectilesFired = 0
    projectileArray = []
    enemiesArray = []
}