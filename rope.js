class rope {
	constructor(body1, body2, offsetX) {
		var options = {
			bodyA: body1,
			bodyB: body2
		}

		this.rope = Constraint.create(options)
		World.add(world, this.rope)

		this.offsetX = offsetX
	}

	display() {
		var pointA = this.rope.bodyA.position;
		var pointB = this.rope.bodyB.position;

		strokeWeight(2);
		stroke("white");
		line(pointA.x, pointA.y, pointB.x + this.offsetX, pointB.y)
		// ellipse(body2.position.x,body2.position.y,10);		
		// ellipse(body1.position.x,body1.position.y,20);

	}

}