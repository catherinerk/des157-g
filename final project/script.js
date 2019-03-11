/* Captures the video camera and adds filters
   Run local sever to see in Firefox
*/

/* prompt 01: create 4 images that use the video capture and add a different filter to each one. You could use the filters: THRESHOLD, GRAY, OPAQUE, INVERT, POSTERIZE, BLUR, ERODE, DILATE or BLUR.

   hint: you do not need to create more captures, just more imagess

   hint change canvas size to be able to show all video captures in one canvas
   */

'use strict';

// send a message to the console
console.log('reading js');

var capture;
var img_xy = 200;

let photo, maskImage
function preload() {
  photo = loadImage(capture);
  maskImage = loadImage('mask.png');
}

function setup() {
  createCanvas(600, 600);
  capture = createCapture(VIDEO);
  capture.size(img_xy, img_xy);
  capture.mask(maskImage);
  image(photo, 0,0);
  // capture.hide();

}

function draw() {
  background(255);


  image(capture, 0, 0, 200, 200);
   filter('INVERT');


  image(capture, 200, 0, 200, 200);
    filter('GRAY');

   image(capture, 0, 200, 200, 200);
   filter('THRESHOLD');

   image(capture, 200, 200, 200, 200);
   filter('OPAQUE');

     image(capture, 200, 400, 200, 200);
   filter('POSTERIZE', 4);

     image(capture, 400, 200, 200, 200);
   filter('ERODE');

     image(capture, 400, 0, 200, 200);
   filter('BLUR',3);

      image(capture, 0, 400, 200, 200);
   filter('DILATE');

        image(capture, 400, 400, 200, 200);
   filter('POSTERIZE',6);

//capture.parent('f1');
   // hint: add more images here, changing the parameters and filter)

}
