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

const form = document.getElementById("form");

// get all inputs
const inputFirst = document.querySelector('input[name=first]');
const inputLast = document.querySelector('input[name=last]');
const inputEmail = document.querySelector('input[name=email]');
const inputDate = document.querySelector('input[name=birthdate]');
const inputQuant = document.querySelector('input[name=quantity]');
const inputLocation = document.querySelector('input[name=location]');
const inputConditions = document.querySelector('input[name=conditions]');

// id
let resultFirst = document.getElementById("first-validation");
let resultLast = document.getElementById("last-validation");
let resultEmail = document.getElementById("email-validation"); 
let resultBirth = document.getElementById("date-validation");
let resultQuant = document.getElementById("quant-validation");
let resultLocation = document.getElementById("location-validation");
let resultConditions = document.getElementById("conditions-validation");

var resultDate = document.getElementById("date-validation");

// count++
const resultClass = document.querySelector(".result");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
closeBtn.forEach((close) => close.addEventListener("click", closeForm));

// launch modal form
function launchModal() {
  document.getElementById("form").reset();
  // purger contenu des champs
  modalbg.style.display = "block";

  document.querySelectorAll('.result').forEach(item => {
    item.style.display = "none";
    // purger contenu des alertes
  });
}

function closeForm() {
  modalbg.style.display = "none";
}

function displayNone(e) {
  // passer les id 
  e.style.display = "none";
}

inputFirst.addEventListener('keyup', function(e) {
  // écouter touche relaché
    var regFirst = /[a-zA-Z]{2,64}/;
    var value = e.target.value;
    if (value.match(regFirst)) {
      // correspondance  
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
    // sup à 0 pas d'alerte
      displayNone(resultBirth);
     } else {
      resultBirth.style.display = "inline-block";
      resultBirth.innerHTML = "Vous devez entrer votre date de naissance.";
     }
 });

 inputQuant.addEventListener('change', function(e) {
   // écouter changement d'état
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
    // vérifier chacune des villes
      if (theLocation[i].checked){
          count++;
      } 
  }
  return count;
  // fin de l'exécution, valeur à renvoyer à la fonction appelante
};

document.getElementById("checkbox1").attributes["required"] = "";

document.querySelectorAll('.location').forEach(item => {
  // tableau location -> écoute item -> état de e 
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

// bouton 
form.addEventListener("submit", e => {
  e.preventDefault();
  functionValidation();
});

function showNotification(){
  // interstitiel
  document.getElementById("note").style.display = "block";
  setTimeout(function(){
  // La méthode setTimeout() permet de définir un « minuteur »
    document.getElementById("note").style.display = "none";
  }, 3000);
}

 function functionValidation() {

  let inputCount = 0;
  // initialisation du compteur

  if (inputFirst.value.length == 0) {
    resultFirst.style.display = "inline-block";
    resultFirst.innerHTML = "Merci de compléter ce champ.";
    inputCount++;
    // s'il n'y a rien dans le champs -> alerte & count 1
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
    // fonction appelante count 
    resultLocation.style.display = "inline-block";
    resultLocation.innerHTML = "Vous devez choisir une option.";
    inputCount++;
  } 

  if (!inputConditions.checked) {
    // n'est pas
    resultConditions.style.display = "inline-block";
    resultConditions.innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions.";
    inputCount++;
  }  

  else if (inputCount === 0) {
    // fermer, envoyer not, clean champs
    modalbg.style.display = "none";
    showNotification();
    document.getElementById("form").reset();
  } 
};