const firstName = document.querySelector("#first_name");
const lastName = document.querySelector("#last_name");
const email = document.querySelector("#email");
const tel = document.querySelector("#phone_number");
const pwd = document.querySelector("#pwd");
const pwd_confirm = document.querySelector("#pwd_confirm");
const submitButton = document.querySelector(".btn")


// Error handling
const err_email = document.querySelector("#error_email");
const err_number = document.querySelector("#error_number");
const err_pwd = document.querySelector("#error_pwd");
const err_pwd_con = document.querySelector("#error_pwd_confirm");

// Regex pattern to match email addresses
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// Regex pattern to match phone numbers
const saPhoneNumberPattern = /^(?:\+27|0)(\d{9})$/;

// Validate email address
function isValidEmail(email) {
    return emailRegex.test(email)
}
// Validate phone number
function isValidNumber(number)
{
    return saPhoneNumberPattern.test(number)
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

tel.addEventListener("input", () => {

    if (!isValidNumber(tel.value)) {
        err_number.textContent = "Invalid number.";
    }
    else
    {
        err_number.textContent = "";
    }
});

pwd_confirm.addEventListener("input", () => {

    if (pwd.value !== pwd_confirm.value) {
        err_pwd_con.textContent = "Password doesn't match.";
    }
    else
    {
        err_pwd_con.textContent = "";
    }
});







