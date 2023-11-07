document.addEventListener("DOMContentLoaded", function() {
const form = document.querySelector("#input");
const dataScience = document.querySelector("#portD");
const web = document.querySelector("#portW");
form.addEventListener("submit" , function(e) {
e.preventDefault();
if (dataScience.checked) {
    window.location.href = "portData.html"
} else if (web.checked) {
    window.location.href = "portWeb.html"
}
  else {
    alert("Please Select");
  } 
});
});
