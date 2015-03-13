/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var end = {
  create: function() {
      game.add.sprite(0, 0, 'end');
        if(endValue){
            game.input.onDown.add(this.win, self);
            
        }else{
            game.input.onDown.add(this.lose, self);
            
        }
        
    },
    win: function() {
        game.add.sprite(0,0,'winScreen');
        game.input.onDown.add(showWin, self);
        function showWin(){
            game.add.sprite(146,215,'win');
        }
    },
    lose: function() {
        game.add.sprite(0,-1,'loseScreen');
        game.input.onDown.add(showLoss, self);
        function showLoss(){
            game.add.sprite(146,215,'lose');
        }
    },
    credits: function(){
        //game.state.start('credits');
    }
};

