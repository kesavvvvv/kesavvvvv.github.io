kaboom({
    global: true,
    fullscreen: true,
    scale: 2,
    debug: true,
    clearColor: [0, 0, 0, 1],
});

// loadRoot('models/')
loadSprite('coin', 'https://i.imgur.com/vNCUro5.png');
// loadSprite('monster', 'monster.png')
// loadSprite('brick', 'brick.png')
loadSprite('block', 'https://i.imgur.com/AM4US5y.png');
// loadSprite('mario', 'mario.png')
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
        '==================   =========='
    ]

    const levelCfg = {
        width: 20,
        height: 20,
        '=': [sprite('block', solid())]
    }

    const gameLevel = addLevel(map, levelCfg)
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

go('game');