const Fname = document.getElementById("firstname");
const Lname = document.getElementById("lastname");
const myEmail = document.getElementById("email");
const myPass = document.getElementById("password");
const myPassCon = document.getElementById("password-confirm");
const check = document.getElementById("checkbox");
const myButton = document.getElementById("button");



myButton.addEventListener("click", (e) => {
    e.preventDefault(); // page will not refresh by default when button is clicked

    // firstname & lastname has to be at least 2 characters long
    if (Fname.value.length && !Lname.value.length>= 2) {

        alert("Please fill in First and Last name!");
    }

    // email has to be filled in and correct
    if (!myEmail.value.includes("@")) {

        alert("Please fill in E-mail address!");
    }

    // password has to be at least 6 characters long and Password confirm has to match
    if (!myPassCon.value.length>= 6 && myPassCon.value.length === !myPass.value.length) {

        alert("Please fill in matching Passwords with at least 6 characters!");
    }

    // checkbox must be checked
    if (!check.checked) {
        alert("Please check the box!");
    }
    else {
        alert("Account reggad!");
    }
    
});