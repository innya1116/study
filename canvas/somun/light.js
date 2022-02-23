class Particle {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.radius = Math.random() + 0.5;
		this.speed = Math.random()*3 + 0.5;
	}

	draw() {
		cm.context.beginPath();
		cm.context.arc(this.x, this.y, this.radius, 0, Math.PI*2);
		cm.context.fill();
	}
}

class Line {

}

class Light {

}
