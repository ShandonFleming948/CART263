class GlowingCircle {
  constructor(x, y){
    //the properties of the glowingCircles
    this.x = x;
    this.y = y;
    this.radius = 21;
    this.angle = 0;
    this.backgroundColor =
      {
      h: 284,
      s: 100,
      b: 0
      };
      this.angleSpeed = random(0.02, 0.05);
      this.active = true;
  }
  display(){
    //display the glowingCircles
    colorMode(HSB);
    fill(this.backgroundColor.h, this.backgroundColor.s, this.backgroundColor.b);
    ellipse(this.x, this.y, this.radius);
    //make the glowing circles pulse from dark to light
    this.backgroundColor.b = map(sin(this.angle), -1, 1, 20, 100);
    this.angle += this.angleSpeed;
  }
}
