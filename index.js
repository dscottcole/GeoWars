// document.addEventListener('DOMContentLoaded', () => {
// loadWorld()
// })

// const body = document.querySelector("body")
// const world = document.querySelector('#world')

// const createCanvas = () => {
//     const world = document.createElement('canvas')
//     world.id = 'world'
//     world.width = '800'
//     world.height = '600'
//     world.style.border = "1px solid black"
//     body.append(world)

//     let raf
//     let width = 50
//     let height = 50
//     let xPos = world.width/2 - width/2
//     let yPos = world.height/2 - height/2

//     if (world.getContext) {

//         let ctx = world.getContext('2d');
    
//         let rectangle = new Path2D();
//         rectangle.rect(xPos, yPos, width, height);
//         ctx.stroke(rectangle);
//         ctx.fillStyle = 'red'
//         ctx.fill(rectangle)

//         //////////

//     let Top = 87
//     let Bottom = 83
//     let Left = 65
//     let Right = 68

//     const velocity = ;

//     const keydownHandler = event => {
//       console.log({code: event.keyCode})
//         if (event.keyCode == Bottom) { 
//             if (yPos + velocity > world.height - height) {
//                 yPos
//             } else {
//                 yPos += velocity
//             }
//         }
//         if (event.keyCode == Left) {
//             if (xPos - velocity < 0) {
//                 xPos 
//             } else {
//                 xPos -= velocity;
//             }
//         }
//         if (event.keyCode === Top) {
//             if (yPos - velocity < 0) {
//                 yPos
//             } else {
//                 yPos -= velocity;
//             }
//         }
//         if (event.keyCode == Right) {
//             if (xPos + velocity > world.width - width) {
//                 xPos
//             } else {
//                 xPos += velocity
//             }
//         }

//         render();
//     }

//     window.addEventListener("keydown",keydownHandler);

//     function render( ) {
//         console.log('rendering')
//         console.log({xPos, yPos})
//         ctx.clearRect(0, 0, world.width, world.height);

//         let rectangle = new Path2D();
//         rectangle.rect(xPos, yPos, width, height);
//         ctx.stroke(rectangle);
//         ctx.fillStyle = 'red'
//         ctx.fill(rectangle)
//         raf = window.requestAnimationFrame(render)
//     }

//     }

// }

// const loadWorld = () => {
//     createCanvas()
// }
