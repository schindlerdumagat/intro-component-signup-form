# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

This is a simple sign-up form where you can practice your form handling skills. It uses the constraint validation API provided by HTML form and input elements. This project is perfect if you want to practice your form handling skills with multiple input fields.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

**Default:**
![](./screenshots/default.png)

**Error:**
![](./screenshots/error.png)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/responsive-sign-up-form-validation-using-the-constraint-validation-api-FL3l_2a_5m](https://www.frontendmentor.io/solutions/responsive-sign-up-form-validation-using-the-constraint-validation-api-FL3l_2a_5m)
- Live Site URL: [https://schindlerdumagat.github.io/intro-component-signup-form/](https://schindlerdumagat.github.io/intro-component-signup-form/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript
- HTML Form and Input Constraint Validation API
- [BEM](https://getbem.com/) - Block, Element, Modifier

### What I learned

I learned how to validate forms using the Constraint Validation API provided by HTMl forms and input elements.

```js
if (email.validity.valueMissing) {
    errorMessage = "Email Address cannot be empty";
} else if (email.validity.typeMismatch) {
    errorMessage = "Looks like this is not an email";
}
```

### Useful resources

- [Client Side Form Validation](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation) - This shows me different ways to validate forms.

## Author

- Website - [Schindler Dumagat](https://schindlerdumagat.github.io/webportfolio/)
- Frontend Mentor - [@schindlerdumagat](https://www.frontendmentor.io/profile/schindlerdumagat)
- LinkedIn - [@schindler-dumagat-015238230](https://www.linkedin.com/in/schindler-dumagat-015238230/)
