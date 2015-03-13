
function enemy(game, image, aImage, group)
{
    this.enemySwipe;
    this.attackAgain = true;
    console.log("enemy being called");
    this.badGuy = group.create(game.world.randomX, game.world.randomY, image);
    // bug: this doesn't change the body, only the sprite:
    // this.badGuy.scale.set(.7);
    game.physics.p2.enable(this.badGuy,true);
    game.physics.enable(this.badGuy, Phaser.Physics.ARCADE);
    
    this.badGuy.body.collideWorldBounds = true;
    this.enemyCircle = new Phaser.Circle(game.world.centerX, 125,125);
    this.attackCircle = new Phaser.Circle(game.world.centerX, 50,50);
    this.enemySwipe = game.add.sprite(350,350,aImage);
    game.physics.p2.enable(this.enemySwipe, false);
    this.enemySwipe.animations.add('attackSwipe');
    this.badGuy.health = 3;
    this.badGuy.height = 75;
    this.badGuy.body.height = 75;
    this.badGuy.body.width = 30;
    this.badGuy.width = 30;
    this.enemySwipe.body.kinematic = true;
    this.enemySwipe.kill();
    
    this.update = function()
    {
        
    }
    
    this.circleUpdate = function()
    {
        this.enemyCircle.x = this.badGuy.x; 
        this.enemyCircle.y = this.badGuy.y;
        this.attackCircle.y = this.badGuy.y;
        this.attackCircle.x = this.badGuy.x;
    }
    this.circleRender = function()
    {
        game.debug.geom(this.enemyCircle,'#cfffff', false);
        game.debug.geom(this.attackCircle,'#cfffff', false);
        
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
    this.getACircle = function()
    {
        return this.attackCircle;
    }
    this.getEnemyAttack = function()
    {
        return this.enemySwipe;
    }
    this.killAttack = function()
    {
        console.log("kill attack");
        this.enemySwipe.kill();
    }
    this.reviveAttack = function()
    {
        this.enemySwipe.revive();
    }
    this.getAttackX = function()
    {
        return this.enemySwipe.x;
    }
    this.getAttackY = function()
    {
        return this.enemySwipe.y;
    }
    this.cannotAttack = function()
    {
        this.attackAgain = false;
//        console.log("can no longer attack!");
    }
    this.canAttack = function()
    {
        this.attackAgain = true;
//        console.log("can attack!");
    }
    this.queryAttack = function()
    {
        return this.attackAgain;
    }
    
    
}   
