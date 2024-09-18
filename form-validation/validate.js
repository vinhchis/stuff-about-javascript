let emailInput = document.getElementById("email");
let emailError = document.getElementById("emailError");
let nameInput = document.getElementById("name");
let nameError = document.getElementById("nameError");

function validateEmail() {
  let regexEmail = /^[\w%+-]+@[\w]+\.[a-zA-Z]{2,}$/;

  if (emailInput.value == "") {
    emailError.textContent = "Email is required";
  } else if (!regexEmail.test(emailInput.value)) {
    emailError.textContent = "Invalid email format!";
  } else {
    emailError.textContent = "";
  }
}

function validateName() {
  let regexName = /^[\w]{3,}$/;

  if (nameInput.value == "") {
    nameError.textContent = "Name is required";
  } else if (!regexName.test(nameInput.value)) {
    nameError.textContent = "At least 3 characters!";
  } else {
    nameError.textContent = "";
  }
}

function validateForm(event) {
  event.preventDefault(); /* no loading page again */
  validateEmail();
  validateForm();
  let valueEmailError = emailError.textContent;
  let valueNameError = nameError.textContent;
  if (valueEmailError === "" && valueNameError === "") {
    let newUser = {
      email: emailInput.value,
      name: nameInput.value,
    };
    console.log(newUser);
    return true;
  } else {
    return false;
  }
}
