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

const inputFirst = document.querySelector('input[name=first]');
const inputLast = document.querySelector('input[name=last]');
const inputEmail = document.querySelector('input[name=email]');
const inputDate = document.querySelector('input[name=birthdate]');
const inputQuant = document.querySelector('input[name=quantity]');
const inputLocation = document.querySelector('input[name=location]');
const inputConditions = document.querySelector('input[name=conditions]');
// get all inputs

let resultFirst = document.getElementById("first-validation");
let resultLast = document.getElementById("last-validation");
let resultEmail = document.getElementById("email-validation"); 
let resultBirth = document.getElementById("date-validation");
let resultQuant = document.getElementById("quant-validation");
let resultLocation = document.getElementById("location-validation");
let resultConditions = document.getElementById("conditions-validation");

const resultClass = document.querySelector(".result");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
closeBtn.forEach((close) => close.addEventListener("click", closeForm));

// launch modal form
function launchModal() {
  document.getElementById("form").reset();
  modalbg.style.display = "block";

  document.querySelectorAll('.result').forEach(item => {
    item.style.display = "none";
  });
}

function closeForm() {
  modalbg.style.display = "none";
}

function displayNone(e) {
  e.style.display = "none";
}

inputFirst.addEventListener('keyup', function(e) {
    var regFirst = /[a-zA-Z]{2,64}/;
    var value = e.target.value;
    if (value.match(regFirst)) {
      displayNone(resultFirst);
    } else {
      resultFirst.style.display = "inline-block";
      resultFirst.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    }
});


inputLast.addEventListener('keyup', function(e) {
    var regLast = /[a-zA-Z]{2,64}/;
    var value = e.target.value;
    if (value.match(regLast)) {
      displayNone(resultLast);
    } else {
      resultLast.style.display = "inline-block";
      resultLast.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    }
});
 
inputEmail.addEventListener('keyup', function(e) {
    var regEmail = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    var value = e.target.value;
    if (value.match(regEmail)) {
      displayNone(resultEmail);
    } else {
      resultEmail.style.display = "inline-block";
      resultEmail.innerHTML = "Vous devez choisir une adresse électronique est valide.";
    }
});

inputDate.addEventListener('change', function(e) {
  if (inputDate.value.length > 0) {
      displayNone(resultBirth);
     } else {
      resultBirth.style.display = "inline-block";
      resultBirth.innerHTML = "Vous devez entrer votre date de naissance.";
     }
 });

 inputQuant.addEventListener('change', function(e) {
  if (inputQuant.value.length > 0) {
    displayNone(resultQuant);
     } else {
      resultQuant.style.display = "inline-block";
      resultQuant.innerHTML = "Merci de compléter ce champ";
     }
 });

function countLocations(){
  var theLocation = document.getElementsByClassName("location"),
      i,
      count = 0;
  for (i = 0; i < theLocation.length; i++){
      if (theLocation[i].checked){
          count++;
      } 
  }
  return count;
};

document.getElementById("checkbox1").attributes["required"] = "";

document.querySelectorAll('.location').forEach(item => {
  item.addEventListener('change', e => {
    if(e.target.checked){
      displayNone(resultLocation);
    }
  })
});

inputConditions.addEventListener('change', e => {
    if(e.target.checked){
      displayNone(resultConditions);
    }
});

const form = document.getElementById("form");
form.addEventListener("submit", e => {
  e.preventDefault();
  functionValidation();
});

function showNotification(){
  
  document.getElementById("note").style.display = "block";
  setTimeout(function(){
    document.getElementById("note").style.display = "none";
  }, 3000);
}

 function functionValidation() {

  let resultDate = document.getElementById("date-validation");

  let inputCount = 0;

  if (inputFirst.value.length == 0) {
    resultFirst.style.display = "inline-block";
    resultFirst.innerHTML = "Merci de compléter ce champ.";
    inputCount++;
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
    resultLocation.style.display = "inline-block";
    resultLocation.innerHTML = "Vous devez choisir une option.";
    inputCount++;
  } 

  if (!inputConditions.checked) {
    resultConditions.style.display = "inline-block";
    resultConditions.innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions.";
    inputCount++;
  }  

  else if (inputCount === 0) {
    //closeFormFinal
    modalbg.style.display = "none";
    showNotification();
    document.getElementById("form").reset();
  } 
};