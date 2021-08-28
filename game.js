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
loadSprite('grass', 'grass.jpg');
loadSprite('dirt', 'dirt.jpg');
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

    var i = 2
    keyDown('right', () => {
        player.move(250, 0)
        if(i%10 == 0)
            player.changeSprite('player' + i)
        if(i<100){
            i = i + 1
        }
        else {
            i=1
        }
    }) 
})



start('game');