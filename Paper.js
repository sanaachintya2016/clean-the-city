class Paper{
    constructor() {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(100, 250, 15, options);
        this.width = 30;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill("red")
        ellipse( 0, 0, this.width);
        pop();
      }

 
}