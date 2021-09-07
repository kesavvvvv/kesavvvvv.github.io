let player;

export default function PlayerActions() {
    player = add([
        sprite('playeridle'),
        pos(30,0),
        body(), 
        area()
    ])

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

    // camera position follow player
    player.action(() => {
        // console.log(camPos())
        camPos(player.pos);
    });

    return player
}

export {player}
