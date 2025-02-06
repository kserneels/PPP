// script.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const emailField = document.getElementById('email');
    const countryField = document.getElementById('country');
    const zipField = document.getElementById('zip');
    const passwordField = document.getElementById('password');
    const passwordConfirmationField = document.getElementById('password-confirmation');
    const submitButton = form.querySelector('button');

    const emailError = document.getElementById('email-error');
    const countryError = document.getElementById('country-error');
    const zipError = document.getElementById('zip-error');
    const passwordError = document.getElementById('password-error');
    const passwordConfirmationError = document.getElementById('password-confirmation-error');

    // Check if form is valid
    const checkFormValidity = () => {
        const isValid = form.checkValidity() && passwordField.value === passwordConfirmationField.value;
        submitButton.disabled = !isValid;
    };

    // Live validation for email
    emailField.addEventListener('input', () => {
        if (!emailField.validity.valid) {
            emailError.style.display = 'inline';
        } else {
            emailError.style.display = 'none';
        }
        checkFormValidity();
    });

    // Live validation for country
    countryField.addEventListener('input', () => {
        if (!countryField.validity.valid) {
            countryError.style.display = 'inline';
        } else {
            countryError.style.display = 'none';
        }
        checkFormValidity();
    });

    // Live validation for zip
    zipField.addEventListener('input', () => {
        if (!zipField.validity.valid) {
            zipError.style.display = 'inline';
        } else {
            zipError.style.display = 'none';
        }
        checkFormValidity();
    });

    // Live validation for password
    passwordField.addEventListener('input', () => {
        if (!passwordField.validity.valid) {
            passwordError.style.display = 'inline';
        } else {
            passwordError.style.display = 'none';
        }
        checkFormValidity();
    });

    // Live validation for password confirmation
    passwordConfirmationField.addEventListener('input', () => {
        if (passwordConfirmationField.value !== passwordField.value) {
            passwordConfirmationError.style.display = 'inline';
        } else {
            passwordConfirmationError.style.display = 'none';
        }
        checkFormValidity();
    });

    // Submit the form and give high five if valid
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (form.checkValidity() && passwordField.value === passwordConfirmationField.value) {
            alert('High five! 🎉');
        } else {
            alert('Please fix the errors before submitting!');
        }
    });
});
