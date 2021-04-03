class Polygon{
    constructor(x, y, sides, radius) {
        var options = {
            'restitution':0.8,
            //'density':1.0,
            //'friction':1.0
        }
        this.body = Bodies.polygon(x, y, sides, radius, [options])
        this.sides = sides;
        this.radius = radius*2;
        this.color = color(255,255,255)
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        fill(this.color);
        ellipseMode(CENTER);
        ellipse(this.body.position.x, this.body.position.y, this.sides, this.radius);
        pop();
      }
}