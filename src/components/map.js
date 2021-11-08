export default function Map() {
    const map = [
        '                               ',
        '                               ',
        '                               ',
        '                               ',
        '                               ',
        '                         +      ', 
        '============  =====================================',
        '------------  -------------------------------------'
    ]
    const levelCfg = {
        width: 99,
        height: 87,
        '=': () => [
            sprite('grass'),     
        ],
        '-': () => [
            sprite('dirt'),
            solid(),  
            area()
        ]
    }
    const gameLevel = addLevel(map, levelCfg)
}