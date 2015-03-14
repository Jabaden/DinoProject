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
            game.input.onDown.add(startOver, self);
            function startOver(){
                playerXP = 0;
                playerHealth = 20;
                maxPlayerHealth = 20;
                levelingXP = 20;
                victoryXP = levelingXP * 2.25*2.25*2.25;
                playerSpeed = 200;
                plantsEatenAtLevel = 0;
                animalsEatenAtLevel = 0;
                playerLevel = 1;
                playerDamage = 1;
                timeLeft = totalTime;
                enemyCircle = 100;
                game.state.start('mainMenu');
            }
        }
    },
    lose: function() {
        game.add.sprite(0,-1,'loseScreen');
        game.input.onDown.add(showLoss, self);
        function showLoss(){
            game.add.sprite(146,215,'lose');
            game.input.onDown.add(startOver, self);
            function startOver(){
                playerXP = 0;
                playerHealth = 20;
                maxPlayerHealth = 20;
                levelingXP = 20;
                victoryXP = levelingXP * 2.25*2.25*2.25;
                playerSpeed = 200;
                plantsEatenAtLevel = 0;
                animalsEatenAtLevel = 0;
                playerLevel = 1;
                playerDamage = 1;
                timeLeft = totalTime;
                enemyCircle = 100;
                game.state.start('mainMenu');
            }
        }
    },
    credits: function(){
        //game.state.start('credits');
    }
};

