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

const firstNameValidations = {
    valueMissing: "First Name cannot be empty",
};

const lastNameValidations = {
    valueMissing: "Last Name cannot be empty",
};

const emailValidations = {
    valueMissing: "Email Address cannot be empty",
    typeMismatch: "Looks like this is not an email",
}

const passwordValidations = {
    valueMissing: "Password cannot be empty",
    tooShort: `You password must be 8 characters long.`,
}

// Determines and displays error messages for invalid fields
function showError(field, errorElement, validations) {

    let errorMessage = "";
    const fieldContainer = field.closest(".form__group");

    for (const [validateKey, message] of Object.entries(validations)) {
        if (field.validity[validateKey]) {
            errorMessage = message;
            break;
        }
    }

    if (errorMessage) {
        errorElement.textContent = errorMessage;
        fieldContainer.classList.add("form__group--error");
    } else {
        errorElement.textContent = "";
        fieldContainer.classList.remove("form__group--error");
    }
}

// Clears error messages and styling for valid inputs
function clearError(field, errorElement) {
    errorElement.textContent = "";
    const fieldContainer = field.closest(".form__group");
    fieldContainer.classList.remove("form__group--error");
}

// Event handler for form submit and input changes
function handleInputChange(field, errorElement, validations) {
    // Will only run after initial submission
    if (isInitialSubmit) {
        if (!field.validity.valid) {
            showError(field, errorElement, validations);
            return;
        }

        clearError(field, errorElement);
    }
}

// Event Listeners

firstName.addEventListener("input", () => handleInputChange(firstName, firstNameError, firstNameValidations));
lastName.addEventListener("input", () => handleInputChange(lastName, lastNameError, lastNameValidations));
email.addEventListener("input", () => handleInputChange(email, emailError, emailValidations));
password.addEventListener("input", () => handleInputChange(password, passwordError, { 
    ...passwordValidations, 
    tooShort: `You password must be 8 characters long. You entered ${password.value.length}` // tooShort property is set explicitly to retrieve the current value of the password field on change. 
}));

form.addEventListener("submit", (e) => {
    e.preventDefault();
    isInitialSubmit = true;

    handleInputChange(firstName, firstNameError, firstNameValidations);
    handleInputChange(lastName, lastNameError, lastNameValidations);
    handleInputChange(email, emailError, emailValidations);
    handleInputChange(password, passwordError, { 
        ...passwordValidations, 
        tooShort: `You password must be 8 characters long. You entered ${password.value.length}` // tooShort property is set explicitly to retrieve the current value of the password field on submit.
    });

    const isFormValid = form.checkValidity();

    // Will run if all inputs are valid
    if (isFormValid) {
        form.submit();
    }
})