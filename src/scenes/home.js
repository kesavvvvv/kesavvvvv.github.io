export default function Home() {
    console.log("Home Page!")
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

    mouseClick(() => {
        go('game')
    })

}