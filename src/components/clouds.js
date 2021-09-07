export default function Clouds() {

    var max = 200
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
        pos(width() + 100, cpos1)

    ])

    const cloud2 = add([
        sprite('cloud2'),
        layer('ui'),
        pos(vec2( width() + 420, cpos2))
    ])

    const cloud3 = add([
        sprite('cloud3'),
        layer('ui'),
        pos(vec2( width() + 960, cpos3))
    ])

    const cloud4 = add([
        sprite('cloud4'),
        layer('ui'),
        pos(vec2( width() + 1620, cpos4))
    ])

    const cloud5 = add([
        sprite('cloud5'),
        layer('ui'),
        pos(vec2( width() + 2100 , cpos5))
    ])

    // const cloud6 = add([
    //     sprite('cloud6'),
    //     layer('ui'),
    //     pos(vec2( width() + 2360, cpos6))
    // ])

    
    cloud1.action(() => {

        cloud1.moveTo(vec2(-width()/2 - 100 , cpos1), 100)
        if(cloud1.pos.x < -(width()/2) + camPos().x - 100) {
            console.log("hi")
            cpos1 = Math.floor(Math.random() * (max - min) ) + min
            
            cloud1.moveTo(vec2(camPos().x + 30 + width()/2, cpos1))
        }
            
    })

    cloud2.action(() => {
        cloud2.moveTo(vec2(-(width()/2) - 100, cpos2), 100)
        if(cloud2.pos.x < -(width()/2) + camPos().x - 100) {
            cpos2 = Math.floor(Math.random() * (max - min) ) + min
            console.log(width())
            cloud2.moveTo(vec2(camPos().x + 30 + width(), cpos2))
        }
            
    })

    cloud3.action(() => {
        cloud3.moveTo(vec2(-(width()/2) - 100, cpos3), 100)
        if(cloud3.pos.x < -(width()/2) + camPos().x - 100) {
            cpos3 = Math.floor(Math.random() * (max - min) ) + min
            cloud3.moveTo(vec2(camPos().x + 30 + width(), cpos3))
        }
            
    })

    cloud4.action(() => {
        cloud4.moveTo(vec2(-(width()/2) - 100, cpos4), 100)
        if(cloud4.pos.x < -(width()/2) + camPos().x - 100) {
            cpos4 = Math.floor(Math.random() * (max - min) ) + min
            cloud4.moveTo(vec2(camPos().x + 30 + width(), cpos4))
        }
        
    })

    cloud5.action(() => {
        cloud5.moveTo(vec2(-(width()/2) - 100, cpos5), 100)
        if(cloud5.pos.x < -(width()/2) + camPos().x - 100) {
            cpos5 = Math.floor(Math.random() * (max - min) ) + min
            cloud5.moveTo(vec2(camPos().x + 30 + width(), cpos5))
        }
       
    })

    // cloud6.action(() => {
    //     cloud6.moveTo(vec2(-(width()/2) + camPos().x - 100 - 30, cpos6), 1)
    //     if(cloud6.pos.x == -(width()/2) + camPos().x - 100) {
    //         cpos6 = Math.floor(Math.random() * (max - min) ) + min
    //         cloud6.moveTo(vec2( width(), cpos6))
    //     }
        
    // })


}