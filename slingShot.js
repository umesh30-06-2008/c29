
class SlingShot{
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            lenght: 20  
        }
        this. pointB =  pointB
        this.Sling = Constraint,(options);
        World.add(world, this.Sling);
      }

      fly(){
           this.sling.bodyA = null;
      }

      display(){
         if(this.Sling.bodyA){
             var  pointA = this.sling.bodyA.position;
             var  pointB = this. pointB;
      
        strokeWeight(4);
        fill("red")
        line(pointA.x, pointA.y, pointB,x, pointB.y);
          }  
    }
}
