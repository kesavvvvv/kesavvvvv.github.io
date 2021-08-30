export default function SpritesInit() {
    //Setting root location to get sprite from github
    //loadRoot('https://raw.githubusercontent.com/kesavvvvv/kesavvvvv.github.io/master/assets/')
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
}