playState = {
	create:function() {
		this.game.stage.backgroundColor = "#40d47e";

		//buttons
		var buttonTextStyle =  {
			font: "50px Verdana",
			fill: "#000000"
		};

		playButton = this.game.add.button(this.game.world.width,100, "menuButton", this.playBtn);
		playButtonText = this.game.add.text(this.game.world.width, playButton.y+15, "GAME", buttonTextStyle);
		
		// button and text tween
		this.game.add.tween(playButton).to( { x: this.game.world.centerX-173 }, 400, Phaser.Easing.Bounce.Out, true);
        this.game.add.tween(playButtonText).to( { x: this.game.world.centerX-70 }, 400, Phaser.Easing.Bounce.Out, true);
	},

	//Play button is pressed and change state
	playBtn:function() {
		game.state.start("menu");
	},
	
	update:function() {

	}
};