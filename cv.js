const submitButton = document.querySelector("#submit");

submitButton.addEventListener("click" , function(e) {
e.preventDefault();
const userPassword = document.querySelector(".name").value
const correctPassword = "bbbbb"
if (userPassword === correctPassword) {
    window.location.href = "resume.html";
} else {
    alert("Incorrect Pasword , Try Again");
        document.querySelector(".name").value = ""
    }
})
