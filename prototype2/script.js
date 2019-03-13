
'use strict';

// send a message to the console
console.log('reading js');

var capture;

//message that tells user to view in mobile view
// if(window.screen.width > 1080 px) {
//   alert("View mobile by clicking inspect iphone 6,7,8 plus");
// }
let img;

function setup() {
  createCanvas(1080, 1440);
  capture = createCapture(VIDEO);

   capture.size(360, 360);
   img = loadImage("mask.png");


   capture.parent('myProfile');
    capture.hide();
}

function draw() {


  image(capture, 0, 360, 360, 360);
  filter('INVERT');

  image(capture, 720, 360, 360, 360);
  filter('threshold');


  image(capture, 360, 360, 360, 360);
  filter('GRAY');

   image(capture, 0, 720, 360, 360);
   filter('BLUR',3);

   image(capture, 360, 720, 360, 360);
    filter('POSTERIZE', 6);

  image(capture, 720, 720, 360, 360);
   filter('POSTERIZE', 4);


  image(capture, 0, 1080, 360, 360);
    filter('BLUR',2);

  image(capture, 360, 1080, 360, 360);
  filter('DILATE');

  image(capture, 720, 1080, 360, 360);
  filter('OPAQUE');

  image(capture, 20, 0, 200, 200);

  // PImage img = loadImage("mask.png");
  image(img, 20, 0);


}
