//Initialize kaboom.js
kaboom({
    global: true,
    fullscreen: true,
    scale: 1,
    debug: true,
    clearColor: [0, 0, 0, 1],
    touchToMouse: 1
});

//Import all scenes
import Home from './src/scenes/home.js'
import SpritesInit from './src/components/sprites.js'
import Game from './src/scenes/game.js'

//Initialize all Sprites
SpritesInit()

//Home Page
scene('home', Home)

//Game Page
scene("game", Game)

//Start the website
go('home');