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

