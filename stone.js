class Stone  {
    constructor(x, y,diameter) {
      var options = {
        
        'density':1.2,
        'friction': 1
      };
      this.body = Bodies.circle(x, y,diameter/2, options);
      this.radius = diameter
      this.image=loadImage("stone.png")
      World.add(world, this.body);
    };
    display(){
      push()
      translate(this.body.position.x,this.body.position.y)
 
      imageMode(CENTER)
      image(this.image,0,0,this.radius,this.radius)
      pop()
    };
  };