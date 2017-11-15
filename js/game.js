
var game = new Phaser.Game(1500,700, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update });

var platoA;

function Elemento(nombre,ruta) {
    this.nombre = nombre;
    this.insercion = null ;
    this.textToolTip = "Hola";
    this.toolTip =null ;
    game.load.image(nombre, ruta);
}



Elemento.prototype.diHola = function() {
  alert ('Hola, Soy ' + this.nombre);
};
    
Elemento.prototype.ponerse = function(x,y) {
    this.insercion = game.add.sprite(x, y , this.nombre);
    /*cambiamos el punto de adhesion de la imagen */

    this.insercion.anchor.setTo(0.5,0.5);
    
    this.toolTip = new Phasetips(game, {
                                targetObject: this.insercion,
                                context: this.textToolTip,
                                strokeColor: 0xff0000,
                                fontStroke: "#f45212",
                                fontFill: "#f8ce18"
                              });
    
};

function preload() {
    
    game.load.image('logo', 'sprites/Logo.png');
    
    /*Definicion objetos*/  

    logo = new Elemento('logo', 'sprites/Logo.png');
    mesaFormal = new Elemento('mesaFormal', 'sprites/mesaFormal.png');
    mesaInformal = new Elemento('mesaInformal', 'sprites/mesaInformal.png');
    platoA = new Elemento('platoA', 'sprites/PlatoA.png');
    copaVino = new Elemento('copaVino','sprites/copaVino.png');
   
    /*||||||||||||||||||||*/
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
    
    /*Titulo*/
    game.add.text(130, 20 , "CATERING & EVENTOS",
                    {
                        font: "110px Arial",
                        fill: "#100ad6",
                        align: "center" 
                    }
                );

    

    
    
    cursors = game.input.keyboard.createCursorKeys();

    
    /*Se añanden las mesas*/
    mesaInformal.ponerse(0, 800);
    mesaFormal.ponerse(1500, 800);
    
    /*Se personalizan los objetos*/
    platoA.textToolTip = "Plato grande";
    copaVino.textToolTip = "Copa de Vino Tinto";
    
    copaVino.ponerse(1500, 700  );    
    platoA.ponerse(1500,900);
    

    
    
    /*Texto fijo a la Camara */
    var info = game.add.text(0, 0, "Conozca la organización de las mesas", 
                            {
                            font: "32px Arial",
                            fill: "#ffffff",
                            align: "center" 
                            }
                         );
    info.fixedToCamera = true;
    info.cameraOffset.setTo(450, 600);
    /*|||||||||||||||||||||*/
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