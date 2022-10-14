import Clouds from '../components/clouds.js'
import Map from '../components/map.js'
import Player, {player} from '../components/playeractions.js'
import Sun from '../components/sun.js'
import EduText from '../components/projectstext.js'

export default function Projects() {
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

    EduText()

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
    

    

    //Press q to go back to home screen
    keyPress('q', () => {
        go("home")
    })

}