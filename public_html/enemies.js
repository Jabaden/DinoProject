function enemy(game, image, aImage, group)
{
    console.log("enemy being called");
    this.badGuy = group.create(game.world.randomX, game.world.randomY, image);
    // bug: this doesn't change the body, only the sprite:
    // this.badGuy.scale.set(.7);
    game.physics.p2.enable(this.badGuy,true);
    game.physics.enable(this.badGuy, Phaser.Physics.ARCADE);
    this.badGuy.body.collideWorldBounds = true;
    this.enemyCircle = new Phaser.Circle(game.world.centerX, 150,150);
    this.badGuy.health = 3;
    
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
    this.findNewPos = function(){
        this.badGuy.x = game.world.randomX;
        this.badGuy.y = game.world.randomY;
    }
    this.getCircle = function()
    {
        return this.enemyCircle;
    }
    
}   