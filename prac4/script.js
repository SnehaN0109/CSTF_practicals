
document.getElementById("myform").addEventListener("submit", function(event) {

    event.preventDefault();

    // Get input values
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;
    let age = document.getElementById("age").value;
    let mobile = document.getElementById("mobile").value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let course = document.getElementById("course").value;

    // Get error elements
    let userError = document.getElementById("usererror");
    let emailError = document.getElementById("emailerror");
    let passError = document.getElementById("passerror");
    let confirmError = document.getElementById("confirmerror");
    let ageError = document.getElementById("ageerror");
    let mobileError = document.getElementById("mobileerror");
    let genderError = document.getElementById("gendererror");
    let courseError = document.getElementById("courseerror");
    let result = document.getElementById("result");

    // Clear previous errors
    userError.textContent = "";
    emailError.textContent = "";
    passError.textContent = "";
    confirmError.textContent = "";
    ageError.textContent = "";
    mobileError.textContent = "";
    genderError.textContent = "";
    courseError.textContent = "";
    result.textContent = "";

    let valid = true;

    // Username validation
    if (username.trim() === "") {
        userError.textContent = "Username is required";
        valid = false;
    }

    // Email validation
    if (!email.includes("@") || !email.includes(".")) {
        emailError.textContent = "Enter valid email";
        valid = false;
    }

    // Password security validation
    let hasUpper = false;
    let hasLower = false;
    let hasNumber = false;

    for (let i = 0; i < password.length; i++) {

        if (password[i] >= 'A' && password[i] <= 'Z') {
            hasUpper = true;
        }

        if (password[i] >= 'a' && password[i] <= 'z') {
            hasLower = true;
        }

        if (password[i] >= '0' && password[i] <= '9') {
            hasNumber = true;
        }
    }

    if (password.length < 8 || !hasUpper || !hasLower || !hasNumber) {
        passError.textContent = "Password needs 8 characters, uppercase, lowercase and number";
        valid = false;
    }

    // Confirm password validation
    if (password !== confirm) {
        confirmError.textContent = "Passwords do not match";
        valid = false;
    }

    // Age validation
    if (age === "" || Number(age) < 18) {
        ageError.textContent = "Age must be 18 or above";
        valid = false;
    }

    // Mobile validation
    if (mobile.length !== 10 || isNaN(mobile)) {
        mobileError.textContent = "Enter valid 10 digit mobile number";
        valid = false;
    }

    // Gender validation
    if (gender === null) {
        genderError.textContent = "Please select gender";
        valid = false;
    }

    // Course validation
    if (course === "") {
        courseError.textContent = "Please select a course";
        valid = false;
    }

    // Final result
    if (valid) {
        result.textContent = "Registration Successful!";
    }

});
