var ui = {
    
    
    create: function (game) {
        uiColl = game.add.group();
        uiColl.enableBody = true;
        uiColl.physicsBodyType = Phaser.Physics.P2JS;
        horiBar = game.add.sprite(79, 520, 'horiBar');
        game.physics.arcade.enable(horiBar);
        horiBar.body.immovable = true;
        uiColl.add(horiBar);

        vertBar = game.add.sprite(-2, -1, 'vertBar');
        game.physics.arcade.enable(vertBar);
        vertBar.body.immovable = true;
        uiColl.add(vertBar);
        
        vertBar2 = game.add.sprite(716, 0, 'vertBar2');
        game.physics.arcade.enable(vertBar2);
        vertBar2.body.immovable = true;
        uiColl.add(vertBar2);
        
        world = game.add.sprite(0, 0, 'world');
        world.x = game.width - world.width-4;
        world.y = game.height - world.height-4;
        
        meteor = game.add.sprite(0, game.height / 2, 'meteor');
        meteor.animations.add('attack');
        meteor.animations.play('attack',10,true);
        meteor.anchor.setTo(0.5, 0.5);
        meteor.x = game.width - vertBar.width / 2;
        meteor.y = meteor.height - meteor.height / 2;
        game.physics.arcade.enable(meteor);
        meteor.body.immovable = true;
        uiColl.add(meteor);
        
        healthBar = game.add.sprite(4, 5, 'healthBar');
        healthBar.cropEnabled = true;
        game.physics.arcade.enable(healthBar);
        healthBar.body.immovable = true;
        uiColl.add(healthBar);
        
        greenBar = game.add.sprite(0, game.height / 2, 'greenBar');
        greenBar.x = 24;
        greenBar.y = healthBar.y+65;
        greenBar.cropEnabled = true;
        greenBar.maxHeight = greenBar.height;

        
        
        playerPic = game.add.sprite(7,7,'playerPic',0);
        
    },
    
    update: function (game, health, maxHealth, timeLeft, maxGameTime,player) { // Pass in health to this function, builds the health bar.
        var newHeight = greenBar.maxHeight * (health/maxHealth);
        if (newHeight < greenBar.height){
            greenBar.height = newHeight;
        }
        if (meteor.y < game.height - meteor.height / 2) {
            meteor.y = (game.height - meteor.height / 2) - game.height * (timeLeft / maxGameTime);
        }
        game.physics.arcade.collide(player, uiColl);
    }
};