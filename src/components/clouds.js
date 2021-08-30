export default function Clouds() {

    var max = 400
    var min = 75
    var cpos1 = Math.floor(Math.random() * (max - min) ) + min
    var cpos2 = Math.floor(Math.random() * (max - min) ) + min
    var cpos3 = Math.floor(Math.random() * (max - min) ) + min
    var cpos4 = Math.floor(Math.random() * (max - min) ) + min
    var cpos5 = Math.floor(Math.random() * (max - min) ) + min
    var cpos6 = Math.floor(Math.random() * (max - min) ) + min
    


    const cloud1 = add([
        sprite('cloud1'),
        layer('ui'),
        pos(vec2(camPos().x - 30 + width(), cpos1))
    ])

    const cloud2 = add([
        sprite('cloud2'),
        layer('ui'),
        pos(vec2(camPos().x - 30 + width() + 220, cpos2))
    ])

    const cloud3 = add([
        sprite('cloud3'),
        layer('ui'),
        pos(vec2(camPos().x - 30 + width() + 460, cpos3))
    ])

    const cloud4 = add([
        sprite('cloud4'),
        layer('ui'),
        pos(vec2(camPos().x - 30 + width() + 720, cpos4))
    ])

    const cloud5 = add([
        sprite('cloud5'),
        layer('ui'),
        pos(vec2(camPos().x - 30 + width() + 1200 , cpos5))
    ])

    const cloud6 = add([
        sprite('cloud6'),
        layer('ui'),
        pos(vec2(camPos().x - 30 + width() + 1560, cpos6))
    ])

    cloud1.action(() => {
        cloud1.moveTo(vec2(-(width()/2) + camPos().x - 50 , cpos1), 1)
        if(cloud1.pos.x == -(width()/2) + camPos().x - 50) {
            cpos1 = Math.floor(Math.random() * (max - min) ) + min
            console.log(cpos1)
            cloud1.moveTo(vec2(camPos().x - 30 + width(), cpos1))
        }
            
    })

    cloud2.action(() => {
        cloud2.moveTo(vec2(-(width()/2) + camPos().x - 50, cpos2), 1)
        // console.log(-(width()/2) + camPos().x - 30)
        // console.log(cloud2.pos.x)
        // console.log(camPos().x)
        if(cloud2.pos.x == -(width()/2) + camPos().x - 50) {
            cpos2 = Math.floor(Math.random() * (max - min) ) + min
            console.log(width())
            cloud2.moveTo(vec2(camPos().x - 30 + width(), cpos2))
        }
            
    })

    cloud3.action(() => {
        cloud3.moveTo(vec2(-(width()/2) + camPos().x - 50 - 30, cpos3), 1)
        if(cloud3.pos.x == -(width()/2) + camPos().x - 50) {
            cpos3 = Math.floor(Math.random() * (max - min) ) + min
            cloud3.moveTo(vec2(camPos().x - 30 + width(), cpos3))
        }
            
    })

    cloud4.action(() => {
        cloud4.moveTo(vec2(-(width()/2) + camPos().x - 50 - 30, cpos4), 1)
        if(cloud4.pos.x == -(width()/2) + camPos().x - 50) {
            cpos4 = Math.floor(Math.random() * (max - min) ) + min
            cloud4.moveTo(vec2(camPos().x - 30 + width(), cpos4))
        }
        
    })

    cloud5.action(() => {
        cloud5.moveTo(vec2(-(width()/2) + camPos().x - 50 - 30, cpos5), 1)
        if(cloud5.pos.x == -(width()/2) + camPos().x - 50) {
            cpos5 = Math.floor(Math.random() * (max - min) ) + min
            cloud5.moveTo(vec2(camPos().x - 30 + width(), cpos5))
        }
       
    })

    cloud6.action(() => {
        cloud6.moveTo(vec2(-(width()/2) + camPos().x - 50 - 30, cpos6), 1)
        if(cloud6.pos.x == -(width()/2) + camPos().x - 50) {
            cpos6 = Math.floor(Math.random() * (max - min) ) + min
            cloud6.moveTo(vec2(camPos().x - 30 + width(), cpos6))
        }
        
    })


}