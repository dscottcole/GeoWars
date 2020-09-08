const projectileArray = []

class Projectile {
    constructor(angle, dirX, dirY, quad, pX, pY) {
        this.xPos = pX
        this.yPos = pY
        this.angle = angle
        this.radius = 5
        this.speed = 5
        this.color = 'orange'
        this.quad = quad
    }
    // hitDetect () {
    //     enemiesArray.forEach(enemy => {
    //         if (this.xPos+this.radius >= enemy.xPos && this.xPos - this.radius <= enemy.xPos+enemy.width && this.yPos+this.radius >= enemy.yPos && this.yPos - this.radius <= enemy.yPos+enemy.height) {
    //             world.remove()
    //             const gameOver = document.createElement('h1')
    //             gameOver.innerText = 'LOL. You suck!'
    //             clearInterval(animateInterval)
    //             clearInterval(enemyInterval)
    //             body.append(gameOver)
    //         }
    //     })
    // }
    draw () {
        ctx.beginPath();
        ctx.arc(this.xPos, this.yPos, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}


const generateProjectile = (angle, dirX, dirY, quad, pX, pY) => {
    if (projectileArray.length < 1000) {
    
        let projectile = new Projectile(angle, dirX, dirY, quad, pX, pY)
        projectileArray.push(projectile)
        console.log(projectile)
        console.log(projectileArray)
    }
}

const enableMouse = () => { 
    world.addEventListener('click', (e) => {
        e.preventDefault()
        let ax = player.xPos
        let ay = player.yPos
        let bx = e.clientX
        let by = e.clientY
        let cannonLength = 0
    
        let angle
        let dirX
        let dirY
        

        if (bx >= ax && by < ay) {
            quad = 1
            dirX = player.radius + cannonLength
            dirY = (player.radius + cannonLength) * -1
            angle = getAngle(ax, ay, bx, by)
        } else if (bx < ax && by < ay) {
            quad = 2
            dirX = (player.radius + cannonLength) * -1
            dirY = (player.radius + cannonLength) * -1
            angle = getAngle(ax, ay, bx, by)
        } else if (bx < ax && by >= ay) {
            quad = 3
            dirX = (player.radius + cannonLength) * -1
            dirY = player.radius + cannonLength
            angle = getAngle(ax, ay, bx, by)
        } else if (bx >= ax && by >= ay) {
            quad = 4
            dirX = player.radius + cannonLength
            dirY = player.radius + cannonLength
            angle = getAngle(ax, ay, bx, by)
        }
    

        // console.log(e)
        console.log(getAngle(ax, ay, bx, by))
        console.log(angle)
        console.log(quad)

        generateProjectile(angle, dirX, dirY, quad, ax, ay)
    })
}

function getAngle(ax,ay,bx,by) {
    let angleRad = Math.atan((ay-by)/(ax-bx));
    // let angleDeg = angleRad * 180 / Math.PI;
    
    // return(angleDeg);
    return(angleRad)
}

const drawProjectiles = () => {
    
    projectileArray.forEach(projectile => {  

        if (projectile.quad === 1) {
            projectile.xPos += projectile.speed * Math.cos(projectile.angle)
            projectile.yPos += projectile.speed * Math.sin(projectile.angle)
            // projectile.xPos += projectile.speed / Math.tan(projectile.angle)
            // projectile.yPos += Math.tan(projectile.angle) * (-1 * projectile.speed)
        } else if (projectile.quad === 2) {
            projectile.xPos -= projectile.speed * Math.cos(projectile.angle)
            projectile.yPos -= projectile.speed * Math.sin(projectile.angle)
            // projectile.xPos += (-1 * projectile.speed) / Math.tan(projectile.angle)
            // projectile.yPos += Math.tan(projectile.angle) * (-1 * projectile.speed)
        } else if (projectile.quad === 3) {
            projectile.xPos -= projectile.speed * Math.cos(projectile.angle)
            projectile.yPos -= projectile.speed * Math.sin(projectile.angle)
            // projectile.xPos += (-1 * projectile.speed) / Math.tan(projectile.angle)
            // projectile.yPos += Math.tan(projectile.angle) * projectile.speed
        } else if (projectile.quad === 4) {
            projectile.xPos += projectile.speed * Math.cos(projectile.angle)
            projectile.yPos += projectile.speed * Math.sin(projectile.angle)
            // projectile.xPos += projectile.speed / Math.tan(projectile.angle)
            // projectile.yPos += Math.tan(projectile.angle) * projectile.speed
        }           
        projectile.draw()
    })
}