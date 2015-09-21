/**
 * Created by Amy on 9/19/2015.
 */
function validateForm() {
  var x = document.getElementById("username").value;
  var y = document.getElementById("email").value;
  var w = document.getElementById("password").value;
  var z = document.getElementById("confirm").value;
  if (x.length == "" || y.length == "") {
    document.getElementById("username").style.borderColor = "red";
    document.getElementById("email").style.borderColor = "red";
    document.getElementById("e_username").innerHTML = "Username is empty.";
    document.getElementById("e_email").innerHTML = "Email is empty.";
  }
  if (w.length == "" || z.length == "") {
    document.getElementById("password").style.borderColor = "red";
    document.getElementById("confirm").style.borderColor = "red";
    document.getElementById("e_password").innerHTML = "Password is empty.";
    document.getElementById("e_confirm").innerHTML = "Confirm Password is empty.";
  }
  if (w != z) {
    document.getElementById("password").style.borderColor = "red";
    document.getElementById("confirm").style.borderColor = "red";
    document.getElementById("e_password").innerHTML = "Password do not match.";
  }
  return false;
}