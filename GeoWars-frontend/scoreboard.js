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

let tableHeaders = ["Global Ranking", "Username", "Score", "Time Alive [seconds]", "Accuracy [%]"]

const getScores = () => {
    fetch('http://localhost:3000/scores')
    .then(res => res.json())
    .then(scores => {
        createScoreboardTable()
        let scoreIdArray = scores.map(score => score.id)
        let maxScoreId = Math.max(...scoreIdArray)
        for (const score of scores) {
            let scoreIndex = scores.indexOf(score) + 1
            appendScores(score, scoreIndex, maxScoreId)
        }
    })
}

const createScoreboardTable = () => {
    while (scoreDiv.firstChild) scoreDiv.removeChild(scoreDiv.firstChild)
    let scoreboardTable = document.createElement('table')
    let scoreboardTableHead = document.createElement('thead')
    scoreboardTableHead.className = 'scoreboardTableHead'
    let scoreboardTableHeaderRow = document.createElement('tr')
    scoreboardTableHeaderRow.className = 'scoreboardTableHeaderRow'

    let scoreboardTableBody = document.createElement('tbody')
    scoreboardTableBody.className = "scoreboardTable-Body"

    scoreboardTableHead.append(scoreboardTableHeaderRow)
    scoreboardTable.append(scoreboardTableHead)

    scoreboardTable.className = 'scoreboardTable'
    tableHeaders.forEach(header => {
        let scoreHeader = document.createElement('th')
        scoreHeader.innerText = header
        scoreboardTableHeaderRow.append(scoreHeader)
    })
    scoreboardTable.append(scoreboardTableBody)
    scoreDiv.append(scoreboardTable)
}

const appendScores = (singleScore, singleScoreIndex, newestScoreId) => {
    const scoreboardTable = document.querySelector('.scoreboardTable')

    let scoreboardTableBodyRow = document.createElement('tr')
    if (parseInt(window.localStorage.user_id) === singleScore.user_id && singleScore.id === newestScoreId) {
        scoreboardTableBodyRow.id = 'latestUserScore'
    }
    scoreboardTableBodyRow.className = 'scoreboardTableBodyRow'
    if (singleScore.id !== undefined) {
        scoreboardTableBodyRow.dataset.id = singleScore.id
    }
    let scoreRanking = document.createElement('td')
    scoreRanking.innerText = singleScoreIndex
    let usernameData = document.createElement('td')
    usernameData.innerText = singleScore.user.username
    let scoreData = document.createElement('td')
    scoreData.innerText = singleScore.score
    let timeData = document.createElement('td')
    timeData.innerText = singleScore.time_alive
    let accuracyData = document.createElement('td')
    accuracyData.innerText = singleScore.accuracy
    scoreboardTableBodyRow.append(scoreRanking, usernameData, scoreData, timeData, accuracyData)
    scoreboardTable.append(scoreboardTableBodyRow)
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
}

const getTenScores = () => {
    fetch('http://localhost:3000/scores')
    .then(res => res.json())
    .then(scores => {    
        createScoreboardTable()
        let scoreIdArray = scores.map(score => score.id)
        let maxScoreId = Math.max(...scoreIdArray)    
        for (let i = 0; i < 10; i++) {
            appendScores(scores[i], i+1, maxScoreId)
        }
    })
}

const getUserScores = () => {
    fetch('http://localhost:3000/scores')
    .then(res => res.json())
    .then(scores => {
        createScoreboardTable()    
        let scoreIdArray = scores.map(score => score.id)
        let maxScoreId = Math.max(...scoreIdArray)         
        let userScores = scores.filter(score => 
            score.user_id === parseInt(window.localStorage.user_id)
        )
        
        for (const score of userScores) {
            let scoreIndex = userScores.indexOf(score) + 1
            appendScores(score, scoreIndex, maxScoreId)
        }
    })
}

