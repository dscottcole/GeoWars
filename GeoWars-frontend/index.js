document.addEventListener('DOMContentLoaded', () => {
    enableLoginForm()
})

const loginDiv = document.querySelector('div.login')
const deniedDiv = document.querySelector('div.denied-login')
const loginForm = document.querySelector('.login-form')

const enableLoginForm = () => {
    const loginButton = document.querySelector('#login-submit')
    const usernameField = document.querySelector('#username')
    const passwordField = document.querySelector('#password')
 

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault()

        let username = usernameField.value
        let password = passwordField.value  
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
    .then(data => {

        if (data.message === "This username & password combination is invalid. Create an account or try again.") {
            deniedLogin(data)
        } else {
            userToLocalstorage(data)
            approvedLogin()
        }        
    })    
}


const userToLocalstorage = (verifiedUser) => {
    window.localStorage.setItem('user_id', verifiedUser.id)
}

const deniedLogin = (object) => {
    const deniedH = document.createElement('h2')
    deniedH.innerText = object.message
    let gandalf = document.createElement('img')
    gandalf.src = 'https://thumbs.gfycat.com/HilariousDigitalAkitainu-size_restricted.gif'
    gandalf.class = 'gandalf'
    deniedDiv.append(deniedH, gandalf)
}

const approvedLogin = () => {
    window.location.href = "html/game.html";
}

const youShallNotPass = () => {

}