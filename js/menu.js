menuState = {
	create:function() {
		this.game.stage.backgroundColor = 0x3498db;

		//buttons
		var buttonTextStyle =  {
			font: "50px Verdana",
			fill: "#000000"
		};

		playButton = this.game.add.button(-this.game.world.centerX,300, "menuButton", this.playBtn);
		playButtonText = this.game.add.text(playButton.x, playButton.y+15, "MENU", buttonTextStyle);

		// button and text tween
        this.game.add.tween(playButton).to( { x: this.game.world.centerX-173 }, 500, Phaser.Easing.Bounce.Out, true);
        this.game.add.tween(playButtonText).to( { x: this.game.world.centerX-70 }, 500, Phaser.Easing.Bounce.Out, true);
	},

	//Play button is pressed
	playBtn:function() {
		game.state.start("play");
	},

	update:function() {

	}
};
