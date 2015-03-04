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
function player(game, image, aImage)
{
    var upKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
    var downKey = game.input.keyboard.addKey(Phaser.Keyboard.S);
    var leftKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
    var rightKey = game.input.keyboard.addKey(Phaser.Keyboard.D);
    var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    dino = game.add.sprite(200,200, image);
    game.physics.p2.enable(dino,true);
    game.physics.enable(dino, Phaser.Physics.ARCADE);
    dino.body.collideWorldBounds = true;
    //dino.pivot.setTo(dino.width/2, dino.height/2);
    //dino.anchor.setTo(.5, .5);
    dino.body.fixedRotation = true;
    this.update = function()
    {
        dino.body.setZeroVelocity();
        if(leftKey.isDown)
        {
            //move to the leftarino
            leftFront = true;
            upFront = false;
            downFront = false;
            rightFont = false;
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
            rightFont = true;
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
            rightFont = false;
            dino.body.angle = 0;
            dino.angle = 0;
            dino.body.moveUp(200);
        }
        else if(downKey.isDown)
        {
            leftFront = false;
            upFront = false;
            downFront = true;
            rightFont = false;
            dino.body.angle = 180;
            dino.angle = 180;
            dino.body.moveDown(200);
        }
        if(spaceKey.isDown)
        {
            if(leftKey.isDown)
            {
                attack = game.add.sprite(dino.x - 50,dino.y, aImage);
            }
            else if(rightKey.isDown)
            {
                attack = game.add.sprite(dino.x + 50,dino.y, aImage);
            }
            else if(upKey.isDown)
            {
                attack = game.add.sprite(dino.x,dino.y - 50, aImage);
            }
            else if(downKey.isDown)
            {
                attack = game.add.sprite(dino.x,dino.y + 50, aImage);
            }
            game.time.events.add(100, attack.destroy, attack);
        }

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
}



/*setupText: function () {
  this.instructions = this.add.text( 510, 600, 
    'Use Arrow Keys to Move, Press Z to Fire\nClicking does both', 
    {font: '20px monospace', fill: '#fff', align: 'center'}
  );
  this.instructions.anchor.setTo(0.5, 0.5);
  this.time.events.add(5000, this.instructions.destroy, this);
*/