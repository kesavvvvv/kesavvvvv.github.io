kaboom({
    global: true,
    fullscreen: true,
    scale: 1,
    debug: true,
    clearColor: [0, 0, 0, 1],
})

// loadRoot('models/')
// loadSprite('coin', 'coin.png')
// loadSprite('monster', 'monster.png')
 loadSprite('brick', 'https://i.imgur.com/AM4US5y.png')
// loadSprite('block', 'block.png')
// loadSprite('mario', 'mario.png')
// loadSprite('mushroom', 'mushroom.png')
// loadSprite('pipe-top-left', 'block.png')
// loadSprite('pipe-top-right', 'brick.png')
// loadSprite('pipe-bottom-left', 'block.png')
// loadSprite('pipe-bottom-right', 'block.png')

screen("game", () => {
    layers(['bg', 'obj', 'ui'], 'obj')

    const map = [
        '                                                 ',
        '                                                 ',
        '                                                 ',
        '                                                 ',
        '                                                 ',
        '                                                 ',
        '                                                 ',
        '                                                 ',
        '===================================   ===========',
    ]

    const levelCfg = {
        width: 20,
        height: 20,
        '=': [sprite('brick', solid())]
    }

    const gameLevel = addLevel(map, levelCfg)
})

start("game")