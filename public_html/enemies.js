/*
 //* To change this license header, choose License Headers in Project Properties.
 //* To change this template file, choose Tools | Templates
 //* and open the template in the editor.
 */


function enemy(game, image, aImage, group)
{
    console.log("enemy being called");
    this.badGuy = group.create(game.world.randomX, game.world.randomY, image);
    game.physics.p2.enable(this.badGuy,true);
    game.physics.enable(this.badGuy, Phaser.Physics.ARCADE);
    this.badGuy.body.collideWorldBounds = true;
    this.enemyCircle = new Phaser.Circle(game.world.centerX, 150,150);
    this.health = 1;

    this.update = function()
    {
        
    }
    
    this.circleUpdate = function()
    {
        this.enemyCircle.x = this.badGuy.x; 
        this.enemyCircle.y = this.badGuy.y;
    }
    this.circleRender = function()
    {
        game.debug.geom(this.enemyCircle,'#cfffff', false);
        
    }
    
    this.getSprite = function()
    {
        return this.badGuy;
    }
    this.getX = function()
    {
        return this.badGuy.x;
    }
    this.getY = function()
    {
        return this.badGuy.y;
    }
    this.getCircle = function()
    {
        return this.enemyCircle;
    }
}   