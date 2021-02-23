function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
closeBtn.forEach((close) => close.addEventListener("click", closeForm));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

function closeForm() {
  modalbg.style.display = "none";
}

const inputFirst = document.querySelector('input[name=first]');
const inputLast = document.querySelector('input[name=last]');
const inputEmail = document.querySelector('input[name=email]');
const inputDate = document.querySelector('input[name=birthdate]');
const inputQuant = document.querySelector('input[name=quantity]');
const inputLocation = document.querySelector('input[name=location]');
const inputConditions = document.querySelector('input[name=conditions]');
// get all inputs


inputFirst.addEventListener('keyup', function(e) {
  // e is the short var reference for event object which will be passed to event handlers
  // new style -> inputFirst.addEventListener("keyup", event => {
  // The keyup event is fired when a key is released
  // The event object essentially has lot of interesting methods and properties that can be used in the event handlers.
 var resultFirst = document.getElementById("first-validation");
 // get message area
    var regFirst = /[a-zA-Z]{2,64}/;
    // check if letters with a minimum of 2 characters
    var value = e.target.value;
    // it retrieves value of whatever input it was called on
    if (value.match(regFirst)) {
    // specific to regExp, method searches a string for a match against a regular expression
      resultFirst.innerHTML = "";
      // Change the HTML content of a Id #resultFirst to empty element 
      resultFirst.style.display = "none";
    } else {
      resultFirst.style.display = "inline-block";
      resultFirst.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    }
});

inputLast.addEventListener('keyup', function(e) {
 var resultLast = document.getElementById("last-validation");
    var regLast = /[a-zA-Z]{2,64}/;
    var value = e.target.value;
    if (value.match(regLast)) {
      resultLast.innerHTML = "";
      resultLast.style.display = "none";
    } else {
      resultLast.style.display = "inline-block";
      resultLast.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    }
});

inputEmail.addEventListener('keyup', function(e) {
 var resultEmail = document.getElementById("email-validation");
    var regEmail = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    var value = e.target.value;
    if (value.match(regEmail)) {
      resultEmail.innerHTML = "";
      resultEmail.style.display = "none";
    } else {
      resultEmail.style.display = "inline-block";
      resultEmail.innerHTML = "Vous devez choisir une adresse électronique est valide.";
    }
});

inputDate.addEventListener('change', function(e) {
  var resultBirth = document.getElementById("date-validation");
  if (inputDate.value.length > 0) {
      resultBirth.innerHTML = "";
      resultBirth.style.display = "none";
     } else {
      resultBirth.style.display = "inline-block";
      resultBirth.innerHTML = "Vous devez entrer votre date de naissance.";
     }
 });

 inputQuant.addEventListener('change', function(e) {
  var resultQuant = document.getElementById("quant-validation");
  if (inputQuant.value.length > 0) {
    resultQuant.innerHTML = "";
    resultQuant.style.display = "none";
     } else {
      resultQuant.style.display = "inline-block";
      resultQuant.innerHTML = "Merci de compléter ce champ";
     }
 });

function countLocations(){
  // look at .location radio to find if one is checked or not
  var theLocation = document.getElementsByClassName("location"),
      i,
      count = 0;
  for (i = 0; i < theLocation.length; i++){
      if (theLocation[i].checked){
        //Input Checkbox checked Property
          count++;
      } 
  }
  return count;
  // have count value in the function 
};

document.getElementById("checkbox1").attributes["required"] = "";
// "required" not usable in html

document.querySelectorAll('.location').forEach(item => {
  // an other methode to check if one button has been cheched 
  item.addEventListener('change', e => {
    let resultLocation = document.getElementById("location-validation");
    if(e.target.checked){
      resultLocation.innerHTML = "";
      resultLocation.style.display = "none";
    }
  })
});


inputConditions.addEventListener('change', e => {
  // new model of writing (funtion?)
  let resultConditions = document.getElementById("conditions-validation");

    if(e.target.checked){
      resultConditions.innerHTML = "";
      resultConditions.style.display = "none";
    }

});

/*function closeFormFinal() {
  modalbg.style.display = "none";
}*/

const form = document.getElementById("form");
form.addEventListener("submit", e => {
  // submit event to be manage by JS
  e.preventDefault();
  // method useful when Clicking on a "Submit" button, prevent it from submitting a form
  functionValidation();
  // start function
});

function showNotification(){
  
  document.getElementById("note").style.display = "block";
  setTimeout(function(){
    document.getElementById("note").style.display = "none";
  }, 3000);
  // close alert box after 3 seconds (3000 milliseconds)
}

 function functionValidation() {

  let resultFirst = document.getElementById("first-validation");
  let resultLast = document.getElementById("last-validation");
  let resultEmail = document.getElementById("email-validation");
  let resultDate = document.getElementById("date-validation");
  let resultQuant = document.getElementById("quant-validation");
  let resultLocation = document.getElementById("location-validation");
  let resultConditions = document.getElementById("conditions-validation");
  // target message area

  let inputCount = 0;
  // create a variable of value 0

  if (inputFirst.value.length == 0) {
  // to get the length of the string
    resultFirst.style.display = "inline-block";
    resultFirst.innerHTML = "Merci de compléter ce champ.";
    inputCount++;
    // if length 0 inputCount 1
  } 
  
  if (inputLast.value.length == 0) {
    resultLast.style.display = "inline-block";
    resultLast.innerHTML = "Merci de compléter ce champ.";
    inputCount++;
  } 
  
  if (inputEmail.value.length == 0) {
    resultEmail.style.display = "inline-block";
    resultEmail.innerHTML = "Merci de compléter le champ email.";
    inputCount++;
  } 

  if (inputDate.value.length == 0) {
    resultDate.style.display = "inline-block";
    resultDate.innerHTML = "Vous devez entrer votre date de naissance.";
    inputCount++;
  } 

  if (inputQuant.value.length == 0) {
    resultQuant.style.display = "inline-block";
    resultQuant.innerHTML = "Vous devez choisir une option.";
    inputCount++;
  } 

  if (countLocations() == 0) {
    // check location
    resultLocation.style.display = "inline-block";
    resultLocation.innerHTML = "Vous devez choisir une option.";
    inputCount++;
  } 

  if (!inputConditions.checked) {
    // check conditions
    resultConditions.style.display = "inline-block";
    resultConditions.innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions.";
    inputCount++;
  }  

  else if (inputCount === 0) {
    // if counter empty
    //closeFormFinal();
    modalbg.style.display = "none";
    // clode modale
    showNotification();
    // open notification then close
    document.getElementById("form").reset();
    // reset to have the inputs to be empty
  } 

};