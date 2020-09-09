const enemiesArray = []

class Enemy {
    constructor(width, height, xPos, yPos) {
        this.width = width
        this.height = height
        this.xPos = xPos
        this.yPos = yPos
        this.velocity = Math.ceil(Math.random() * (5))
    }
    draw () {
        ctx.fillStyle = 'red'
        ctx.fillRect(this.xPos, this.yPos, this.width, this.height)
    }
}

const generateEnemy = () => {
    // if (enemiesArray.length < 25) {
        const width = 25
        const height = 25
    
        let xPos =  xCheck(width)
        let yPos = yCheck(height)
      
    
        let enemy = new Enemy(width, height, xPos, yPos)
        enemiesArray.push(enemy)
    // }
}

const generateX = (width) => Math.floor(Math.random() * (world.width - width))

const xCheck = (width) => {

    let x = generateX(width)

    let highX = (player.xPos - player.radius) + 50 
    let lowX = (player.xPos - player.radius) - 50

    if (x <= highX && x >= lowX) {
        // console.log('I whould have killed you X')
        xCheck(width)

    } else {
        return x
    }
}

const generateY = (height) => Math.floor(Math.random() * (world.height - height))

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

        if (enemy.xPos > player.xPos) {
            enemy.xPos -= enemy.velocity
        } else {
            enemy.xPos += enemy.velocity
        } 

        if (enemy.yPos > player.yPos) {
            enemy.yPos -= enemy.velocity
        } else {
            enemy.yPos += enemy.velocity
        }
           
        enemy.draw()

    })
}