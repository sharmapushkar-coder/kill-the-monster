class Box{
    constructor(x,y,w,h){
        var options={
            isStatic: false
        }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = w;
      this.height = h;
      World.add(world, this.body);

    }
    display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("red");
    rect(pos.x, pos.y, this.width, this.height);
   }
  };