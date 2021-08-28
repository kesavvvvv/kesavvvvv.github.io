kaboom({
    global: true,
    fullscreen: true,
    scale: 1,
    debug: true,
    clearColor: [0, 0, 0, 1],
});



loadRoot('https://raw.githubusercontent.com/kesavvvvv/kesavvvvv.github.io/master/assets/')
// // loadSprite('coin', 'https://i.imgur.com/vNCUro5.png');
// // loadSprite('monster', 'monster.png')
// // loadSprite('brick', 'brick.png')
// // loadSprite('block', 'https://i.imgur.com/FGd5ekd.jpg');
loadSprite('grass', 'grass.png');
loadSprite('dirt', 'dirt.png');
loadSprite('player10', 'models/player/run/run0.png')
loadSprite('player20', 'models/player/run/run1.png')
loadSprite('player30', 'models/player/run/run2.png')
loadSprite('player40', 'models/player/run/run3.png')
loadSprite('player50', 'models/player/run/run4.png')
loadSprite('player60', 'models/player/run/run5.png')
loadSprite('player70', 'models/player/run/run6.png')
loadSprite('player80', 'models/player/run/run7.png')
loadSprite('player90', 'models/player/run/run8.png')
loadSprite('player100', 'models/player/run/run9.png')

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

// loadSprite('player10', 'https://i.imgur.com/sCID4aw.png')
// loadSprite('grass', 'https://i.imgur.com/iUKRS2B.png')
// loadSprite('dirt', 'https://i.imgur.com/kfVKDva.png')



// loadSprite('mushroom', 'mushroom.png')
// loadSprite('pipe-top-left', 'block.png')
// loadSprite('pipe-top-right', 'brick.png')
// loadSprite('pipe-bottom-left', 'block.png')
// loadSprite('pipe-bottom-right', 'block.png')

scene("game", () => {
    layers(['bg', 'obj', 'ui'], 'obj')
    
   
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
        '==========   ==================',
        '----------   ------------------'
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
        ]
        
    }

    const gameLevel = addLevel(map, levelCfg)

    const player = add([
        sprite('player10'),
        pos(30,0),
        body(),
        
       
    ])
    var slide = 2
    keyDown("down", () => {
        if (keyIsDown("right")) {
            player.move(500, 0)
            if(slide%10 == 0)
            player.changeSprite('slide' + slide)
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
    var run = 2
    keyDown('right', () => {
        player.move(250, 0)
        if(run%10 == 0)
            player.changeSprite('player' + run)
        if(run<100){
            run = run + 1
        }
        else {
            run=1
        }
    }) 
    
})



start('game');