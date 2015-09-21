/**
 * Created by Amy on 9/19/2015.
 */
function validateForm() {
  var x = document.getElementById("username").value;
  var message = document.getElementById("message");
  message.innerHTML = "";
  try {
    if (x == "") throw "Please input a username.";
  }
  catch (err) {
    message.innerHTML = "Please input a username.";
  }
}