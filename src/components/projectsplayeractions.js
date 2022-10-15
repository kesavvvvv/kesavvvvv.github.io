let player;

export default function PlayerActions() {
    player = add([
        sprite('playeridle'),
        pos(30,0),
        body(), 
        area()
    ])

    
    keyDown('up', () => {
        player.jump()
        
    }) 

    // Mobile 
    // Swipe up on mobile for jump.
    var yClick = 0
    var yRelease = 0
    mouseClick(() => {  
        yClick = mousePos().y
        mouseRelease(() => {
            yRelease = mousePos().y
            if(yRelease < yClick - 350) {
                player.jump()
            }
        })
    })

    mouseClick(() => { 
        // console.log(mousePos())
        if(mousePos().x>70 && mousePos().x<130 && mousePos().y>85 && mousePos().y<115) {
            console.log(player.pos)
            player.jump()
        }
    })


    var run = 2
    keyDown('right', () => {
        player.move(250, 0)
        
        if(run%10 == 0)
            player.use(sprite('run' + run))
            // player.changeSprite('run' + run)
        if(run<100){
            run = run + 1
        }
        else {
            run = 1
        }
    }) 

    var run = 2
    mouseDown(() => {
        player.move(250, 0)
        if(run%10 == 0)
            player.use(sprite('run' + run))
            // player.changeSprite('run' + run)
        if(run<100){
            run = run + 1
        }
        else {
            run = 1
        }
    })

    var slide = 2
    keyDown("shift", () => {
        if (keyIsDown("right") || mouseIsDown()) {
            player.move(500, 0)
            if(slide%10 == 0)
            player.use(sprite('slide' + slide))
            // player.changeSprite('slide' + slide)
            if(slide<100){
                slide = slide + 1
            }
            else {
                slide = 1
            }
        } else {
            // TODO
        }
    })

    const pipe = add([
        sprite('pipe'),
        pos(250,500),
        body(), 
        area()
    ])

    const pipe5 = add([
        sprite('pipe'),
        pos(500,500),
        body(), 
        area()
    ])

    const pipe6 = add([
        sprite('pipe'),
        pos(750,500),
        body(), 
        area()
    ])

    const pipe7 = add([
        sprite('pipe'),
        pos(1000,500),
        body(), 
        area()
    ])

    const pipe1 = add([
        sprite('pipe'),
        pos(2000,500),
        body(), 
        area()
    ])

    const pipe2 = add([
        sprite('pipe'),
        pos(2250,500),
        body(), 
        area()
    ])

    const pipe3 = add([
        sprite('pipe'),
        pos(2500,500),
        body(), 
        area()
    ])

    const pipe4 = add([
        sprite('pipe'),
        pos(2750,500),
        body(), 
        area()
    ])
    // camera position follow player
    player.action(() => {
        // console.log(camPos())
        camPos(player.pos);
        if(player.pos.y > 1500) {
            go('game')
        }
        keyPress('down', () => {
            if(pipe.isTouching(player)) {
                window.open("https://github.com/kesavvvvv/Pac-Man",'_blank')
            }
            if(pipe5.isTouching(player)) {
                window.open("https://github.com/kesavvvvv/Movies",'_blank')
            }
            if(pipe6.isTouching(player)) {
                window.open("https://github.com/kesavvvvv/Chatting-Android",'_blank')
            }
            if(pipe7.isTouching(player)) {
                window.open("https://github.com/kesavvvvv/kesavvvvv.github.io",'_blank')
            }
            if(pipe1.isTouching(player)) {
                go('about')
            }
            if(pipe2.isTouching(player)) {
                go('projects')
            }
            if(pipe3.isTouching(player)) {
                go('skills')
            }
            if(pipe4.isTouching(player)) {
                go('contact')
            }
            
        })

        yClick = 0
        yRelease = 0
        mouseClick(() => {  
            yClick = mousePos().y
            mouseRelease(() => {
                yRelease = mousePos().y
                if(yRelease > yClick + 350) {
                    if(pipe.isTouching(player)) {
                        window.open("https://github.com/kesavvvvv/Pac-Man",'_blank')
                    }
                    if(pipe5.isTouching(player)) {
                        window.open("https://github.com/kesavvvvv/Movies",'_blank')
                    }
                    if(pipe6.isTouching(player)) {
                        window.open("https://github.com/kesavvvvv/Chatting-Android",'_blank')
                    }
                    if(pipe7.isTouching(player)) {
                        window.open("https://github.com/kesavvvvv/kesavvvvv.github.io",'_blank')
                    }
                    if(pipe1.isTouching(player)) {
                        go('about')
                    }
                    if(pipe2.isTouching(player)) {
                        go('projects')
                    }
                    if(pipe3.isTouching(player)) {
                        go('skills')
                    }
                    if(pipe4.isTouching(player)) {
                        go('contact')
                    }
                }
            })
        })


        //I'm so dumb sometimes gonna keep this here for the future fuck this shit. 

        // if(pipe.isTouching(player)) {
        //     keyPress('down', () => {
        //         window.open("https://github.com/kesavvvvv/Pac-Man",'_blank')
        //         go('projects')
        //     })
        //     // yClick = 0
        //     // yRelease = 0
        //     // mouseClick(() => {  
        //     //     yClick = mousePos().y
        //     //     mouseRelease(() => {
        //     //         yRelease = mousePos().y
        //     //         if(yRelease > yClick + 350) {
        //     //             window.open("https://github.com/kesavvvvv/Pac-Man")
        //     //         }
        //     //     })
        //     // })
        // }
        // if(pipe5.isTouching(player)) {
        //     keyPress('down', () => {
        //         window.open("https://github.com/kesavvvvv/Movies",'_blank')
        //         go('projects')
        //     })
        //     // yClick = 0
        //     // yRelease = 0
        //     // mouseClick(() => {  
        //     //     yClick = mousePos().y
        //     //     mouseRelease(() => {
        //     //         yRelease = mousePos().y
        //     //         if(yRelease > yClick + 350) {
        //     //             window.open("https://github.com/kesavvvvv/Movies")
        //     //         }
        //     //     })
        //     // })
        // }
        // if(pipe6.isTouching(player)) {
        //     keyPress('down', () => {
        //         window.open("https://github.com/kesavvvvv/Chatting-Android",'_blank')
        //         go('projects')
        //     })
        //     // yClick = 0
        //     // yRelease = 0
        //     // mouseClick(() => {  
        //     //     yClick = mousePos().y
        //     //     mouseRelease(() => {
        //     //         yRelease = mousePos().y
        //     //         if(yRelease > yClick + 350) {
        //     //             window.open("https://github.com/kesavvvvv/Chatting-Android")
        //     //         }
        //     //     })
        //     // })
        // }
        // if(pipe7.isTouching(player)) {
        //     keyPress('down', () => {
        //         window.open("https://github.com/kesavvvvv/kesavvvvv.github.io",'_blank')
        //         go('projects')
        //     })
        //     // yClick = 0
        //     // yRelease = 0
        //     // mouseClick(() => {  
        //     //     yClick = mousePos().y
        //     //     mouseRelease(() => {
        //     //         yRelease = mousePos().y
        //     //         if(yRelease > yClick + 350) {
        //     //             window.open("https://github.com/kesavvvvv/kesavvvvv.github.io")
        //     //         }
        //     //     })
        //     // })
        // }
        // if(pipe1.isTouching(player)) {
        //     keyPress('down', () => {
        //         go('about')
        //     })
        //     yClick = 0
        //     yRelease = 0
        //     mouseClick(() => {  
        //         yClick = mousePos().y
        //         mouseRelease(() => {
        //             yRelease = mousePos().y
        //             if(yRelease > yClick + 350) {
        //                 go('about')
        //             }
        //         })
        //     })
        // }
        // if(pipe2.isTouching(player)) {
        //     keyPress('down', () => {
        //         go('projects')
        //     })
        //     yClick = 0
        //     yRelease = 0
        //     mouseClick(() => {  
        //         yClick = mousePos().y
        //         mouseRelease(() => {
        //             yRelease = mousePos().y
        //             if(yRelease > yClick + 350) {
        //                 go('projects')
        //             }
        //         })
        //     })
        // }
        // if(pipe3.isTouching(player)) {
        //     keyPress('down', () => {
        //         go('skills')
        //     })
        //     yClick = 0
        //     yRelease = 0
        //     mouseClick(() => {  
        //         yClick = mousePos().y
        //         mouseRelease(() => {
        //             yRelease = mousePos().y
        //             if(yRelease > yClick + 350) {
        //                 go('skills')
        //             }
        //         })
        //     })
        // }
        // if(pipe4.isTouching(player)) {
        //     keyPress('down', () => {
        //         go('contact')
        //     })
        //     yClick = 0
        //     yRelease = 0
        //     mouseClick(() => {  
        //         yClick = mousePos().y
        //         mouseRelease(() => {
        //             yRelease = mousePos().y
        //             if(yRelease > yClick + 350) {
        //                 go('contact')
        //             }
        //         })
        //     })
        // }
        // if(pipe2.isTouching(player)) {
        //     keyPress('down', () => {
        //         window.open("http://www.google.com");
        //     })
        // }
    });
    

    return player
}

export {player}
