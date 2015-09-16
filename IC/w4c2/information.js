/**
 * Created by amyli on 9/16/15.
 */

//location.search
function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return(false);
}

function myName() {
  var x = getQueryVariable("name");
  document.getElementById("username").innerHTML = x;
}

function myAddress() {
  var x = getQueryVariable("address");
  document.getElementById("address").innerHTML = x;
}

function myPhone() {
  var x = getQueryVariable("phone");
  document.getElementById("phone").innerHTML = x;
}

myName();
myAddress();
myPhone();