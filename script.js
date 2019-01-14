console.log('reading.js');

function setup(){
  //size is createCanvas in p5
  //create a variable to reference to createCanvas
  var myCanvas = createCanvas(800, 250);
  myCanvas.parent('mySketch');
}

function draw(){
  triangle(mouseX-50, mouseY+25, mouseX + 50, mouseY, mouseX +25 , mouseY +100);

}

// function setup() {
//   //size is createCanvas in p5
//   //create a variable to reference to createCanvas
//   var myCanvas = createCanvas(800, 250);
//   myCanvas.parent('mySketch');
// }
//
// function draw() {
//   // stroke(255);
//   // ellipse(mouseX, mouseY, 100, 100);
//   // noFill();
//   // stroke(255);
//   triangle(mouseX - 50, mouseY + 25, mouseX + 50, mouseY, mouseX + 25, mouseY + 100);
//   var c = ['#ffffff','#becbd4', '#fdcaaa','#ff7f78'];
//   for[var i=0; i<4; i++
//
// }
