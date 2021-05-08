class Roof{

    constructor(){
        var roof_options={
            isStatic : true
          }
        
          this.ground = Bodies.rectangle(400,250,230,20,ground_options)
          World.add(world,this.ground);
    }
    display(){
        noStroke();
        fill(188,67,67);
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,230,20);
    }
}