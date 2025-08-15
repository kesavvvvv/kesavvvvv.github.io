export default function Home() {
    console.log("Home Page!")
    layers(['bg', 'obj', 'ui'], 'obj')
    add([
        text("Hi, I'm Kesav! Welcome to my website. Press any key to continue.", {size: 30}), 
        origin('center'),
        pos(width()/2, height()/2)
    ])

    const background = add([
        // sprite('bg0'),
        sprite('homebg'),
        pos(0,0),
        layer('bg'),
        scale(width() / 240, height() / 240),
    ])

    //Bg frame play
    // var bg = 1
    // action(() => {
    //     background.use(sprite('bg' + bg))
    //     if(bg<107){
    //         bg = bg + 1
    //     }
    //     else {
    //         bg = 0
    //     }
    // })

    background.play('gg')

    // action(() => {
    
    
    //     console.log(width(), height())
    //     if(width() < height()) {
    //         console.log(width(), height())
    //         go("landscape")
    //     }

    // })

    //Go to next scene on mouse click
    mouseClick(() => {
        go('game')
    })

}
