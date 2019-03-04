"use strict";
 console.log('reading js-gd');

var responseAnimal;
var animalButtons = document.querySelectorAll('#animal input[type="radio"]');
document.querySelector('form').addEventListener('submit', processForm);
document.querySelector('#msgSection').addEventListener('click', resetForm);

for(var i=0; i<animalButtons.length; i++){
  animalButtons[i].addEventListener('click', whichAnimal);
}

function whichAnimal(){
  responseAnimal = this.getAttribute('value');
  console.log('response:' + responseAnimal);
}

function processForm(evt) {


    var university = document.querySelector('#university').value;

    var adj1 = document.querySelector('#adj1').value;

    var num = document.querySelector('#num').value;

    var verb1 = document.querySelector('#verb1').value;

    var degree = document.querySelector('#degree').value;

    var adj2 = document.querySelector('#adj2').value;

    var verb2 = document.querySelector('#verb2').value;



   var myMsg = document.querySelector("#myMsg");
   var msgSection = document.querySelector("#msgSection");

   msgSection.className='show';



   document.querySelector('#myMsg').innerHTML = 'You are finally graduating from ' + university + ', the most ' + adj1 + ' university, after being there for ' + num + ' years. You have been ' + verb1 + ' for your major in ' + degree + '. You should adopt a '+ adj2 + ' ' + responseAnimal + ' that will '+ verb2 +' you forever.';

   evt.preventDefault();

}


function resetForm() {
  myMsg.style.display = 'none';
}
