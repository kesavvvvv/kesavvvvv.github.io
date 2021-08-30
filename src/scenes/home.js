export default function Home() {
    console.log("Home Page!")
    layers(['bg', 'obj', 'ui'], 'obj')
    add([
        text("Hi! Welcome to my website.", 32), 
        origin('center'),
        pos(width()/2, height()/2)
    ])

    const background = add([
        sprite('bg0'),
        pos(0,0),
        layer('bg'),
        scale(width() / 240, height() / 240),
    ])

    var bg = 1
    action(() => {
        background.use(sprite('bg' + bg))
        if(bg<107){
            bg = bg + 1
        }
        else {
            bg = 0
        }
    })

    mouseClick(() => {
        go('game')
    })

}