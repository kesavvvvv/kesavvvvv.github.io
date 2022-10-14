export default function EduText() {

    add([
        text("Email: keravich@ucsc.edu", {size: 30}), 
        origin('left'),
        layer('ui'),
        pos(250)
    ])
    add([
        text("Phone Number: +1 (669) 837-5610", {size: 30}), 
        origin('left'),
        layer('ui'),
        // pos(1300, 250)
        pos(300)
    ])
}