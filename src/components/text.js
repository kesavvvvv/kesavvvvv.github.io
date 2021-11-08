export default function Text() {

    add([
        text("Hi! Welcome to my game.", {size: 46}), 
        origin('center'),
        layer('ui'),
        pos(250)
    ])
    add([
        text("I am an engineer from Chennai, India.", {size: 46}), 
        origin('center'),
        layer('ui'),
        pos(1300, 250)
    ])

    add([
        text("Feel free to look around the different areas...", {size: 46}), 
        origin('center'),
        layer('ui'),
        pos(2500, 250)
    ])
}