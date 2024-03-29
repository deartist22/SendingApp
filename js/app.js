//Variables

const sendBtn = document.getElementById("sendBtn"),
  email = document.getElementById("email"),
  subject = document.getElementById("subject"),
  message = document.getElementById("message"),
  resetBtn = document.getElementById("resetBtn"),
  sendEmailForm = document.getElementById("email-form");

//Event Listeners
eventListeners();

function eventListeners() {
  //App init
  document.addEventListener("DOMContentLoaded", appInit);

  //Validate the forms
  email.addEventListener("blur", validateField);
  subject.addEventListener("blur", validateField);
  message.addEventListener("blur", validateField);
  //Send email and reset form
  sendEmailForm.addEventListener("submit", sendEmail);
  resetBtn.addEventListener("click", resetForm);
}

//Functions

//App Initialization
function appInit() {
  //Disable the send button on load
  sendBtn.disable = true;
}

function sendEmail(e) {
  e.preventDefault();
  //Show spinner
  const spinner = document.querySelector("#spinner");
  spinner.style.display = "block";
  //Show image
  const sendEmailImg = document.createElement("img");
  sendEmailImg.src = "img/mail.gif";
  sendEmailImg.style.display = "block";

  //Hide spinner the show send email image
  setTimeout(function() {
    //Hide spinner
    spinner.style.display = "none";
    //Show the image
    document.querySelector("#loaders").appendChild(sendEmailImg);
    //After 5 secondes, hide the image and reset the form
    setTimeout(function() {
      sendEmailForm.reset();
      sendEmailImg.remove();
    }, 5000);
  }, 3000);
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

  //Both will return errors, then check if there're any errors
  errors = document.querySelectorAll(".error");

  //Check that the inputs are not empty
  if (email.value !== "" && subject.value !== "" && message.value !== "") {
    if (errors.length === 0) {
      //the button should be enable
      sendBtn.disabled = false;
    }
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

//Reset the form
function resetForm() {
  sendEmailForm.reset();
}
