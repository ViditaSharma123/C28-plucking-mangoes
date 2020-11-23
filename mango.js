class Mango {
    constructor(x, y,diameter) {
      var options = {
        isStatic:true,
        'density':1.5,
        'friction': 1.5,
        'restitution':0.75
      };
      this.body = Bodies.circle(x, y,diameter/2, options);
      this.radius = diameter;
      this.image=loadImage("mango.png")
      World.add(world, this.body);
    };
    display(){
      push()
      translate(this.body.position.x,this.body.position.y)
      ellipseMode(RADIUS);
      rotate(this.body.angle);
      imageMode(CENTER)
      image(this.image,0,0,this.radius,this.radius)

      pop()
    };
  };