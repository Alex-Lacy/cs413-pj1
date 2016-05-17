var gameport = document.getElementById("gameport"); 

var renderer = PIXI.autoDetectRenderer(1800, 600, {backgroundColor: 0x3344ee});
gameport.appendChild(renderer.view);

var stage = new PIXI.Container();

var texture = PIXI.Texture.fromImage("target.png");

var t1 = new PIXI.Sprite(texture);
var t2 = new PIXI.Sprite(texture);
var t3 = new PIXI.Sprite(texture);
var t4 = new PIXI.Sprite(texture);


//var target = new PIXI.Sprite(texture);
//Adds a container for all the targets
var targets = new PIXI.Container();

stage.addChild(targets);


//targets.addChild(t1);



//t1.anchor.x = 0.5;
//t1.anchor.y = 0.5;

//Creates each individual target
targets.addChild(t1);
t1.position.x = 200;
t1.position.y = 200;
t1.anchor.x = 0.5;
t1.anchor.y = 0.5;



function animate() {
	requestAnimationFrame(animate);
	t1.rotation += 0.5;
	renderer.render(stage);

}


animate();