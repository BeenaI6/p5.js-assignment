function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
}
	

function draw() { 
	if (mouseIsPressed) {
		frameRate(20);
	fill(int(random(256)), int(random(256)), int(random(256)));
	ellipse(mouseX, mouseY, 50, 50);
	} if (keyIsPressed) {
		background(int(random(256)), int(random(256)), int(random(256)));
	frameRate(20);
	fill(int(random(256)), int(random(256)), int(random(256)));
	ellipse(mouseX, mouseY, 50, 50);
	}
}
