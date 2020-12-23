class Block {
  constructor(x,y,width,height) {
    var options = {
       // isStatic: true
       'restitution':0.8,
       'friction':1.0,
       'density':1.0
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    console.log(this.body.speed)
  
  }
  display(){
    if(this.body.speed>0){
      World.remove(world,this.body)
    }
    var pos =this.body.position;
    rectMode(CENTER);
    strokeWeight(2)
    stroke("hotpink")
    fill("aquamarine");
    rect(pos.x, pos.y, this.width, this.height);
  }
};