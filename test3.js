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
    if (!names) {
        alert("Please fill in First and Last name!");
    }

});





myButton.addEventListener("click", (e) => {
    e.preventDefault(); // page will not refresh by default when button is clicked

    // email has to be filled in and correct
    if (!email) {
        alert("Please fill in E-mail address!");
    }

});




myButton.addEventListener("click", (e) => {
    e.preventDefault(); // page will not refresh by default when button is clicked

    // email has to be filled in and correct
    if (!myPassword) {
        alert("Please fill in matching Passwords with at least 6 characters!");

    }
});




myButton.addEventListener("click", (e) => {
    e.preventDefault(); // page will not refresh by default when button is clicked

    // email has to be filled in and correct
    if (myCheckBox) {
        alert("Please check the box!");
    }

});
