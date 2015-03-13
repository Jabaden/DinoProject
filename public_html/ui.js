var ui = {
    
    
    create: function (game) {
        uiColl = game.add.group();
        uiColl.enableBody = true;
        uiColl.physicsBodyType = Phaser.Physics.P2JS;
        horiBar = game.add.sprite(0, 0, 'horiBar');
        horiBar.height = 80;
        horiBar.width = 800;
        horiBar.x = ((game.width / 2) - (horiBar.width / 2));
        horiBar.y = ((game.height) - (horiBar.height));
        game.physics.arcade.enable(horiBar);
        horiBar.body.immovable = true;
        uiColl.add(horiBar);

        vertBar = game.add.sprite(0, 0, 'vertBar');
        vertBar.height = 600;
        vertBar.width = 80;
        vertBar.x = ((game.width) - (vertBar.width));
        vertBar.y = ((game.height / 2) - (vertBar.height / 2));
        game.physics.arcade.enable(vertBar);
        vertBar.body.immovable = true;
        uiColl.add(vertBar);
        
        vertBar2 = game.add.sprite(0, 0, 'vertBar2');
        vertBar2.height = 600;
        vertBar2.width = 80;
        vertBar2.x = 0;
        vertBar2.y = ((game.height / 2) - (vertBar2.height /2 ));
        game.physics.arcade.enable(vertBar2);
        vertBar2.body.immovable = true;
        uiColl.add(vertBar2);
        
        meteor = game.add.sprite(0, game.height / 2, 'meteor');
        meteor.animations.add('attack');
        meteor.animations.play('attack',30,true);
        meteor.anchor.setTo(0.5, 0.5);
        meteor.x = game.width - vertBar.width / 2;
        meteor.y = meteor.height - meteor.height / 2;
        game.physics.arcade.enable(meteor);
        meteor.body.immovable = true;
        uiColl.add(meteor);
        
        healthBar = game.add.sprite(0, game.height / 2, 'healthBar');
        healthBar.x = 5;
        healthBar.y = 5;
        healthBar.cropEnabled = true;
        game.physics.arcade.enable(healthBar);
        healthBar.body.immovable = true;
        uiColl.add(healthBar);
        
        playerPic = game.add.sprite(7,7,'playerPic',0);
        
    },
    
    update: function (game, health, maxHealth, timeLeft, maxGameTime,player) { // Pass in health to this function, builds the health bar.
        healthBar.crop.width = (health / maxHealth) * healthBar.width; // Crops the health bar as health goes down.
        if (meteor.y < game.height - meteor.height / 2) {
            meteor.y = (game.height + meteor.height / 2) - game.height * (timeLeft / maxGameTime);
        }
        game.physics.arcade.collide(player, uiColl);
    }
};