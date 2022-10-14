export default function EduText() {

    add([
        text("Hi! contact to edu page", {size: 30}), 
        origin('left'),
        layer('ui'),
        pos(250)
    ])
    add([
        text("I am currently doing my Master of Science in Computer Science at UCSC.", {size: 30}), 
        origin('left'),
        layer('ui'),
        // pos(1300, 250)
        pos(300)
    ])

    add([
        text("Feel free to look around the different areas...", {size: 30}), 
        origin('left'),
        layer('ui'),
        // pos(2500, 250)
        pos(350)
    ])
}