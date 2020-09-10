const scoreDiv = document.querySelector("div.scoreboard")
const scoreOl = document.querySelector('#scoreboard')


const submitNewScore = (score, time, acc) => {
    if (isNaN(acc)) {
        acc = 0
    } else {parseFloat(acc)}

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
            refreshScoreboard()
        }
    })
}

const getScores = () => {
    while (scoreOl.firstChild) scoreOl.removeChild(scoreOl.firstChild)
    fetch('http://localhost:3000/scores')
    .then(res => res.json())
    .then(scores => {
        scores.forEach(score => {
            appendScores(score)
        })
    })
}

const appendScores = (singleScore) => {
    const scoreLi = document.createElement('li')
    scoreLi.dataset.id = singleScore.id
    scoreLi.innerText = `Username: ${singleScore.user.username}, Score: ${singleScore.score}, Time Survived: ${singleScore.time_alive} seconds, Accuracy: ${singleScore.accuracy}%`
    scoreOl.append(scoreLi)
    console.log('hi')
}

const hideScoreboard = () => {
    scoreDiv.style.display = 'none'
    hideButtons()
}

const showScoreboard = () => {
    scoreDiv.style.display = 'block'
    showButtons()
}

const refreshScoreboard = () => {
    showScoreboard()
    clearMetrics()
    getTenScores()
    // getScores()
}


const getTenScores = () => {
    while (scoreOl.firstChild) scoreOl.removeChild(scoreOl.firstChild)
    fetch('http://localhost:3000/scores')
    .then(res => res.json())
    .then(scores => {            
        let topTenScores = scores.splice(0,10)
        topTenScores.forEach(score => {
            appendScores(score)
        })
    })
}
const getUserScores = () => {
    while (scoreOl.firstChild) scoreOl.removeChild(scoreOl.firstChild)
    fetch('http://localhost:3000/scores')
    .then(res => res.json())
    .then(scores => {            
        let userScores = scores.filter(score => 
            score.user_id === parseInt(window.localStorage.user_id)
        )
        userScores.forEach(score => {
            appendScores(score)
        })
    })
}

