
var game = new Phaser.Game(1500,700, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update });

var title;
var elementos = [];

function Elemento(nombre,ruta) {
    this.x = 0;
    this.y = 0;
    this.nombre = nombre;
    this.insercion = null ;
    this.textToolTip = "Undefined";
    this.toolTip =null ;
    this.alpha = 1;
    this.alphaVarInfo = 1;
    this.info = null ;
    this.textInfo = "undefined";
    this.varTextInfo = null;
    this.varInfo = null ;
    game.load.image(nombre, ruta);
}

Elemento.prototype.onClick = function() {  
  
    
    if(this.varInfo == null ){
        this.varInfo =  game.add.sprite(100, 100, this.info);
        this.varTextInfo = game.add.sprite(500,100,this.textInfo);
        this.varInfo.animations.add('rotate',[0,1,2,3,4,5,6,7],5,true);
        this.varInfo.animations.play('rotate');
        this.varInfo.fixedToCamera = true ;
        this.varTextInfo.fixedToCamera = true;
        
        for(var i = 0 ; i < elementos.length  ; i++){
            if(this.nombre != elementos[i].nombre && elementos[i].varInfo != null){
                elementos[i].varInfo.visible = false; 
                elementos[i].varTextInfo.visible = false; 
            }
        }
    }else{
        for(var i = 0 ; i < elementos.length  ; i++){
            if(this.nombre != elementos[i].nombre && elementos[i].varInfo != null){
               elementos[i].varInfo.visible = false;
                elementos[i].varTextInfo.visible = false; 
            }
            if(this.nombre != elementos[i].nombre){
                this.varInfo.visible = true;
                this.varTextInfo.visible = true; 

            }            
        }
    }
    if(this.alphaVarInfo != 1){
        this.varInfo.alpha = this.alphaVarInfo;
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
    if(this.alpha != 1){
        this.insercion.alpha = 0.5 ;
    }      
};

function preload() {
    /*Imagenes sin acciones*/
        /*Imagenes generales*/
    game.load.image('logo', 'sprites/Logo.png');
    game.load.image('fondo', 'sprites/Fondo.jpg');
        /*Imagenes de Informacion*/
    game.load.spritesheet('infoVino', 'sprites/copaVInfo.png',352,594);
    game.load.spritesheet('mesaInfo','sprites/mesaInfoA.png',637,394);
    game.load.spritesheet('infoPlatoBase','sprites/infoPlatoBase.png',614,363);
    game.load.image('servilletaInfo', 'sprites/servilletaInfo.jpg');
        /*Texto de informacion*/
    game.load.image('textoMesaFormal', 'sprites/textoMesaFormal.png');
    game.load.image('textoCopaVinoT', 'sprites/textoCopaVinoT.png');
    game.load.image('textoCopaAgua', 'sprites/textoCopaAgua.png');
    game.load.image('textoCopaVinoB', 'sprites/textoCopaVinoB.png');
    
    /*Definicion objetos MESA FORMAL*/ 
    
    elementos[0] = new Elemento('mesaInformal', 'sprites/mesaInformal.png');
    elementos[1] = new Elemento('mesaFormal', 'sprites/mesaFormal.png');
    
    elementos[2] = new Elemento('copaVino','sprites/copaVino.png');
    elementos[3] = new Elemento('platoBase','sprites/platoBase.png');
    
    elementos[4] = new Elemento('platoA', 'sprites/PlatoA.png');
    
    elementos[5] = new Elemento('platoSopa', 'sprites/platoSopa.png');
    
    elementos[6] = new Elemento('copaAgua', 'sprites/copaAgua.png');
    
    elementos[7] = new Elemento('copaVinoB', 'sprites/copaVinoB.png');
    
    elementos[8] = new Elemento('cubiertosPostre', 'sprites/cubiertosPostre.png');
    
    elementos[9] = new Elemento('cucharaSopa', 'sprites/cucharaSopa.png');
    
    elementos[10] = new Elemento('tenedorPrincipal', 'sprites/tenedorPrincipal.png');
    
    elementos[11] = new Elemento('cuchilloPrincipal', 'sprites/cuchillo.png');
    
    elementos[12] = new Elemento('cucharitaCafe', 'sprites/cucharitaCafe.png');
    
    elementos[13] = new Elemento('tenedorPescado', 'sprites/tenedorPescado.png');
    
    elementos[14] = new Elemento('tenedorEnsalada', 'sprites/tenedorEnsalada.png');
    
    elementos[15] = new Elemento('platoPan', 'sprites/PlatoA.png');
    
    elementos[16] = new Elemento('palaMantequilla', 'sprites/palaMantequilla.png');
    
    elementos[17] = new Elemento('servilleta', 'sprites/servilleta.png');

    /*ELEMENTOS(Objetos) MESA INFORMAL*/
    
    elementos[18] = new Elemento('platoServicio', 'sprites/PlatoA.png');

    elementos[19] = new Elemento('servilleta', 'sprites/servilleta.png');
    
    elementos[20] = new Elemento('tenedorPrincipal', 'sprites/tenedorPrincipal.png');
    
    elementos[21] = new Elemento('cuchilloPrincipal', 'sprites/cuchillo.png');
    
    elementos[22] = new Elemento('cucharaPrincipal', 'sprites/cucharaSopa.png');
    
    elementos[23] = new Elemento('copaAgua', 'sprites/copaAgua.png');
    
    elementos[24] = new Elemento('copaVino','sprites/copaVino.png');
}
var cursors;
function create() {
        
    
    
    /*Limites del mundo */
    var world = game.add.sprite(-700, 0, 'fondo');
    world.inputEnabled = true;
    world.events.onInputDown.add(removeInfo, this);
    /*Titulo*/
    
    title = game.add.text(130, 20 , "CATERING & EVENTOS",
                    {
                        font: "bold 110px Arial",
                        fill: "#0D50FF",
                        align: "center",
                    }
                );
    title.stroke = '#0CB3E8';
    title.strokeThickness = 6;
    title.inputEnabled = true;
    title.events.onInputDown.add(openPage,this);
    title.input.useHandCursor = true;

    game.world.setBounds(-700, 0, 2900, 1200);    
    
    cursors = game.input.keyboard.createCursorKeys();

    /*Se pinta el fondo con el logo de la empresa*/
    for (var i = 0; i < 200; i++)
    {
        game.add.sprite(game.world.randomX, game.world.randomY, 'logo');
    } 

    /*Se añanden las mesas*/
    elementos[0].textToolTip = "Mesa Informal";
    elementos[0].ponerse(0, 800);
    
    elementos[1].textToolTip = "Mesa Formal";
    elementos[1].textInfo = "textoMesaFormal";
    elementos[1].info = 'mesaInfo';
    elementos[1].ponerse(1500, 800);

    /*Se personalizan los objetos MESA FORMAL*/

    elementos[2].textToolTip = "Copa de Vino Tinto";
    elementos[2].textInfo = "textoCopaVinoT";
    elementos[2].alpha = 0.5 ;
    elementos[2].alphaVarInfo = 0.7;
    elementos[2].info ='infoVino' ;
    elementos[2].ponerse(1685,740);
    
    elementos[11].textToolTip = " Cuchillo \n Principal";
    elementos[11].ponerse(1650,900); 
        
    
    elementos[3].textToolTip = " Plato \n Base";
    elementos[3].info ='infoPlatoBase';
    elementos[3].ponerse(1500,900);
    
    elementos[4].textToolTip = " Plato \n grande";
    elementos[4].ponerse(1500,900);
    
    elementos[5].textToolTip = "Plato para ensalada o sopa";
    elementos[5].ponerse(1500,900);
    
    elementos[6].textToolTip = "Copa Agua";
    elementos[6].textInfo = "textoCopaAgua";
    elementos[6].alpha = 0.5 ;
    elementos[6].alphaVarInfo = 0.5;
    elementos[6].info ='infoAgua' ;
    elementos[6].ponerse(1615,690);
    
    elementos[7].textToolTip = "Copa de Vino Blanco";
    elementos[7].textInfo = "textoCopaVinoB";
    elementos[7].alpha = 0.9 ;
    elementos[7].alphaVarInfo = 0.5;
    elementos[7].info ='infoVinoB' ;
    elementos[7].ponerse(1725,790);
    
    elementos[8].textToolTip = "Cubiertos para Postre";
    elementos[8].ponerse(1500,730);
    elementos[8].insercion.scale.setTo(0.7);
    
    elementos[9].textToolTip = "Cuchara para Sopa";
    elementos[9].ponerse(1750,900); 
    
    elementos[10].textToolTip = "Tenedor para Plato Principal";
    elementos[10].ponerse(1350,900); 
    
        
    elementos[12].textToolTip = "Cucharita para Café";
    elementos[12].ponerse(1700,930); 
    
    elementos[13].textToolTip = "Tenedor para Pescado";
    elementos[13].ponerse(1300,910); 
    
    elementos[14].textToolTip = "Tenedor para Ensalada";
    elementos[14].ponerse(1250,920); 
    
    elementos[15].textToolTip = "Plato para Pan";
    elementos[15].ponerse(1300,750); 
    elementos[15].insercion.scale.setTo(0.7);
    
    elementos[16].textToolTip = "Pala de Mantequilla";
    elementos[16].ponerse(1300,750); 
    elementos[16].insercion.angle = -45;
    
    elementos[17].textToolTip = "servilleta";
    elementos[17].info = "servilletaInfo";
    elementos[17].ponerse(1150,920); 
    
    /*Se personalizan los objetos MESA INFORMAL*/
    
    elementos[18].textToolTip = "Plato De servicio";
    elementos[18].ponerse(0, 900);
    
    elementos[19].textToolTip = "Servilleta";
    elementos[19].ponerse(0, 900);
    elementos[19].insercion.scale.setTo(0.6);
    elementos[19].insercion.angle = -10;
    
    elementos[20].textToolTip = "Tenedor Principal";
    elementos[20].ponerse(-100, 900);
    
    elementos[21].textToolTip = " Cuchillo\n Principal";
    elementos[21].ponerse(100, 900);
    
    elementos[22].textToolTip = "Cuchara Principal";
    elementos[22].ponerse(150, 900);
    
    elementos[23].textToolTip = "Copa Agua";
    elementos[23].ponerse(10, 750);
    
    elementos[24].textToolTip = "Copa Vino";
    elementos[24].ponerse(100, 780);
    
    
    
    
    
    
    
    

    
    
     /*Texto fijo a la Camara */
    var info = game.add.text(0, 0, "Conozca la organización de un puesto en una mesa", 
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
    /*Control arrastre dispositivo movil with stick*/
    
    /*||||||||||||||||||||||||*/

    
}


function removeInfo(){

    for(var i = 0 ; i < elementos.length  ; i++){
            if(elementos[i].varInfo != null){
                elementos[i].varInfo.visible = false;
                elementos[i].varTextInfo.visible = false; 
            }
        }
}

function openPage() {
    window.open('https://macorreag.github.io/Azur/','_blank');
};


