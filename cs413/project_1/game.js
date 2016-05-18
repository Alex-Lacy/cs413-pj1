
// Creates the standard setup, including setting the gameport and creating the renderer
var gameport = document.getElementById("gameport"); 
var renderer = PIXI.autoDetectRenderer(1800, 600, {backgroundColor: 0x3344ee});
gameport.appendChild(renderer.view);

var stage = new PIXI.Container();


// Creates the winning screen and hides it
var texture2 = PIXI.Texture.fromImage("youwin.png");
var winscreen = new PIXI.Sprite(texture2);
stage.addChild(winscreen);
winscreen.renderable = false; 

winscreen.position.x = 900;
winscreen.position.y = 300;
winscreen.anchor.x = .5;
winscreen.anchor.y = .5;


// Imports the texture and sets it to all of the targets
var texture = PIXI.Texture.fromImage("target.png");
var t1 = new PIXI.Sprite(texture);
var t2 = new PIXI.Sprite(texture);
var t3 = new PIXI.Sprite(texture);
var t4 = new PIXI.Sprite(texture);
var t5 = new PIXI.Sprite(texture);


var numdown = 0; // A counter for how many targets have been clicked



//Adds a container for all the targets
var targets = new PIXI.Container();
stage.addChild(targets);


//Creates each individual target
// Adds the first target
targets.addChild(t1);
t1.position.x = 200;
t1.position.y = 250;
t1.anchor.x = 0.8;
t1.anchor.y = 0.7;
t1.interactive = true;

t1.on('mousedown', clear_sprite.bind(null, t1));


// Adds the second target
targets.addChild(t2);
t2.position.x = 1050;
t2.position.y = 300;
t2.anchor.x = 0.5;
t2.anchor.y = 0.5;
t2.interactive = true;

t2.on('mousedown', clear_sprite.bind(null, t2));


// Adds the third target
targets.addChild(t3);
t3.position.x = 500;
t3.position.y = 450;
t3.anchor.x = 0.9;
t3.anchor.y = 0.9;
t3.interactive = true;

t3.on('mousedown', clear_sprite.bind(null, t3));


// Adds the fourth target
targets.addChild(t4);
t4.position.x = 300;
t4.position.y = 400;
t4.anchor.x = 0.9;
t4.anchor.y = 0.9;
t4.interactive = true;

t4.on('mousedown', clear_sprite.bind(null, t4));


// Adds the fifth target
targets.addChild(t5);
t5.position.x = 900;
t5.position.y = 300;
t5.anchor.x = 0.5;
t5.anchor.y = 0.5;
t5.interactive = true;

t5.on('mousedown', clear_sprite.bind(null, t5));



// Initializes a boolean that says if the player has won yet
var iswinner = false;

// A boolean that stermines when to start the timer
var start_toggle = true;

// Initializes the the time of start so that its in the global scope
var start_time = 0;	


// This function changes any sprite to no longer be renderable
function clear_sprite(sp_name){

	//sp_name.renderable = false;
	targets.removeChild(sp_name)

	// Increments targets succesfully clicked
	numdown += 1; 

	// If it was the first target clicked, it starts the timer
	if(start_toggle == true){
		var current = new Date();
		start_time = current.getTime()
	}
	start_toggle = false;
}


// Saves a state change for whether targets are moving right or left, up or down
var togglet1x = 1; 
var togglet1y = 1;
var togglet2x = 1;
var togglet2y = 1;
var togglet3x = 1;
var togglet3y = 1;
var togglet4x = 1;
var togglet4y = 1;
var togglet5x = 1;
var togglet5y = 1;




// The animation loop/function
function animate() {
	requestAnimationFrame(animate);

	// Creates the movement pattern for the first target
	// t1 x movement
	if(togglet1x == 1){
		
		t1.position.x += 10;

		if(t1.position.x == 1700){
			togglet1x = 0;
		}
	}

	else{
		t1.position.x -= 100;
		if(t1.position.x == 100){
			togglet1x = 1;
		}
	}

	// t1 y movement 
	if(togglet1y == 1){
		
		t1.position.y += 20;

		if(t1.position.y == 550){
			togglet1y = 0;
		}
	}

	else{
		t1.position.y -= 10;
		if(t1.position.y == 50){
			togglet1y = 1;
		}
	}

	t1.rotation += .05;



	// Creates the movement patterns for the second target
	// Adds x movement
	if(togglet2x == 1){
		
		t2.position.x += 100;

		if(t2.position.x == 1750){
			togglet2x = 0;
		}
	}

	else{
		t2.position.x -= 10;
		if(t2.position.x == 50){
			togglet2x = 1;
		}
	}

	// t2 y movement 

	if(togglet2y == 1){
		
		t2.position.y += 50;

		if(t2.position.y == 550){
			togglet2y = 0;
		}
	}

	else{
		t2.position.y -= 10;
		if(t2.position.y == 50){
			togglet2y = 1;
		}
	}
	
	//t2.rotation += 1.7


	// Creates the movement patterns for the third target
	// Adds x movement
	if(togglet3x == 1){
		
		t3.position.x += 10;

		if(t3.position.x == 1700){
			togglet3x = 0;
		}
	}

	else{
		t3.position.x -= 20;
		if(t3.position.x == 100){
			togglet3x = 1;
		}
	}

	// t3 y movement 

	if(togglet3y == 1){
		
		t3.position.y += 25;

		if(t3.position.y == 500){
			togglet3y = 0;
		}
	}

	else{
		t3.position.y -= 10;
		if(t3.position.y == 100){
			togglet3y = 1;
		}
	}

	t3.rotation += .14;




	// Creates the movement patterns for the fourth target
	// Adds x movement
	
	if(togglet4x == 1){
		
		t4.position.x += 5;

		if(t4.position.x == 1700){
			togglet4x = 0;
		}
	}

	else{
		t4.position.x -= 5;
		if(t4.position.x == 100){
			togglet4x = 1;
		}
	}

	// t4 y movement 

	if(togglet4y == 1){
		
		t4.position.y += 5;

		if(t4.position.y == 500){
			togglet4y = 0;
		}
	}

	else{
		t4.position.y -= 5;
		if(t4.position.y == 100){
			togglet4y = 1;
		}
	}

	t4.rotation += .2;


	


	// Adds the victory condition, and causes the victory text to display
	if(numdown == 5){
		if(iswinner == false){
			iswinner = true;
			winner();
		}

	}

	renderer.render(stage);

}


function winner(){

		winscreen.renderable = true;
		var end = new Date();
		var end_time = end.getTime();
		var total_time = end_time - start_time;	
		window.alert("It took you " + total_time/1000 + " seconds to destroy the targets");
	}




animate();

