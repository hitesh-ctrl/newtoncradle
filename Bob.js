class Bob{
    constructor(x, y, radius) {
        var options = {
           
            restitution :1,
            friction :0.0,
            density:0.8
            //isStatic:true
           
        }
        this.radius=radius
        this.body = Bodies.circle(x, y, this.radius/2, options);
        
        World.add(world, this.body);
      }
    
      
      display(){
       
          var angle = this.body.angle;
          var pos= this.body.position;
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          ellipseMode(RADIUS);
          ellipse(0,0,this.radius, this.radius);
          pop();
      
      
      
      }
}