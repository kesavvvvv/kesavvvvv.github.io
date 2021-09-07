export default function SpritesInit() {

    //Setting root location to get sprite from github
    //loadRoot('https://raw.githubusercontent.com/kesavvvvv/kesavvvvv.github.io/master/assets/')
    loadRoot('assets/')

    //Load Sprites for base floor 
    loadSprite('grass', 'grass.png');
    loadSprite('dirt', 'dirt.png');

    loadSprite('playeridle', 'models/player/idle/idlesheet.png', {
        sliceX: 10, 
        anims: {
            idle: {
                from: 0,
                to: 9,
            }
        }
    })

    loadSprite('homebg', 'home1.png', {
        sliceX: 30, 
        anims: {
            gg: {
                from: 0,
                to: 29,
            }
        }
    })


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

    //Load Sprite for player idle
    loadSprite('idle10', 'models/player/idle/idle0.png')
    loadSprite('idle20', 'models/player/idle/idle1.png')
    loadSprite('idle30', 'models/player/idle/idle2.png')
    loadSprite('idle40', 'models/player/idle/idle3.png')
    loadSprite('idle50', 'models/player/idle/idle4.png')
    loadSprite('idle60', 'models/player/idle/idle5.png')
    loadSprite('idle70', 'models/player/idle/idle6.png')
    loadSprite('idle80', 'models/player/idle/idle7.png')
    loadSprite('idle90', 'models/player/idle/idle8.png')
    loadSprite('idle100', 'models/player/idle/idle9.png')

    loadSprite('cloud1', 'models/clouds/cloud1.png')
    loadSprite('cloud2', 'models/clouds/cloud2.png')
    loadSprite('cloud3', 'models/clouds/cloud3.png')
    loadSprite('cloud4', 'models/clouds/cloud4.png')
    loadSprite('cloud5', 'models/clouds/cloud5.png')
    loadSprite('cloud6', 'models/clouds/cloud6.png')

    function padLeft(nr, n, str){
        return Array(n-String(nr).length+1).join(str||'0')+nr;
    }

    var i=0
    while(i<30) {
        loadSprite('sun' + i, 'models/sun/50498c114151121.603b255757165-' + i + '.png')
        i += 1
    }



    loadSprite('sky', 'sky.png')


    // loadSprite('mushroom', 'mushroom.png')
    // loadSprite('pipe-top-left', 'block.png')
    // loadSprite('pipe-top-right', 'brick.png')
    // loadSprite('pipe-bottom-left', 'block.png')
    // loadSprite('pipe-bottom-right', 'block.png')
}