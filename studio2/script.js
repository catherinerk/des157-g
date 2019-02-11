console.log('reading js');
'use strict';

var bp = document.querySelector('#bp');
var overlay = document.querySelector('#overlay');
var close = document.querySelector('#close');
var ipad = document.querySelector('#ipad');
var overlay2 = document.querySelector('#overlay2');
var close2 = document.querySelector('#close2');
var headphones = document.querySelector('#headphones');
var overlay3 = document.querySelector('#overlay3');
var close3 = document.querySelector('#close3');

document.getElementById('bp').addEventListener('click',function(){
 overlay.style.display='block';
});


document.getElementById('close').addEventListener('click',function(){
  overlay.style.display='none';
});

document.getElementById('ipad').addEventListener('click',function(){
 overlay2.style.display='block';
});

  document.getElementById('close2').addEventListener('click',function(){
    overlay2.style.display='none';
});

document.getElementById('headphones').addEventListener('click',function(){
 overlay3.style.display='block';
});

  document.getElementById('close3').addEventListener('click',function(){
    overlay3.style.display='none';
});

document.getElementById('chapstick').addEventListener('click',function(){
 overlay4.style.display='block';
});

  document.getElementById('close4').addEventListener('click',function(){
    overlay4.style.display='none';
});
