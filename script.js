console.log("Alreeeeet");

function show() {
  document.getElementById("bug").style.display = "block";
  document.getElementById("submit");
  document.getElementById("stickySound").play();
}

function validateForm() {
  var checkbox = document.getElementById("check");

  if (!checkbox.checked) {
    document.getElementById("sudo").innerHTML = "Checkbox is required!";
    return false;
  }
}
