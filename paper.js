class paper {
    constructor(x, y, r) {
      var options = {
          isStatic : false,
          restitution: 0.6,
          friction: 0.5,
          density: 1.2
      }
      this.r = r;
      this.x = x;
      this.y = y;
      this.body = Bodies.circle(x, y,this.r/2,options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push ();
      translate(pos.x,pos.y);
      rotate(this.body.angle);
      ellipseMode(RADIUS);
      fill("lightblue");
      ellipse(0, 0, this.r, this.r);
      pop();
    }
  };
  