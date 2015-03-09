/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var mainMenu = {
  create: function() {
      game.add.sprite(0, 0, 'background');
// add the button that will start the game
      var play = game.add.sprite(50, 500, 'play');
      play.inputEnabled = true;
      play.events.onInputDown.add(this.startGame, this);
  },
  startGame: function(){
      game.state.start('main');
  }
};

