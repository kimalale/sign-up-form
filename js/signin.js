const email = document.querySelector("#email");
const pwd = document.querySelector("#pwd");
const submitButton = document.querySelector(".btn")


// Database record
let customerEmail = "iamhere@gmail.com";
let customerPassword = "whenyes123";

// Error handling
const err_email = document.querySelector("#error_email");
const err_pwd = document.querySelector("#error_pwd");

// Regex pattern to match email addresses
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


// Validate email address
function isValidEmail(email) {
    return emailRegex.test(email) && email == customerEmail
}

// Handle

email.addEventListener("input", () => {
    if (!isValidEmail(email.value)) {
        err_email.textContent = "Invalid email";
    }
    else
    {
        err_email.textContent = "";
    }
});



pwd.addEventListener("input", () => {

    if (pwd.value !== customerPassword) {
        err_pwd.textContent = "Password doesn't match.";
    }
    else
    {
        err_pwd.textContent = "";
    }
});
