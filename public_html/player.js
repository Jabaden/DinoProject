/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var dino;
function player(game, image)
{
    var upKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
    var downKey = game.input.keyboard.addKey(Phaser.Keyboard.S);
    var leftKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
    var rightKey = game.input.keyboard.addKey(Phaser.Keyboard.D);
    var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    dino = game.add.sprite(200,200, image);
    game.physics.arcade.enable(dino);
    dino.body.collideWorldBounds = true;
    this.update = function()
    {
        dino.body.velocity.x = 0;
        dino.body.velocity.y = 0;
        if(leftKey.isDown)
        {
            //move to the leftarino
            dino.body.velocity.x = -150;
        }
        else if(rightKey.isDown)
        {
            //move to the rightarino
            dino.body.velocity.x = 150;
        }
        if(upKey.isDown)
        {
            //to the sky!
            dino.body.velocity.y = -150;
        }
        else if(downKey.isDown)
        {
            dino.body.velocity.y = 150;
        }

        }
    
}


