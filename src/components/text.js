export default function Text() {

    add([
        text("Hi! My name is Kesav Ravichandran. Welcome to my profile game.", {size: 30}), 
        origin('left'),
        layer('ui'),
        pos(250)
    ])
    add([
        text("Use the right and up arrow keys to move around using the keyboard.", {size: 30}), 
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
        text("I am currently pursuing my Master of Science in Computer Science at UCSC.", {size: 30}), 
        origin('left'),
        layer('ui'),
        pos(1800, 250)
    ])
    add([
        text("I am a software developer engineer with 1.5 years of experience as a backend Java developer", {size: 30}), 
        origin('left'),
        layer('ui'),
        // pos(1300, 250)
        pos(1800, 300)
    ])

    add([
        text("I am from Chennai, India.", {size: 30}), 
        origin('left'),
        layer('ui'),
        // pos(2500, 250)
        pos(1800, 350)
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
        pos(1800, 350)
    ])

    add([
        text("Skills", {size: 30}), 
        origin('left'),
        layer('ui'),
        // pos(2500, 250)
        pos(1800, 350)
    ])

    add([
        text("Contact", {size: 30}), 
        origin('left'),
        layer('ui'),
        // pos(2500, 250)
        pos(1800, 350)
    ])
}