class Poly{
    constructor(x, y, width, height){
      var options = {
        isStatic : false
      }
      
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
       this.height = height;
       World.add(world, this.body);
       this.Image = loadImage("polygon.png");
      }
  
      display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("brown");
        image(this.Image,pos.x, pos.y, this.width, this.height);
        
      }
  
  }