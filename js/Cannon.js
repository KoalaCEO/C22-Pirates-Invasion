class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;

    this.cannonBase = loadImage("assets/cannonBase.png")
    this.cannonTop = loadImage("assets/canon.png");
    
  }
  
  display() {

    push()
      imageMode(CENTER);
      image(this.cannonTop,this.x,this.y,this.width,this.height);
    pop()

    image(this.cannonBase,70,20,200,200);

    noFill();

}



}