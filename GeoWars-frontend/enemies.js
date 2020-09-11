let enemiesArray = []

let colorArray = ['Red', 'DarkViolet', 'DarkGreen', 'DeepPink', 'DeepSkyBlue', 'Gold', 'Ivory', 'Cyan', 'Coral', "Yellow"]

class Enemy {
    constructor(width, height, xPos, yPos) {
        this.width = width
        this.height = height
        this.xPos = xPos
        this.yPos = yPos
        this.velocity = Math.ceil(Math.random() * (5))
        this.color = colorArray[Math.floor(Math.random() * (9))]
    }
    draw () {
        ctx.fillStyle = this.color
        ctx.fillRect(this.xPos, this.yPos, this.width, this.height)
    }
}

const generateEnemy = () => {
    // if (enemiesArray.length < 5) {
        const width = 25
        const height = 25
    
        let xPos =  xCheck(width)
        let yPos = yCheck(height)
      
    
        let enemy = new Enemy(width, height, xPos, yPos)
        enemiesArray.push(enemy)
    // }
}

const generateX = () => Math.floor(Math.random() * (world.width))

const xCheck = (width) => {

    let x = generateX(width)

    let highX = (player.xPos - player.radius) + 25 
    let lowX = (player.xPos - player.radius) - 25

    if (x <= highX && x >= lowX) {
        // console.log('I whould have killed you X')
        xCheck(width)

    } else {
        return x
    }
}

const generateY = () => Math.floor(Math.random() * (world.height))

const yCheck = (height) => {

    let y = generateY(height)

    let highY = (player.yPos - player.radius) + 50 
    let lowY = (player.yPos - player.radius) - 50

    if (y <= highY && y >= lowY) { 
        // console.log('I whould have killed you Y')
        yCheck(height)
    } else {
        return y
    }
}

const drawEnemies = () => {
    
    enemiesArray.forEach(enemy => {

        let playerX = player.xPos
        let playerY = player.yPos

        if (enemy.xPos > playerX) {
            enemy.xPos -= enemy.velocity
        } else {
            enemy.xPos += enemy.velocity
        } 

        if (enemy.yPos > playerY) {
            enemy.yPos -= enemy.velocity
        } else {
            enemy.yPos += enemy.velocity
        }
           
        enemy.draw()

    })
}