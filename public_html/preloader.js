/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var preloader = {
    preload: function() {
            game.load.image('dinoSelf', 'assets/Dino.png');
            game.load.image('dinoTri', 'assets/enemy-tri.png');
            game.load.image('dinoAnk', 'assets/enemy-ank.png');
            game.load.image('dinoSteg', 'assets/enemy-steg.png');
            game.load.image('dinoVel', 'assets/enemy-vel.png');
            game.load.image('diamond', 'assets/diamond.png');
            game.load.image('background', 'assets/Main-Menu.png');
            game.load.spritesheet('play', 'assets/play.png',153.75,97.25,2);
            game.load.tilemap('tilemap_0_json', 'assets/tilemap_0.json', null, Phaser.Tilemap.TILED_JSON);
            game.load.tilemap('tilemap_1_json', 'assets/tilemap_1.json', null, Phaser.Tilemap.TILED_JSON);
            game.load.tilemap('tilemap_2_json', 'assets/tilemap_2.json', null, Phaser.Tilemap.TILED_JSON);
            game.load.tilemap('tilemap_3_json', 'assets/tilemap_3.json', null, Phaser.Tilemap.TILED_JSON);
            game.load.tilemap('tilemap_4_json', 'assets/tilemap_4.json', null, Phaser.Tilemap.TILED_JSON);
            game.load.tilemap('tilemap_5_json', 'assets/tilemap_5.json', null, Phaser.Tilemap.TILED_JSON);
            game.load.image('Tiles', 'assets/Tiles.png');
            game.load.audio('swipeSound', 'assets/swordswipe.ogg');
            game.load.spritesheet('playerAttackAni', 'assets/attack.png', 60, 10, 3);
            game.load.image('healthBar', 'assets/healthBar.png');
            game.load.spritesheet('playerPic','assets/health-mood.png',65,65,3,0,10);
            game.load.image('vertBar', 'assets/vertBar.png');
            game.load.image('vertBar2', 'assets/vertBar.png');
            game.load.image('horiBar', 'assets/horiBar.png');
            // game.load.image('meteor', 'assets/meteor.png');
            game.load.spritesheet('meteor', 'assets/meteor.png', 76, 212, 2);
            game.load.spritesheet('resume', 'assets/resume.png',212,66,2);
            game.load.spritesheet('restart', 'assets/restart.png',235,65,2);
            game.load.spritesheet('quit', 'assets/quit.png',165,85,2);
            game.load.image('pause', 'assets/pause-back.png');
            game.load.image('end', 'assets/end.png');
            game.load.image('loseScreen', 'assets/lose.png');
            game.load.image('winScreen', 'assets/win.png');
            game.load.image('win', 'assets/winner.png');
            game.load.image('lose', 'assets/failure.png');
            game.load.image('instruct','assets/instructions.png');
            game.load.image('logo', 'assets/logo.png');
            
            // Loading music
            game.load.audio('menuMusic', 'assets/Extinction Menu Music.ogg');
            game.load.audio('pauseMusic', 'assets/Extinction Pause Music.ogg');
            
            // Loading music
            game.load.audio('menuMusic', 'assets/Extinction Menu Music.ogg');
            game.load.audio('pauseMusic', 'assets/Extinction Pause Music.ogg');
            
        },
        create: function(){
            //shows our logo before main screen
            game.add.sprite(0,game.height/2,'logo');
            game.time.events.add(Phaser.Timer.SECOND * 2, this.start, this);
            
        },
        start: function(){
            game.state.start('mainMenu');
        }
    };
