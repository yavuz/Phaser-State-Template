loadState = {
	preload:function() {
		//loads everything

		game.load.image('background','images/background.png');
		game.load.image('menuButton','images/menubutton.png');
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		game.scale.setScreenSize();
		
	},

	create:function() {
		game.state.start("menu");
	}
};	