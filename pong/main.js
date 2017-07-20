var circleSize = 20, speedx = 5, speedy = 5, x, y, isAlive = true;
function setup() {
    createCanvas(640, 480);
	initializeBall();
}

function draw() {
	background(0);
	if (isAlive){
		rect(0, mouseY-40, 10, 80);
		noStroke();
		ellipse(x, y, circleSize, circleSize);
		if (x <=0){
			if (abs(y-mouseY)<=40) 
				speedx*=-1;
			else
				isAlive = false;
		}
		if (x >= width){
			speedx*=-1;
		} 
		if (y >= height || y <= 0){
			speedy*=-1;
		}
		x+=speedx;
		y+=speedy;
	}
	else {
		textSize(64);
		fill(255);
		textAlign(CENTER, CENTER);
		text('Game Over', width/2, height/2);
		textSize(32);
		text('Press enter to play again', width/2, height/2+50)
	}
}

function keyPressed(){
	if (keyCode == ENTER){
		isAlive = true;
		initializeBall();
		speedx = 5;
		speedy = 5;
	}
}

function initializeBall(){
	x = Math.floor(random(0, width));
	y = Math.floor(random(0, height));
}
