class Super{
    constructor(x,y,w,h){
        var options={
            isStatic: true
        }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = w;
      this.height = h;
      this.image=loadImage("sup.png");
      World.add(world, this.body);

    }
    display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("yellow");
    image(this.image,pos.x, pos.y, this.width, this.height);
   }
  };