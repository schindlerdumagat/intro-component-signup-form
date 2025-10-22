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

// This determines and displays error messages for invalid fields
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

function handleFirstNameChange() {

    // Will only run after initial submission
    if (isInitialSubmit) {
        if (!firstName.validity.valid) {
            showError(firstName, firstNameError, {
                valueMissing: "First Name cannot be empty",
            });
            return;
        }

        clearError(firstName, firstNameError);
    }
}

function handleLastNameChange() {

    // Will only run after initial submission
    if (isInitialSubmit) {
        if (!lastName.validity.valid) {
            showError(lastName, lastNameError, {
                valueMissing: "Last Name cannot be empty",
            });
            return;
        }

        clearError(lastName, lastNameError);
    }
}

function handleEmailChange() {

    // Will only run after initial submission
    if (isInitialSubmit) {
        if (!email.validity.valid) {
            showError(email, emailError, {
                valueMissing: "Email Address cannot be empty",
                typeMismatch: "Looks like this is not an email",
            });
            return;
        }

        clearError(email, emailError);
    }
}

function handlePasswordChange() {

    // Will only run after initial submission
    if (isInitialSubmit) {
        if (!password.validity.valid) {
            showError(password, passwordError, {
                valueMissing: "Password cannot be empty",
                tooShort: `You password must be 8 characters long. You entered ${password.value.length}`,
            });
            return;
        }

        clearError(password, passwordError);
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