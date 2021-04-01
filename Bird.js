class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
  }

  display() {
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    this.body.position.x = touches[[]];
    this.body.position.y = touches[[]];
    super.display();
  }
}
