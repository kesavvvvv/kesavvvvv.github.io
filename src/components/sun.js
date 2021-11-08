export default function Sun(player) {

    var ySunPos = camPos().y - height()/2 + 40
    const sun = add([
        sprite('sun0'),
        layer('bg'),
        
        pos(player.pos.x - width()/3, ySunPos)
    ])

    // sun.play("gg")
    var i = 1
    sun.action(() => {
        
        sun.moveTo(player.pos.x - width()/3, ySunPos)
        sun.use(sprite('sun' + i))
        if(i < 29) {
            i += 1
        }
        else {
            i = 0
        }
    })

}