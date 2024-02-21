import Clouds from '../components/clouds.js'
import Map from '../components/map.js'
import Player, {player} from '../components/playeractions.js'
import Sun from '../components/sun.js'
import Text from '../components/text.js'

export default function Level() {
    layers(['bg', 'obj', 'ui'], 'obj')
   
    const background = add([
        sprite('sky'),
        pos(-width()/2,-height()/2),
        layer('bg'),
        scale(width() / 240, height() / 240),
    ])

    

    //Initialize Map
    Map()

    Player()

    // player.play("idle")

    Clouds(player)

    Sun(player)

    Text()

    // const bg1 = add([
    //     pos(vec2(100, 100)),
    //     rect(60, 30),
    //     area(),
    //     origin("center"),
    //     color(1, 1, 1),
    //     layer('ui')
    // ]);

    // const text1 = add([
    //     text('jump', 8),
    //     pos(vec2(100, 100)),
    //     origin("center"),
    //     color(0, 0, 0),
    //     layer('ui')
    // ]);

    // bg1.action(() => {
    //     bg1.moveTo(player.pos, 10)
    // })

    // text1.action(() => {
    //     text1.moveTo(player.pos, 10)
    // })

    // addButton("start", vec2(100, 100), () => debug.log("oh hi"));
    // text1

   
    // onKeyPress('s'), () => {
        
    //     onCollide('player', 'pipe', () => {
    //         print("hello")
    //        // go('home')
    //     })

    // }
    

    var yClick = 0
    var yRelease = 0
    mouseClick(() => {  
        yClick = mousePos().y
        console.log("inside mouse click")
        console.log(yClick)
        mouseRelease(() => {
            yRelease = mousePos().y
            console.log("inside mouse release")
            console.log(mouseRelease)
            if(yRelease < yClick - 350) {
                console.log("inside jump")
                player.jump()
            }
            if(yRelease > yClick + 350) {
                
                if(pipe1.isTouching(player)) {
                    go('about')
                }
                if(pipe2.isTouching(player)) {
                    go('projects')
                }
                if(pipe3.isTouching(player)) {
                    go('skills')
                }
                if(pipe4.isTouching(player)) {
                    go('contact')
                }
            }
        })
    })


    //Press q to go back to home screen
    keyPress('q', () => {
        go("home")
    })

}
