class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.08,
            length: 10
        }
        this.pointB = pointB
        this.Slingshot = Constraint.create(options);
        World.add(world, this.Slingshot);
    }

    fly(){
        this.Slingshot.bodyA = null;
    }

    attach(body){
        this.Slingshot.bodyA = body;
    }
    
    display(){
        if(this.Slingshot.bodyA){
            var pointA = this.Slingshot.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}
