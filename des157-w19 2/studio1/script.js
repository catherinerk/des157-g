"use strict";
 console.log('reading js');
/*capture the submit event with an event listener for onclick and a callback function of processForm
 */
//document.querySelector('#s').addEventListener('click', processForm);
var response;
document.querySelector('form').addEventListener('submit', processForm);
document.querySelector('#reset').addEventListener('click', resetForm);

function processForm(evt) {

    var university = document.querySelector('#university').value;

    var adj1 = document.querySelector('#adj1').value;

    var num = document.querySelector('#num').value;

    var verb1 = document.querySelector('#verb1').value;

    var degree = document.querySelector('#degree').value;

    var adj2 = document.querySelector('#adj2').value;

  //how to extract the animal
    //var animal = document.querySelector('.animal').value;
    var cat = document.querySelector("#cat");
    var dog = document.querySelector("#dog");
    var unicorn = document.querySelector("#unicorn");


  //add events for the radio buttons
  email.addEventListener("click", catSelected);
  phone.addEventListener("click", dogSelected);
  mail.addEventListener("click", unicornSelected);

  function catSelected() {
    response = "cat";
  }

  function dogSelected() {
    response = "dog";
  }

  function unicornSelected() {
    response = "unicorn";
  }

    var verb2 = document.querySelector('#verb2').value;


  // caputre myMsg
    var myMsg = document.querySelector("#myMsg");
    var msgSection = document.querySelector("#msgSection");

    myMsg.innerHTML = 'You are finally graduating from' + university + ', the most ' + adj1 + ' university, after being there for ' + num + 'years. You have been ' + verb1 + 'for your major in ' + degree + '. You should adopt a '+ adj2 + response + ' that will '+ verb2 +'you forever.';
    evt.preventDefault();
}



function resetForm() {
  var msg=document.querySelector('#msg');
}
