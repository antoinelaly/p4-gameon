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
inputFirst.addEventListener('keyup', function(e) {
 var resultFirst = document.getElementById("first-validation");

    var regFirst = /[a-zA-Z]{2,64}/;
    var value = e.target.value;
    if (value.match(regFirst)) {
      resultFirst.innerHTML = "";
    } else {
      resultFirst.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    }
});

const inputLast = document.querySelector('input[name=last]');
inputLast.addEventListener('keyup', function(e) {
 var resultLast = document.getElementById("last-validation");

    var regLast = /[a-zA-Z]{2,64}/;
    var value = e.target.value;
    if (value.match(regLast)) {
      resultLast.innerHTML = "";
    } else {
      resultLast.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    }
});

const inputEmail = document.querySelector('input[name=email]');
inputEmail.addEventListener('keyup', function(e) {
 var resultEmail = document.getElementById("email-validation");

    var regEmail = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    var value = e.target.value;
    if (value.match(regEmail)) {
      resultEmail.innerHTML = "";
    } else {
      resultEmail.innerHTML = "Veuillez compléter le champ email.";
    }
});

/*const inputeDate = document.querySelector('input[name=birthdate]');
inputeDate.addEventListener('keyup', function(e) {

leSubmit.addEventListener('click',()=>{
    if(email.validity.typeMismatch){
        email.setCustomValidity('Vous devez entrer votre date de naissance.');
    }else{
        email.setCustomValidity('');
    }
});*/