const form = document.querySelector(".form");
const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const firstNameError = document.querySelector("#firstname-error");
const lastNameError = document.querySelector("#lastname-error");
const emailError = document.querySelector("#email-error");
const passwordError = document.querySelector("#password-error");

// Used to trigger on change event listener validations after clicking submit for the first time.
let isInitialSubmit = false; 

// Determines and displays first name error message
function showFirstNameError() {

    let errorMessage = "";

    if (firstName.validity.valueMissing) {
        errorMessage = "First Name cannot be empty";
    }

    firstNameError.textContent = errorMessage;
    const fieldContainer = firstName.closest(".form__group");
    fieldContainer.classList.add("form__group--error");
}

// Determines and displays last name error message
function showLastNameError() {

    let errorMessage = "";

    if (lastName.validity.valueMissing) {
        errorMessage = "Last Name cannot be empty";
    }

    lastNameError.textContent = errorMessage;
    const fieldContainer = lastName.closest(".form__group");
    fieldContainer.classList.add("form__group--error");
}

// Determines and displays email address error message
function showEmailError() {

    let errorMessage = "";

    if (email.validity.valueMissing) {
        errorMessage = "Email Address cannot be empty";
    } else if (email.validity.typeMismatch) {
        errorMessage = "Looks like this is not an email";
    }

    emailError.textContent = errorMessage;
    const fieldContainer = email.closest(".form__group");
    fieldContainer.classList.add("form__group--error");
}

// Determines and displays password error message
function showPasswordError() {

    let errorMessage = "";

    if (password.validity.valueMissing) {
        errorMessage = "Email Address cannot be empty";
    } else if (password.validity.tooShort) {
        errorMessage = `You password must be 8 characters long. You entered ${password.value.length}`;
    }

    passwordError.textContent = errorMessage;
    const fieldContainer = password.closest(".form__group");
    fieldContainer.classList.add("form__group--error");
}

function handleFirstNameChange() {

    // Will only run after initial submission
    if (isInitialSubmit) {
        if (!firstName.validity.valid) {
            showFirstNameError();
            return;
        }

        firstNameError.textContent = "";
        const fieldContainer = firstName.closest(".form__group");
        fieldContainer.classList.remove("form__group--error");
    }
}

function handleLastNameChange() {

    // Will only run after initial submission
    if (isInitialSubmit) {
        if (!lastName.validity.valid) {
            showLastNameError();
            return;
        }

        lastNameError.textContent = "";
        const fieldContainer = lastName.closest(".form__group");
        fieldContainer.classList.remove("form__group--error");
    }
}

function handleEmailChange() {

    // Will only run after initial submission
    if (isInitialSubmit) {
        if (!email.validity.valid) {
            showEmailError();
            return;
        }

        emailError.textContent = "";
        const fieldContainer = email.closest(".form__group");
        fieldContainer.classList.remove("form__group--error");
    }
}

function handlePasswordChange() {

    // Will only run after initial submission
    if (isInitialSubmit) {
        if (!password.validity.valid) {
            showPasswordError();
            return;
        }

        passwordError.textContent = "";
        const fieldContainer = password.closest(".form__group");
        fieldContainer.classList.remove("form__group--error");
    }
}

firstName.addEventListener("input", () => {
    handleFirstNameChange();
});

lastName.addEventListener("input", () => {
    handleLastNameChange();
});

email.addEventListener("input", () => {
    handleEmailChange();
});

password.addEventListener("input", () => {
    handlePasswordChange();
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    isInitialSubmit = true;

    handleFirstNameChange();
    handleLastNameChange();
    handleEmailChange();
    handlePasswordChange();

    const isFormValid = form.checkValidity();

    // Will run if all inputs are valid
    if (isFormValid) {
        form.submit();
    }

})