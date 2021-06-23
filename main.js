const Fname = document.getElementById("firstname");
const Lname = document.getElementById("lastname");
const myEmail = document.getElementById("email");
const myPass = document.getElementById("password");
const myPassCon = document.getElementById("password-confirm");
const check = document.getElementById("checkbox");
const myButton = document.getElementById("button");



myButton.addEventListener("click", (e) => {
    e.preventDefault();

    // firstname & lastname has to be at least 2 characters long
    if (Fname.value.length && Lname.value.length>= 2) {
        alert("Account Registered!");
    }
    else {
        alert("Please fill in First and Last name!");
    }

    // email has to be filled in and correct
    if (myEmail.value.includes("@")) {
        alert("Account Registered!");
    }
    else {
        alert("Please fill in E-mail address!");
    }

    // password has to be at least 6 characters long and Password confirm has to match
    if (myPassCon.value.length>= 6 && myPassCon.value.length === myPass.value.length) {
        alert("Account Registered!");
    }
    else {
        alert("Please fill in matching Passwords with at least 6 characters!");
    }

    // checkboc must be checked
    if (!check.checked) {
        alert("Please check the box!");
    }
    
});