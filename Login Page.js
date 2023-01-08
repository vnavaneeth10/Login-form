const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");


loginButton.addEventListener("click", (e) => {
    /*every time the login button is clicked, the function defined after "click" will be executed */
    /*function receives a parameter that we call e, which is a mouse event that represents the click of the button */
    
    e.preventDefault();
    
    /*we start by preventing the default behavior of clicking the login button (which is to submit the form data).In this demonstration we don’t want to submit the data, we only want to validate it using JavaScript, hence the e.preventDefault() to prevent the submission. */
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if(username === "user" && password === "1234@") {
        alert("You have successfully logged in.");
        location.reload();/*if success reload the page */
    } else {
        loginErrorMsg.style.opacity = 1; /*if  not valid change the opacity property of login error message to make it visible*/
    } /*accessing the style property then the opacity property and setting the value to 1 means the error message will be fully opaque */
})