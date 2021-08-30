export default function Level() {
    layers(['bg', 'obj', 'ui'], 'obj')
   
    const map = [
        '                               ',
        '                               ',
        '                               ',
        '                               ',
        '                               ',
        '                               ', 
        '============  =================',
        '------------  -----------------'
    ]

    const levelCfg = {
        width: 99,
        height: 87,
        '=': [
            sprite('grass'),     
        ],
        '-': [
            sprite('dirt'),
            solid(),  
            area()
        ]   
    }

    const gameLevel = addLevel(map, levelCfg)

    const player = add([
        sprite('run10'),
        pos(30,0),
        body(), 
        area()
    ])

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

    // camera position follow player
    player.action(() => {
        camPos(player.pos);
    });

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

    // Mobile 
    // Swipe up on mobile for jump.
    var yClick = 0
    var yRelease = 0
    mouseClick(() => {  
        yClick = mousePos().y
        mouseRelease(() => {
            yRelease = mousePos().y
            if(yRelease < yClick - 350) {
                player.jump()
            }
        })
    })

    mouseClick(() => { 
        // console.log(mousePos())
        if(mousePos().x>70 && mousePos().x<130 && mousePos().y>85 && mousePos().y<115) {
            console.log(player.pos)
            player.jump()
        }
    })

    // mouseClick(() => {  
    //     // yClick = mousePos().y
    //     console.log(mousePos().y)
    //     mouseRelease(() => {
    //         console.log(mousePos().y)
    //         // yRelease = mousePos().y
    //         // if(yRelease < yClick - 350) {
    //         //     player.jump()
    //         // }
    //     })
    // })

    var run = 2
    keyDown('right', () => {
        player.move(250, 0)
        if(run%10 == 0)
            player.use(sprite('run' + run))
            // player.changeSprite('run' + run)
        if(run<100){
            run = run + 1
        }
        else {
            run = 1
        }
    }) 

    var run = 2
    mouseDown(() => {
        player.move(250, 0)
        if(run%10 == 0)
            player.use(sprite('run' + run))
            // player.changeSprite('run' + run)
        if(run<100){
            run = run + 1
        }
        else {
            run = 1
        }
    })
}