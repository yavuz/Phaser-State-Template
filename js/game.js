// get dimensions of the window considering retina displays
var gameWidth = window.innerWidth * window.devicePixelRatio;
var gameHeight = window.innerHeight * window.devicePixelRatio;

game = new Phaser.Game(gameWidth, gameHeight, Phaser.AUTO, 'SOS');

//adds the states
game.state.add("load", loadState);
game.state.add("menu", menuState);
game.state.add("play", playState);

game.state.start("load");

