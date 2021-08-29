//Initialize kaboom.js
kaboom({
    global: true,
    fullscreen: true,
    scale: 1,
    debug: true,
    clearColor: [0, 0, 0, 1],
});

//Setting root location to get sprite from github
// loadRoot('https://raw.githubusercontent.com/kesavvvvv/kesavvvvv.github.io/master/assets/')

loadRoot('assets/')
//Load Sprites for base floor 
loadSprite('grass', 'grass.png');
loadSprite('dirt', 'dirt.png');

//Load Sprites for player running animation
loadSprite('run10', 'models/player/run/run0.png')
loadSprite('run20', 'models/player/run/run1.png')
loadSprite('run30', 'models/player/run/run2.png')
loadSprite('run40', 'models/player/run/run3.png')
loadSprite('run50', 'models/player/run/run4.png')
loadSprite('run60', 'models/player/run/run5.png')
loadSprite('run70', 'models/player/run/run6.png')
loadSprite('run80', 'models/player/run/run7.png')
loadSprite('run90', 'models/player/run/run8.png')
loadSprite('run100', 'models/player/run/run9.png')

//Load Sprites for player sliding animation
loadSprite('slide10', 'models/player/slide/slide0.png')
loadSprite('slide20', 'models/player/slide/slide1.png')
loadSprite('slide30', 'models/player/slide/slide2.png')
loadSprite('slide40', 'models/player/slide/slide3.png')
loadSprite('slide50', 'models/player/slide/slide4.png')
loadSprite('slide60', 'models/player/slide/slide5.png')
loadSprite('slide70', 'models/player/slide/slide6.png')
loadSprite('slide80', 'models/player/slide/slide7.png')
loadSprite('slide90', 'models/player/slide/slide8.png')
loadSprite('slide100', 'models/player/slide/slide9.png')

// loadSprite('mushroom', 'mushroom.png')
// loadSprite('pipe-top-left', 'block.png')
// loadSprite('pipe-top-right', 'brick.png')
// loadSprite('pipe-bottom-left', 'block.png')
// loadSprite('pipe-bottom-right', 'block.png')

// loadSprite('road', 'https://i.imgur.com/Y3F7ruJ.png')
// loadSprite('road1', 'https://i.imgur.com/QEUHw9P.png')
const speed = 90;
let speedMod = 1;

//Home Page
scene("home", () => {
    layers(['bg', 'obj', 'ui'], 'obj')
    add([
        text("Hi! Welcome to my website.", 32), 
        origin('center'),
        pos(width()/2, height()/2)
    ])

    // const background = add([
    //     sprite('bg10'),
    //     pos(0,0),
    //     layer('bg')
        
    // ])

    // var worker = new Worker("worker.js")

    // worker.postMessage("test")

    // worker.addEventListener("message", event => {
    //     if (event.data) {
    //       go('game')
    //     }
    // })

    mouseClick(() => {
        go('game')
    })
    
    
})

//Game Page
scene("game", () => {
    layers(['bg', 'obj', 'ui'], 'obj')
    
    

    
           
    
    
    var run = 1
    // addButton("jump", vec2(100, 100), () => player.jump());
    // addButton("right", vec2(100, 150), () => {
    //     player.move(250, 0)
    //     if(run%10 == 0)
    //         player.changeSprite('run' + run)
    //     if(run<100){
    //         run = run + 1
    //     }
    //     else {
    //         run = 1
    //     }
    // });
    

    const map = [
        '                               ',
        '                               ',
        '                               ',
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
    // text1.action(() => {
    //     text1.moveTo(player.pos, 10)
    // })

    //Press q to go back to home screen
    keyPress('q', () => {
        go("home")
    })

    // // camera position follow player
    // player.action(() => {
    //     camPos(player.pos);
    // });

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
    // mouseClick(() => {  
    //     yClick = mousePos().y
    //     mouseRelease(() => {
    //         yRelease = mousePos().y
    //         if(yRelease < yClick - 350) {
    //             player.jump()
    //         }
    //     })
    // })

    mouseClick(() => { 
        console.log(mousePos())
        if(mousePos().x>70 && mousePos().x<130 && mousePos().y>85 && mousePos().y<115) {
            console.log(player.pos)
            player.jump()
        }
    })

    if(mouseIsClicked()) {
        yClick = mousePos().y
        console.log(yClick)
        if(mouseIsReleased()) {
            yRelease = mousePos().y
            console.log(yRelease)
            if(yRelease < yClick - 350) {
                player.jump()
            }
        }
    }

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
})

//Start the website
go('home');