/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var preloader = {
    preload: function() {
            //ui.preload(game);
            game.load.image('dinoSelf', 'assets/Dino.png');
            game.load.image('dinoBG', 'assets/enemy-tri.png');
            game.load.image('diamond', 'assets/diamond.png');
            game.load.image('background', 'assets/Main-Menu.png');
            game.load.image('play', 'assets/play.png');
            game.load.tilemap('tilemap_0_json', 'assets/tilemap_0.json', null, Phaser.Tilemap.TILED_JSON);
            game.load.tilemap('tilemap_1_json', 'assets/tilemap_1.json', null, Phaser.Tilemap.TILED_JSON);
            game.load.tilemap('tilemap_2_json', 'assets/tilemap_2.json', null, Phaser.Tilemap.TILED_JSON);
            game.load.tilemap('tilemap_3_json', 'assets/tilemap_3.json', null, Phaser.Tilemap.TILED_JSON);
            game.load.tilemap('tilemap_4_json', 'assets/tilemap_4.json', null, Phaser.Tilemap.TILED_JSON);
            game.load.tilemap('tilemap_5_json', 'assets/tilemap_5.json', null, Phaser.Tilemap.TILED_JSON);
            game.load.image('Tiles', 'assets/Tiles.png');
            game.load.audio('swipeSound', 'assets/swordswipe.ogg');
            game.load.spritesheet('playerAttackAni', 'assets/attack.png', 60, 10, 3);
            game.load.image('healthBar', 'assets/health.png');
            game.load.image('vertBar', 'assets/vertBar.png');
            game.load.image('vertBar2', 'assets/vertBar.png');
            game.load.image('horiBar', 'assets/horiBar.png');
            game.load.image('meteor', 'assets/meteor.png');
            game.load.image('resume', 'assets/resume.png');
            game.load.image('restart', 'assets/restart.png');
            game.load.image('quit', 'assets/quit.png');
            game.load.image('pause', 'assets/pause-back.png');
            
            // Loading music
            game.load.audio('menuMusic', 'assets/Extinction Menu Music.ogg');
            game.load.audio('pauseMusic', 'assets/Extinction Pause Music.ogg');
            
        },
        create: function(){
            game.state.start('mainMenu');
        }
    };