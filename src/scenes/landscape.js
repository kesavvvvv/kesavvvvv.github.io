export default function Landscape() {
    layers(['bg', 'obj', 'ui'], 'obj')
    console.log("in land")
    add([
        text("Please turn to landscape mode for best experience.", 1, {
                width: width(),
            }
        ), 
        origin('center'),
        pos(width()/2, height()/2)
    ])

    //Go to next scene on mouse click
    mouseClick(() => {
        go('game')
    })

}