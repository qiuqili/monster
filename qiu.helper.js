

console.log("hi from qiuhelper");

var qiu = function(qiu) {
qiu.addSparkles=function(count, x, y, speed) {
		//create the specified number of sparkles
		for (var i = 0; i < count; i++) {
			// clone the original sparkle, so we don't need to set shared properties:
			var sparkle = new zim.Circle(30,"white");

			// set display properties:
			sparkle.x = x;
			sparkle.y = y;
			//sparkle.rotation = Math.random()*360;
			sparkle.alpha = Math.random() * 0.5 + 0.5;
			sparkle.scaleX = sparkle.scaleY = Math.random() + 0.3;

			// set up velocities:
			var a = Math.PI * 2 * Math.random();
			var v = (Math.random() - 0.5) * 30 * speed;
			sparkle.vX = Math.cos(a) * v;
			sparkle.vY = Math.sin(a) * v;
			sparkle.vS = (Math.random() - 0.5) * 0.2; // scale
			sparkle.vA = -Math.random() * 0.05 - 0.01; // alpha
			// add to the display list

			stage.addChild(sparkle);
		}
	}

	qiu.Guy=function(x,y){
		var data = {
			animations: {fly: [0, 2, "fly", 0.1] }, // identify the animation frames here
			images: ["monster.png"],
			frames: {width: 200, height: 200, regX: 158, regY: 113,count:3}
		};
	

var guy= new createjs.Sprite(new createjs.SpriteSheet(data),"fly");
	guy.x = x;
	guy.y =y;
	guy.scaleX = .8;
	guy.scaleY = .8;		
			
	stage.on("stagemousemove",move);
	function move(){
		var difX = stage.mouseX - guy.x;
		var difY = stage.mouseY - guy.y;
		guy.x += difX / 50; //making these numbers (100) smaller makes it go faster
		guy.y += difY / 50;
	}  

 stage.addChild(guy);		
  
}

	
	return qiu;
	
}(qiu || {});







