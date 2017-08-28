
class Shape {
  constructor (color, ctx) {
    this.color = color;
    this.ctx = ctx;
  }
  draw () {
     console.log ("draw shape");
  }
}

class Polygon extends Shape {  
  constructor (center, numSides, color, ctx) {
    super (color, ctx); 
    this.center = center;
    this.numSides = numSides; 
  }
  draw () {
    var R = 25;
    var X = this.center.x;
    var Y = this.center.y;
    this.ctx.fillStyle = this.color;
    this.ctx.beginPath();
    for (var i = 0; i < this.numSides; i++) {
        var rad = (2 * Math.PI * i / this.numSides);
        let x = X + R * Math.cos(rad);
        let y = Y + R * Math.sin(rad);
        this.ctx.lineTo(x, y);
    }
    this.ctx.closePath();
    this.ctx.fill();
  }
} 

class Circle extends Shape {  
  constructor (center, radius, color, ctx) {
    super (color, ctx); 
    this.center = center;
    this.radius = radius; 
  }
  draw () {
      this.ctx.beginPath();
      this.ctx.arc(this.center.x, this.center.y, this.radius, 0, 2 * Math.PI);
      this.ctx.fill();
      this.ctx.fillStyle = this.color;
  }
}

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


let elements = [];
for (let i = 1; i <= 5; i++) {
  elements.push (new Circle ({x: 50*i, y: 10*i}, 10*i, '#990000', ctx)) ; 
  elements.push (new Polygon ({x: 50*i, y: 200}, 4 + i, '#E3004F', ctx)) ; 
  
}
for (let shape of elements) {
  shape.draw();
}