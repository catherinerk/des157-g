console.log('reading.js');

// function setup(){
//   //size is createCanvas in p5
//   //create a variable to reference to createCanvas
//   var myCanvas = createCanvas(800, 250);
//   myCanvas.parent('mySketch');
// }

// function draw(){
//   triangle(mouseX-50, mouseY+25, mouseX + 50, mouseY, mouseX +25 , mouseY +100);

// }

var i;
var c;

function setup() {
  //size is createCanvas in p5
  //create a variable to reference to createCanvas
  var myCanvas = createCanvas(800, 250);
  myCanvas.parent('mySketch');

  i=0;
  c = ['#ffaa97','#becbd4', '#fdcaaa','#ff7f78', '#ffffff'];
}

function draw() {
  // stroke(255);
  // ellipse(mouseX, mouseY, 100, 100);
  // noFill();

 // for(var x = 0; x<= width; x +=50){
 	stroke('#ffffff');


  	// for(var i=0; i<c.length; i++){

    if (i<c.length-1){
        i++;
      } else {
        i=0;
      }

  		fill(c[i]);
      ellipse(mouseX, mouseY, 100, 100);

  	// }
// }

}
