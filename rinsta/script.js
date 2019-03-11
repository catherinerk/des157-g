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

function setup() {
  createCanvas(1080, 1080);
  capture = createCapture(VIDEO);

   capture.size(360, 360);

  //capture.hide();
}

function draw() {
  background(255);

  image(capture, 0, 0, 360, 360);
  filter('INVERT');

  image(capture, 720, 0, 360, 360);
  filter('threshold');


  image(capture, 360, 0, 360, 360);
  filter('GRAY');

   image(capture, 0, 360, 360, 360);
   filter('BLUR',3);

   image(capture, 360, 360, 360, 360);
    filter('POSTERIZE', 6);

  image(capture, 720, 360, 360, 360);
   filter('POSTERIZE', 4);


  image(capture, 0, 720, 360, 360);
    filter('BLUR',2);

  image(capture, 360, 720, 360, 360);
  filter('DILATE');

  image(capture, 720, 720, 360, 360);
  filter('OPAQUE');


   // hint: add more images here, changing the parameters and filter)

}
