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


const formFields = document.querySelectorAll('input');
const patterns = {
  first: /[a-zA-Z]{2,64}/,
  last: /[a-zA-Z]{2,64}/,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};

// validation function
function validate(field, regex) {
  if(regex.test(field.value)) {
    field.className = 'valid'
  } else {
    field.className = 'invalid'
  }
};

formFields.forEach(formField => {
  formField.addEventListener('keyup', (e) => {
    //console.log(e.target.attributes.name.value)
    validate(e.target, patterns[e.target.attributes.name.value]);
  })
});
