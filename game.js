kaboom({
    global: true,
    fullscreen: true,
    scale: 1,
    debug: true,
    clearColor: [0, 0, 0, 1],
});

// loadRoot('models/')
loadSprite('coin', 'https://i.imgur.com/vNCUro5.png');
// loadSprite('monster', 'monster.png')
// loadSprite('brick', 'brick.png')
loadSprite('block', 'https://i.imgur.com/FGd5ekd.jpg');
loadSprite('player10', 'https://i.imgur.com/TsPXL5Y.png')
loadSprite('player20', 'https://i.imgur.com/M8DkmiA.png')
loadSprite('player30', 'https://i.imgur.com/B2vGh5v.png')
loadSprite('player40', 'https://i.imgur.com/zSQq2y4.png')

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

        
        '==================   =========='
    ]

    const levelCfg = {
        width: 50,
        height: 50,
        '=': [sprite('block'), solid(),]
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
        if(i<40){
            i = i + 1
        }
        else {
            i=1
        }
    })

   
})


    // addLevel([
    //     '    ',
    //     '    ',
    //     '    ',
    //     '    ',
    //     '    ',
    //     'xxxx'
    // ], {
    //     width: 20,
    //     height: 20,
    //     'x': [sprite('block')]
    // });

start('game');