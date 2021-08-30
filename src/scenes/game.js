import Clouds from '../components/clouds.js'
import Map from '../components/map.js'
import Player, {player} from '../components/playeractions.js'

export default function Level() {
    layers(['bg', 'obj', 'ui'], 'obj')
   
    //Initialize Map
    Map()

    Player()

    Clouds()

    const bg1 = add([
        pos(vec2(100, 100)),
        rect(60, 30),
        area(),
        origin("center"),
        color(1, 1, 1),
        layer('ui')
    ]);

    const text1 = add([
        text('jump', 8),
        pos(vec2(100, 100)),
        origin("center"),
        color(0, 0, 0),
        layer('ui')
    ]);

    bg1.action(() => {
        bg1.moveTo(player.pos, 10)
    })

    text1.action(() => {
        text1.moveTo(player.pos, 10)
    })

    // addButton("start", vec2(100, 100), () => debug.log("oh hi"));
    // text1

    //Press q to go back to home screen
    keyPress('q', () => {
        go("home")
    })

    
 
    var idle = 2
    console.log(keyPress())

    var slide = 2
    keyDown("shift", () => {
        if (keyIsDown("right") || mouseIsDown()) {
            player.move(500, 0)
            if(slide%10 == 0)
            player.use(sprite('slide' + slide))
            // player.changeSprite('slide' + slide)
            if(slide<100){
                slide = slide + 1
            }
            else {
                slide = 1
            }
        } else {
            // TODO
        }
    })

    
}