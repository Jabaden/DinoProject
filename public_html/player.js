/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var dino;
var attack;
var upFront = false;
var downFront = false;
var leftFront = false;
var rightFront = false;
var isAttacking = false;
var swipe;
var playerXP = 0;
var playerHealth = 5;
var maxPlayerHealth = 5;
var levelingXP = 1;
var playerSpeed = 200;
var aSound;
function player(game, image, aImage, attackSound)
{
    var upKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
    var downKey = game.input.keyboard.addKey(Phaser.Keyboard.S);
    var leftKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
    var rightKey = game.input.keyboard.addKey(Phaser.Keyboard.D);
    var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    aSound = game.add.audio(attackSound);
    //aSound.addMarker('testAttack', 1, 1.0);
    dino = game.add.sprite(200, 200, image);
    swipe = game.add.sprite(250, 250, aImage);
    swipe.animations.add('attackSwipe');
    game.physics.p2.enable(dino, false);
    game.physics.p2.enable(swipe, false);
    game.physics.enable(dino, Phaser.Physics.ARCADE);
    game.physics.enable(dino);
    dino.body.collideWorldBounds = true;
    dino.body.fixedRotation = true;
    swipe.body.kinematic = true;
    swipe.kill();
    //pausing the game
       pauseKey = game.input.keyboard.addKey(Phaser.Keyboard.P);
       restartKey = game.input.keyboard.addKey(Phaser.Keyboard.R);
       quitKey = game.input.keyboard.addKey(Phaser.Keyboard.ESC);
    
    
    // Dino Leveling Statistics


    //swipe.revive();
    //swipe.body.fixedRotation = true;
     this.update = function (map, bg_layer)
    {   
        var transition = false;
        
        //check for overlap w/ shrubs:
        var currentTile = map.getTile(Math.floor(dino.x/40),
            Math.floor(dino.y/40), bg_layer, true);
        if (currentTile.index == 7 || currentTile.index == 9){
            console.log("colliding w/ shrub index #" + currentTile.index);
            map.replace(7, 1, currentTile.x, currentTile.y, 1, 1);
            map.replace(9, 1, currentTile.x, currentTile.y, 1, 1);
            playerXP += 1;
        }else if (currentTile.index == 8) { // warp tile
            if (currentTile.x == 2) 
                console.log('go west');
            if (currentTile.x == map.width-1) 
                console.log('go east');    
            if (currentTile.y == 0)
                console.log('go north');
            if (currentTile.y == map.height-1)
                console.log('go south');
            transition = true;
        }
        if(pauseKey.isDown){
            level_0.managePause();
        }
        if(restartKey.isDown){
            game.state.start('level_0');
        }
        if(quitKey.isDown){
            game.state.start('mainMenu');
        }
        
        dino.body.setZeroVelocity();
        if (isAttacking == false) {
            if (leftKey.isDown)
            {
                //move to the leftarino
                leftFront = true;
                upFront = false;
                downFront = false;
                rightFront = false;
                dino.body.angle = -90;
                dino.angle = -90;
                dino.body.moveLeft(playerSpeed);
            }
            else if (rightKey.isDown)
            {
                //move to the rightarino
                leftFront = false;
                upFront = false;
                downFront = false;
                rightFront = true;
                dino.body.angle = 90;
                dino.angle = 90;
                dino.body.moveRight(playerSpeed);
            }
            if (upKey.isDown)
            {
                //to the sky!
                leftFront = false;
                upFront = true;
                downFront = false;
                rightFront = false;
                dino.body.angle = 0;
                dino.angle = 0;
                dino.body.moveUp(playerSpeed);
            }
            else if (downKey.isDown)
            {
                //STRAIGHT TO HELL
                leftFront = false;
                upFront = false;
                downFront = true;
                rightFront = false;
                dino.body.angle = 180;
                dino.angle = 180;
                dino.body.moveDown(playerSpeed);
            }
            if (spaceKey.isDown && isAttacking == false)
            {
                if (leftKey.isDown)
                {
                    swipe.revive();
                    swipe.body.x = dino.x - 80;
                    swipe.body.y = dino.y;
                    swipe.angle = -90;
                    swipe.body.angle = -90;
                    //testing end screens
                    endValue = false;
                    game.state.start('end');
                }
                else if (rightKey.isDown)
                {
                    swipe.revive();
                    swipe.body.x = dino.x + 75;
                    swipe.body.y = dino.y;
                    swipe.angle = 90;
                    swipe.body.angle = 90;

                }
                else if (upKey.isDown)
                {
                    swipe.revive();
                    swipe.body.x = dino.x;
                    swipe.body.y = dino.y - 85;
                    swipe.angle = 0;
                    swipe.body.angle = 0;
                }
                else if (downKey.isDown)
                {
                    swipe.revive();
                    swipe.body.x = dino.x;
                    swipe.body.y = dino.y + 75;
                    swipe.angle = -180;
                    swipe.body.angle = -180;
                }
                else
                {
                    if (leftFront == true)
                    {
                        swipe.revive();
                        swipe.body.x = dino.x - 80;
                        swipe.body.y = dino.y;
                        swipe.angle = -90;
                        swipe.body.angle = -90;
                    }
                    else if (rightFront == true)
                    {
                        swipe.revive();
                        swipe.body.x = dino.x + 75;
                        swipe.body.y = dino.y;
                        swipe.angle = 90;
                        swipe.body.angle = 90;
                    }
                    else if (upFront == true)
                    {
                        swipe.revive();
                        swipe.body.x = dino.x;
                        swipe.body.y = dino.y - 85;
                        swipe.angle = 0;
                        swipe.body.angle = 0;
                    }
                    else
                    {
                        swipe.revive();
                        swipe.body.x = dino.x;
                        swipe.body.y = dino.y + 75;
                        swipe.angle = -180;
                        swipe.body.angle = -180;
                    }
                }
                swipe.animations.stop(true);
                swipe.animations.play('attackSwipe', 10, true);
                aSound.play();
                isAttacking = true;
                game.time.events.add(300, attackAgain, this);
                game.time.events.add(300, swipe.kill, swipe);
            }
            
        }
        if (playerXP > levelingXP){ // Leveling up the dinosaur
            console.log("Level up!");
            levelingXP = Math.floor(levelingXP*2.5);
            dinoPlayer.setSpeed(dinoPlayer.getSpeed()+25);
            dinoPlayer.setMaxHealth(dinoPlayer.getMaxHealth()-1);
            dinoPlayer.setHealth(dinoPlayer.getMaxHealth());
        }
        return transition;
    };
    function attackAgain()
    {
        isAttacking = false;
    }
    this.killAttack = function ()
    {
        attack.destroy;
    };
    this.getX = function ()
    {
        return dino.x;
    };
    this.getY = function ()
    {
        return dino.y;
    };
    this.getSprite = function ()
    {
        return dino;
    };
    this.getAttack = function ()
    {
        return swipe;
    };

    this.addXP = function (xp) {
        playerXP += xp;
    };

    this.getXP = function () {
        return playerXP;
    };
    this.getSpeed = function () {
        return playerSpeed;
    };
    this.setSpeed = function(speed) {
        playerSpeed = speed;
    };
    this.getHealth = function () {
        return playerHealth;
    };
    this.setHealth = function (health) {
        playerHealth = health;
    };
    this.getMaxHealth = function () {
        return maxPlayerHealth;
    };
    this.setMaxHealth = function (health) {
        maxPlayerHealth = health;
    };
}



/*setupText: function () {
 this.instructions = this.add.text( 510, 600, 
 'Use Arrow Keys to Move, Press Z to Fire\nClicking does both', 
 {font: '20px monospace', fill: '#fff', align: 'center'}
 );
 this.instructions.anchor.setTo(0.5, 0.5);
 this.time.events.add(5000, this.instructions.destroy, this);
 */