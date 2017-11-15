
var game = new Phaser.Game(1500,700, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update });

function preload() {

    

    game.load.image('logo', 'sprites/Logo.png');
    game.load.image('sonic', 'sprites/InfoSpoon.png');
    game.load.image('plato', 'sprites/PlatoA.png');
    game.load.image('mesaInformal', 'sprites/mesaInformal.png');
    game.load.image('mesaFormal', 'sprites/mesaFormal.png');

}

var cursors;


function create() {

    /*Limites del mundo */
    game.world.setBounds(-700, 0, 2900, 1200);

    /*Se pinta el fondo con el logo de la empresa*/
    for (var i = 0; i < 200; i++)
    {
        game.add.sprite(game.world.randomX, game.world.randomY, 'logo');
    }   
    /*Se añanden las mesas*/
    game.add.sprite(-450, 550 , 'mesaInformal');
    game.add.sprite(950, 550 , 'mesaFormal');
    game.add.sprite(950, 550 , 'plato');

    /*Titulo*/
    game.add.text(130, 20 , "CATERING & EVENTOS",
                    {
                        font: "110px Arial",
                        fill: "#100ad6",
                        align: "center" 
                    }
                );

    

    /*Texto fijo a la Camara */
    var info = game.add.text(0, 0, "Conozca la organizacion de las mesas", 
                            {
                            font: "32px Arial",
                            fill: "#ffffff",
                            align: "center" 
                            }
                         );
    info.fixedToCamera = true;
    info.cameraOffset.setTo(450, 600);
    /*|||||||||||||||||||||*/
    
    cursors = game.input.keyboard.createCursorKeys();

}

function update() {

        if (cursors.up.isDown)
        {
            game.camera.y -= 20;
        }
        else if (cursors.down.isDown)
        {
            game.camera.y += 20;
        }
    
        if (cursors.left.isDown)
        {
            game.camera.x -= 20;
        }
        else if (cursors.right.isDown)
        {
            game.camera.x += 20;
        }

}