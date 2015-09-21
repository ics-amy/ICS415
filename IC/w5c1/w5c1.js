/**
 * Created by amyli on 9/21/15.
 */

$(document).ready(function() {
  $("button").click(function() {
    alert("Success!");
  });
});

$(document).ready(function() {
  $("#header").mouseover(function() {
    $("#header").animate({height: "50px"
    }, 600);
  });
  $("#header").mouseout(function() {
    $("#header").animate({height: "100px"
    }, 600);
  });
});