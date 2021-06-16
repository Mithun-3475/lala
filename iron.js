class Iron{
	constructor(x,y,width,height){
	 var options = {
		restitution:0.1,
		friction:7,
		density:12
	 }
	
	
		this.x=x;
		this.y=y;
		this.body=Bodies.rectangle(x,y,width,height,options)
		World.add(world, this.body);
}
	
	display()
	{
			var ironpos=this.body.position;		
			push()
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("red");
			pop()
	}
}