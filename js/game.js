
var game = new Phaser.Game(1500,700, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update });





var platoA;
var tween = null;
var elementos = [];

function Elemento(nombre,ruta) {
    this.x = 0;
    this.y = 0;
    this.nombre = nombre;
    this.insercion = null ;
    this.textToolTip = "Undefined";
    this.toolTip =null ;
    this.alpha = false;
    this.info = null ;
    this.varInfo = null ;
    game.load.image(nombre, ruta);
}



Elemento.prototype.diHola = function() {
    alert ('Hola, Soy ' + this.nombre );
};

Elemento.prototype.onClick = function() {  
  
    
    if(this.varInfo == null ){
        this.varInfo =  game.add.sprite(this.x, this.y, this.info);
        this.varInfo.anchor.setTo(0.5,0.5);
        
        for(var i = 0 ; i < elementos.length  ; i++){
            if(this.nombre != elementos[i].nombre && elementos[i].varInfo != null){
               elementos[i].varInfo.visible = false; 
            }
        }
    }else{
        for(var i = 0 ; i < elementos.length  ; i++){
            if(this.nombre != elementos[i].nombre && elementos[i].varInfo != null){
               elementos[i].varInfo.visible = false; 
            }else{
                this.varInfo.visible =! this.varInfo.visible;

            }            
        }
    }
    
    
    
}

    
Elemento.prototype.ponerse = function(x,y) {
 
    //this.insercion = game.add.sprite(x, y , this.nombre);
    
    this.x = x;
    this.y = y;
    this.insercion = game.add.button(this.x,this.y,this.nombre, this.onClick, this, 2, 1, 0);
    this.insercion.input.useHandCursor = true;
    /*cambiamos el punto de adhesion de la imagen */

    this.insercion.anchor.setTo(0.5,0.5);
    
    this.toolTip = new Phasetips(game, {
                                targetObject: this.insercion,
                                context: this.textToolTip,
                                strokeColor: 0xff0000,
                                fontStroke: "#f45212",
                                fontFill: "#f8ce18"
                              });
    if(this.alpha){
        this.insercion.alpha = 0.5 ;
    }  
    
    
    
    
    
};




function preload() {
    
    game.load.image('logo', 'sprites/Logo.png');

    
    /*Definicion objetos*/  
    elementos[0] = new Elemento('copaVino','sprites/copaVino.png');
    logo = new Elemento('logo', 'sprites/Logo.png');
    elementos[1] = new Elemento('mesaFormal', 'sprites/mesaFormal.png');
    mesaInformal = new Elemento('mesaInformal', 'sprites/mesaInformal.png');
    platoA = new Elemento('platoA', 'sprites/PlatoA.png');
    //copaVino = new Elemento('copaVino','sprites/copaVino.png');
    
    /*Definicion info de los objetos */
  
    game.load.image('infoVino', 'sprites/infoCopaVino.png');
    game.load.image('mesaInfo','sprites/mesaInfo.jpg');
    
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
    
    elementos[1].info = 'mesaInfo';
    elementos[1].ponerse(1500, 800);
    platoA.ponerse(1500,900);
    /*Se personalizan los objetos*/
    platoA.textToolTip = "Plato grande";
    elementos[0].textToolTip = "Copa de Vino Tinto";
    elementos[0].alpha = true ;
    elementos[0].info ='infoVino' ;
    
    //copaVino.varInfo.visible  = false;
    elementos[0].ponerse(1500, 700 ); 
    
    
    /*Se ponen los objetos como fueron persoalizados*/
       
    
    

    
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

    /*Controles*/
    /*Control Camara*/
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
    /*Control arrastre dispositivo movil*/
    
    /*||||||||||||||||||||||||*/
}


