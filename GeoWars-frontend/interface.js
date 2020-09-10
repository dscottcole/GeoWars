const loginDiv = document.querySelector('div.login')
const loginForm = document.querySelector('.login-form')
const registrationDiv = document.querySelector('div.registration')
const registrationForm = document.querySelector('.registration-form')
const deniedDiv = document.querySelector('div.denied-login')

const enableLoginForm = () => {
    hideCanvas()
    appendRegistrationButton()
    hideRegistration()
    const usernameField = document.querySelector('#username')
    const passwordField = document.querySelector('#password')
 

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault()

        let username = usernameField.value
        let password = passwordField.value  
        e.target.reset()
        submitLoginCredentials(username, password)

    })
}

const submitLoginCredentials = (user, pw) => {

    let userInfo = {
        "user": {
            username: user,
            password: pw
        }
    }

    fetch ('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userInfo)
    })
    .then(res => res.json())
    // .then(console.log)
    .then(data => {

        if (data.message) {
            deniedLogin(data)
        } else {
            userToLocalstorage(data)
        }        
    })    
}


const userToLocalstorage = (verifiedUser) => {
    window.localStorage.setItem('user_id', verifiedUser.id)
    approvedLogin()
}

const deniedLogin = (object) => {
    clearGandalf()
    const deniedH = document.createElement('h2')
    deniedH.innerText = object.message
    let gandalf = document.createElement('img')
    gandalf.src = 'https://thumbs.gfycat.com/HilariousDigitalAkitainu-size_restricted.gif'
    gandalf.class = 'gandalf'
    deniedDiv.append(deniedH, gandalf)
}

const clearGandalf = () => {
    while (deniedDiv.firstChild) deniedDiv.removeChild(deniedDiv.firstChild)
}

const approvedLogin = () => {
    clearGandalf()
    hideLogin()
    hideRegistration()
    gameOn()
}

const loginCheck = () => {
    if (window.localStorage.user_id !== undefined) {
        approvedLogin()
    } else {
        showLogin()
    }
}

const hideLogin = () => {
    loginDiv.style.display = 'none'
}

const showLogin = () => {
    loginDiv.style.display = 'block'
}

const enableGeoWarsButton = () => {
    const geoWarsButton = document.createElement('button')
    geoWarsButton.id = 'geo-button'
    geoWarsButton.className = 'button'
    geoWarsButton.innerText = "Return to Battle"
    scoreDiv.append(geoWarsButton)

    geoWarsButton.addEventListener('click', (e) => {
        e.preventDefault()

        returnToGeoWar()
    })
}

const returnToGeoWar = () => {
    approvedLogin()
    hideScoreboard()
}

const enableLogout = () => {
    const logoutButton = document.createElement('button')
    logoutButton.id = 'logout-button'
    logoutButton.className = 'button'
    logoutButton.innerText = "Log Out"
    scoreDiv.append(logoutButton)

    logoutButton.addEventListener('click', (e) => {
        e.preventDefault()

        logout()
    })
}

const enableAllScores = () => {
    const allScoresButton = document.createElement('button')
    allScoresButton.id = 'all-scores-button'
    allScoresButton.className = 'button'
    allScoresButton.innerText = "See All Scores"
    scoreDiv.append(allScoresButton)

    allScoresButton.addEventListener('click', (e) => {
        e.preventDefault()

        getScores()
    })
}

const enableUserScores = () => {
    const userScoresButton = document.createElement('button')
    userScoresButton.id = 'user-scores-button'
    userScoresButton.className = 'button'
    userScoresButton.innerText = "Your Scores"
    scoreDiv.append(userScoresButton)

    userScoresButton.addEventListener('click', (e) => {
        e.preventDefault()

        getUserScores()
    })
}

const enableButtons = () => {
    enableGeoWarsButton()
    enableAllScores()
    enableUserScores()
    enableLogout()
    hideButtons()
}

const hideButtons = () => {
    const geoButton = document.querySelector('#geo-button')
    const allScoresButton = document.querySelector('#all-scores-button')
    const logoutButton = document.querySelector('#logout-button')
    const userScoresButton = document.querySelector('#user-scores-button')

    geoButton.style.display = 'none'
    allScoresButton.style.display = 'none'
    logoutButton.style.display = 'none'
    userScoresButton.style.display = 'none'
}

const showButtons = () => {
    const geoButton = document.querySelector('#geo-button')
    const allScoresButton = document.querySelector('#all-scores-button')
    const logoutButton = document.querySelector('#logout-button')
    const userScoresButton = document.querySelector('#user-scores-button')
    
    geoButton.style.display = 'block'
    allScoresButton.style.display = 'block'
    logoutButton.style.display = 'block'
    userScoresButton.style.display = 'block'
}

const logout = () => {
    window.localStorage.clear()
    showLogin()
    hideScoreboard()
}

const hideCanvas = () => {
    world.style.display = 'none'
}

const showCanvas = () => {
    world.style.display = 'block'
}

const enableRegistrationForm = () => {
    hideCanvas()
    const newUsernameField = document.querySelector('#new-username')
    const newPasswordField = document.querySelector('#new-password')
    const passwordConfirmationField = document.querySelector('#password-confirmation')
 

    registrationForm.addEventListener('submit', (e) => {
        e.preventDefault()

        let username = newUsernameField.value
        let password = newPasswordField.value
        let passwordConfirmation = passwordConfirmationField.value
        e.target.reset()
        submitRegistrationCredentials(username, password, passwordConfirmation)
    })
}

const submitRegistrationCredentials = (user, pw, pc) => {

    let newUserInfo = {
        "user": {
            username: user,
            password: pw,
            password_confirmation: pc
        }
    }

    fetch ('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newUserInfo)
    })
    .then(res => res.json())
    // .then(console.log)
    .then(data => { 
        if (data.message) {
            deniedRegistration(data.message)
        } else {
            userToLocalstorage(data)
        }        
    })    
}

const deniedRegistration = (object) => {
    clearGandalf()
    object.forEach(error => {
        const deniedH = document.createElement('h2')
        deniedH.innerText = `${error[0]}: ${error[1]}`
        deniedDiv.append(deniedH)
    })
    let gandalf = document.createElement('img')
    gandalf.src = 'https://thumbs.gfycat.com/HilariousDigitalAkitainu-size_restricted.gif'
    gandalf.class = 'gandalf'
    deniedDiv.append(gandalf)
}

const hideRegistration = () => {
    registrationDiv.style.display = 'none'
}

const showRegistration = () => {
    hideLogin()
    clearGandalf()
    registrationDiv.style.display = 'block'
}

const appendRegistrationButton = () => {
    const registrationButton = document.createElement('button')
    registrationButton.id = "registration-button"
    registrationButton.className = "button"
    registrationButton.innerText = "New User?"
    loginDiv.append(registrationButton)

    registrationButton.addEventListener('click', (e) => {
        e.preventDefault()

        showRegistration()
    })
}