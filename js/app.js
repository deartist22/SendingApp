//Variables

const sendBtn = document.getElementById("sendBtn"),
  email = document.getElementById("email"),
  subject = document.getElementById("subject"),
  message = document.getElementById("message");

//Event Listeners
eventListeners();

function eventListeners() {
  //App init
  document.addEventListener("DOMContentLoaded", appInit);

  //Validate the forms
  email.addEventListener("blur", validateField);
  subject.addEventListener("blur", validateField);
  message.addEventListener("blur", validateField);
}

//Functions

//App Initialization
function appInit() {
  //Disable the send button on load
  sendBtn.disable = true;
}

//Validate the fields
function validateField() {
  let errors;

  //Validate the lenght of the field
  validateLength(this);

  //Validate the email field
  if (this.type === "email") {
    validateEmail(this);
  }
}

//Validate the length of the fields
function validateLength(field) {
  if (field.value.length > 0) {
    field.style.borderBottomColor = "green";
    field.classList.remove("error");
  } else {
    field.style.borderBottomColor = "red";
    field.classList.add("error");
  }
}

//Validate email checks for @ in the value
function validateEmail(field) {
  let emailText = field.valie;
  if (emailText.indexOf("@") !== -1) {
    field.style.borderBottomColor = "green";
    field.classList.remove("error");
  } else {
    field.style.borderBottomColor = "red";
    field.classList.add("error");
  }
}
