class paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.7,
			friction:0.5,
			density:0.2
		}
		this.x=x;
		this.y=y;
		this.r=100;
		this.body=Bodies.circle(this.x, this.y, this.r, options);
		this.image = loadImage("paper.png");
		World.add(world, this.body);

	}
	display()
	{
			var paperpos=this.body.position;		
			push();
			translate(paperpos.x, paperpos.y);
			imageMode(CENTER);
        	image(this.image, 10, 10);
			pop();
			
	}

}