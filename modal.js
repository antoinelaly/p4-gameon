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


inputFirst.addEventListener('keyup', function(e) {
 var resultFirst = document.getElementById("first-validation");
    var regFirst = /[a-zA-Z]{2,64}/;
    var value = e.target.value;
    if (value.match(regFirst)) {
      resultFirst.innerHTML = "";
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

document.getElementById("checkbox1").attributes["required"] = "";

inputEmail.addEventListener('keyup', function(e) {
 var resultEmail = document.getElementById("email-validation");
    var regEmail = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    var value = e.target.value;
    if (value.match(regEmail)) {
      resultEmail.innerHTML = "";
      resultEmail.style.display = "none";
    } else {
      resultEmail.style.display = "inline-block";
      resultEmail.innerHTML = "Veuillez compléter le champ email.";
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


document.querySelectorAll('.location').forEach(item => {
  item.addEventListener('change', e => {
    let resultLocation = document.getElementById("location-validation");
    if(e.target.checked){
      resultLocation.innerHTML = "";
      resultLocation.style.display = "none";
    }
  })
});


inputConditions.addEventListener('change', e => {
  let resultConditions = document.getElementById("conditions-validation");

    if(e.target.checked){
      resultConditions.innerHTML = "";
      resultConditions.style.display = "none";
    }

});

function functionValidation() {
  let resultFirst = document.getElementById("first-validation");
  let resultLast = document.getElementById("last-validation");
  let resultEmail = document.getElementById("email-validation");
  let resultDate = document.getElementById("date-validation");
  let resultQuant = document.getElementById("quant-validation");
  let resultLocation = document.getElementById("location-validation");
  let resultConditions = document.getElementById("conditions-validation");

  if (inputFirst.value.length == 0) {
    resultFirst.style.display = "inline-block";
    resultFirst.innerHTML = "Merci de compléter ce champ.";
    return false;
  } else if (inputLast.value.length == 0) {
    resultLast.style.display = "inline-block";
    resultLast.innerHTML = "Merci de compléter ce champ.";
    return false;
  } else if (inputEmail.value.length == 0) {
    resultEmail.style.display = "inline-block";
    resultEmail.innerHTML = "Merci de compléter le champ email.";
    return false;
  } else if (inputDate.value.length == 0) {
    resultDate.style.display = "inline-block";
    resultDate.innerHTML = "Vous devez entrer votre date de naissance.";
    return false;
  } else if (inputQuant.value.length == 0) {
    resultQuant.style.display = "inline-block";
    resultQuant.innerHTML = "Vous devez choisir une option.";
    return false;
  } else if (countLocations() == 0) {
    resultLocation.style.display = "inline-block";
    resultLocation.innerHTML = "Vous devez choisir une option.";
    return false;
  } else if (!inputConditions.checked) {
    resultConditions.style.display = "inline-block";
    resultConditions.innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions.";
    return false;
  } else {
    return true;
    //return confirm('Do you really want to submit the form?');
  };

};