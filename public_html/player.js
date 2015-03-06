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
function player(game, image, aImage)
{
    var upKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
    var downKey = game.input.keyboard.addKey(Phaser.Keyboard.S);
    var leftKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
    var rightKey = game.input.keyboard.addKey(Phaser.Keyboard.D);
    var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    dino = game.add.sprite(200,200, image);
    swipe = game.add.sprite(250,250, aImage);
    game.physics.p2.enable(dino,true);
    game.physics.p2.enable(swipe,true);
    game.physics.enable(dino, Phaser.Physics.ARCADE);
    game.physics.enable(dino)
    dino.body.collideWorldBounds = true;
    dino.body.fixedRotation = true;
    swipe.body.kinematic = true;
    swipe.kill();
    
    //swipe.revive();
    //swipe.body.fixedRotation = true;
    this.update = function()
    {
        
        dino.body.setZeroVelocity();
        if(isAttacking == false) {
        if(leftKey.isDown)
        {
            //move to the leftarino
            leftFront = true;
            upFront = false;
            downFront = false;
            rightFront = false;
            dino.body.angle = -90;
            dino.angle = -90;
            dino.body.moveLeft(200);
        }
        else if(rightKey.isDown)
        {
            //move to the rightarino
            leftFront = false;
            upFront = false;
            downFront = false;
            rightFront = true;
            dino.body.angle = 90;
            dino.angle = 90;
            dino.body.moveRight(200);
        }
        if(upKey.isDown)
        {
            //to the sky!
            leftFront = false;
            upFront = true;
            downFront = false;
            rightFront = false;
            dino.body.angle = 0;
            dino.angle = 0;
            dino.body.moveUp(200);
        }
        else if(downKey.isDown)
        {
            //STRAIGHT TO HELL
            leftFront = false;
            upFront = false;
            downFront = true;
            rightFront = false;
            dino.body.angle = 180;
            dino.angle = 180;
            dino.body.moveDown(200);
        }
        if(spaceKey.isDown && isAttacking == false)
        {
            if(leftKey.isDown)
            {
                swipe.revive();
                swipe.body.x = dino.x -80;
                swipe.body.y = dino.y;
            }
            else if(rightKey.isDown)
            {
                swipe.revive();
                swipe.body.x = dino.x + 75;
                swipe.body.y = dino.y;
            }
            else if(upKey.isDown)
            {
                swipe.revive();
                swipe.body.x = dino.x;
                swipe.body.y = dino.y - 85;
            }
            else if(downKey.isDown)
            {
                swipe.revive();
                swipe.body.x = dino.x;
                swipe.body.y = dino.y + 75;
            }
            else
            {
                if(leftFront == true)
                {
                    swipe.revive();
                swipe.body.x = dino.x -80;
                swipe.body.y = dino.y;
                }
                else if(rightFront == true)
                {
                    swipe.revive();
                swipe.body.x = dino.x + 75;
                swipe.body.y = dino.y;
                }
                else if(upFront == true)
                {
                    swipe.revive();
                swipe.body.x = dino.x;
                swipe.body.y = dino.y - 85;
                }
                else
                {
                    swipe.revive();
                swipe.body.x = dino.x;
                swipe.body.y = dino.y + 75;
                }
            }
            isAttacking = true;
            game.time.events.add(300, attackAgain, this);
            game.time.events.add(300, swipe.kill, swipe);
        }

    }
    }
    function attackAgain()
    {
        isAttacking = false;
    }
    this.killAttack = function()
    {
        attack.destroy;
    }
    this.getX = function()
    {
        return dino.x;
    }
    this.getY = function()
    {
        return dino.y;
    }
    this.getSprite = function()
    {
        return dino;
    }
    this.getAttack = function()
    {
        return swipe;
    }
    
    this.setXP = function(xp){
        playerXP = xp;
    }
    
    this.getXP = function(){
        return playerXP;
    }
}



/*setupText: function () {
  this.instructions = this.add.text( 510, 600, 
    'Use Arrow Keys to Move, Press Z to Fire\nClicking does both', 
    {font: '20px monospace', fill: '#fff', align: 'center'}
  );
  this.instructions.anchor.setTo(0.5, 0.5);
  this.time.events.add(5000, this.instructions.destroy, this);
*/