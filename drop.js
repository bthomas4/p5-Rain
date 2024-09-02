function Drop(){
  this.x = random(width)
  this.y = random(-50, -windowHeight-100)
  this.z = random(0,20)
  this.yspeed = map(this.z, 0, 20, 5,10)
  this.len = map(this.z, 0, 20, 1, 20)

  this.fall = function() {
    this.y += this.yspeed;
    var grav = map(this.z, 0, 20, 0, 0.2)
    this.yspeed += grav;
    
    if (this.y > height) {
      this.y = random(-10, -200)
      this.yspeed = map(this.z, 0, 20, 5, 10)
    }
  }
  
  this.show = function() {
    var thick = map(this.z, 0, 20, 1, 3);
    strokeWeight(thick);
    line(this.x, this.y, this.x, this.y+this.len)
  }
}