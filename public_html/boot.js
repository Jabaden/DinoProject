/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var boot = {
    preload: function() {
        //game.load.image('logo','assets/logo.png');
    },
    create: function(){
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        game.scale.refresh();
        game.state.start('preloader');
        
    }
};

