/**
 * Created by amyli on 9/14/15.
 */
function bigImg(x) {
  x.style.height="250px";
  x.style.width="250px";
}

function normalImg(x) {
  x.style.height="150px";
  x.style.width="150px";
}

function myFunction() {
  document.getElementById("submit").innerHTML="Success!";
}

document.getElementById("header").onmouseenter = function() {
  mouseEnter()
};
document.getElementById("header").onmouseleave = function() {
  mouseLeave()
};

function mouseEnter() {
  document.getElementById("header").style.color = "pink";
}

function mouseLeave() {
  document.getElementById("header").style.color = "black";
}