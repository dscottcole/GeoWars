let startTime
let endTime
let survivalTime

document.addEventListener('DOMContentLoaded', () => {
    loginCheck()
    player.draw()
    enablePlayer()
    enableMouse()
    startTime = Date.now()
    appendMetrics()
    // test()
})

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

// const test = () => {
//     window.addEventListener('click', (e) => {

//     })
// }

const timeAlive = () => {
    endTime = Date.now()
    survivalTime = (endTime - startTime)/1000
}

const animateInterval = setInterval(animate, 50)
const enemyInterval = setInterval (enemies, 500)


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
    survivalSpan.innerText = `Time Alive: ${survivalTime} seconds`
}

const timeInterval = setInterval(displayTime, 1000)

const displayAccuracy = () => {
    const accuracySpan = document.querySelector('#accuracy')
    accuracySpan.innerText = `Accuracy: ${accuracy} %`
}


const submitNewScore = (score, time, acc) => {

    if (isNaN(acc)) { acc = 0}

    let newScore = {
        "score": {
            "score": score,
            "time_alive": time,
            "accuracy": acc,
            "user_id": parseInt(window.localStorage.user_id)
        }
    }

    fetch ('http://localhost:3000/scores', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        },
      body: JSON.stringify(newScore)
    })
    .then(res => res.json())
    .then(data => {
        if (data.message === "Your new score has been added to the scoreboard!") {
            displayScoreboard()
        }
    })
}

const displayScoreboard = () => {
    window.location.href = "./scoreboard.html"
}

const loginCheck = () => {
    if (window.localStorage.user_id === undefined) {
        window.location.href = "../index.html"
    }
}
