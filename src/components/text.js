export default function Text() {

    add([
        text("Hi! My name is Kesav Ravichandran. Welcome to my portfolio game!.", {size: 30}), 
        origin('left'),
        layer('ui'),
        pos(250)
    ])
    add([
        text("Use the right and up arrow keys to move around using the keyboard. Press down arrow key or stay on it for 5 seconds to enter the pipe.", {size: 30}), 
        origin('left'),
        layer('ui'),
        // pos(1300, 250)
        pos(300)
    ])

    add([
        text("Tap to move and swipe up to jump if you are on mobile.", {size: 30}), 
        origin('left'),
        layer('ui'),
        // pos(2500, 250)
        pos(350)
    ])

    add([
        text("About", {size: 30}), 
        origin('left'),
        layer('ui'),
        // pos(2500, 250)
        pos(2000, 350)
    ])

    add([
        text("Projects", {size: 30}), 
        origin('left'),
        layer('ui'),
        // pos(2500, 250)
        pos(2222, 350)
    ])

    add([
        text("Skills", {size: 30}), 
        origin('left'),
        layer('ui'),
        // pos(2500, 250)
        pos(2500, 350)
    ])

    add([
        text("Contact", {size: 30}), 
        origin('left'),
        layer('ui'),
        // pos(2500, 250)
        pos(2750, 350)
    ])
}
