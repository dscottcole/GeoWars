document.addEventListener('DOMContentLoaded', () => {
    getScores()
    enableGeoWarsButton()
    enableLogout()
})

const scoreDiv = document.querySelector("div.scoreboard")
const scoreOl = document.querySelector('#scoreboard')

const getScores = () => {
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
}

const enableGeoWarsButton = () => {
    const geoWarsButton = document.createElement('button')
    geoWarsButton.className = 'button'
    geoWarsButton.innerText = "Return to Battle"
    scoreDiv.append(geoWarsButton)

    geoWarsButton.addEventListener('click', (e) => {
        e.preventDefault()

        returnToGeoWar()
    })
}

const returnToGeoWar = () => {
    window.location.href = "game.html";
}

const enableLogout = () => {
    const logoutButton = document.createElement('button')
    logoutButton.className = 'button'
    logoutButton.innerText = "Log Out"
    scoreDiv.append(logoutButton)

    logoutButton.addEventListener('click', (e) => {
        e.preventDefault()

        logout()
    })
}

const logout = () => {
    window.localStorage.clear()
    window.location.href = "../index.html";
}