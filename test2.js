const Fname = document.getElementById("firstname");
const Lname = document.getElementById("lastname");
const myEmail = document.getElementById("email");
const myPass = document.getElementById("password");
const myPassCon = document.getElementById("password-confirm");
const check = document.getElementById("checkbox");
const myButton = document.getElementById("button");

// firstname & lastname has to be at least 2 characters long
const names = Fname.value.length && Lname.value.length >= 2;
// email has to be filled in and correct
const email = myEmail.value.includes("@");
// password has to be at least 6 characters long and Password confirm has to match
const myPassword = myPass.value.length >= 6 && myPassCon.value.length === myPass.value.length; // checkbox must be checked
const myCheckBox = check.checked;

myButton.addEventListener("click", function(e) {
    e.preventDefault();

    if (!names && !email && !myPassword && !myCheckBox) {
        alert("fill in");
    }
    else if (names && email && myPassword && myCheckBox){
        alert("account reg");
    }
});