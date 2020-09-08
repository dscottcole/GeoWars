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
    if (enemiesArray.length < 0) {
        const width = 25
        const height = 25
        const xPos =  Math.floor(Math.random() * (world.width - width))
        const yPos = Math.floor(Math.random() * (world.height - height))
    
        let enemy = new Enemy(width, height, xPos, yPos)
        enemiesArray.push(enemy)
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