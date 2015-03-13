
function enemy(game, image, aImage, group)
{
    this.sizeModifier = Math.floor(Math.random()*5);
    
    this.enemySwipe;
    this.attackAgain = true;
    console.log("enemy being called");
    this.badGuy = group.create(game.world.randomX, game.world.randomY, image);
    // bug: this doesn't change the body, only the sprite:
    // this.badGuy.scale.set(.7);
    game.physics.p2.enable(this.badGuy,true);
    game.physics.enable(this.badGuy, Phaser.Physics.ARCADE);
    
    this.badGuy.body.collideWorldBounds = true;

    this.badGuy.XP = Math.floor(4 + (2/3 * this.sizeModifier) );
    this.badGuy.health = 2 + Math.floor(this.sizeModifier * 1.5);
    this.badGuy.width = 30 + (this.sizeModifier * 10);
    this.badGuy.height = 75 + (this.sizeModifier * 25);
    this.badGuy.body.width = 30 + (this.sizeModifier * 10);
    this.badGuy.body.height = 30 + (this.sizeModifier * 10);

    this.enemyCircle = new Phaser.Circle(game.world.centerX, 
        100 + Math.floor(this.badGuy.width*1.5), 
        100 + Math.floor(this.badGuy.width*1.5) );
    this.attackCircle = new Phaser.Circle(game.world.centerX, 
        20 + Math.floor(this.badGuy.width*1.5), 
        20 + Math.floor(this.badGuy.width*1.5) );
    this.enemySwipe = game.add.sprite(350,350,aImage);
    game.physics.p2.enable(this.enemySwipe, false);
    this.enemySwipe.animations.add('attackSwipe');
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
        //console.log("kill attack");
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
    this.getSizeModifier = function() {
        return this.sizeModifer;
    }
}   
