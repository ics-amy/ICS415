/**
 * Created by amyli on 9/21/15.
 */
$(document).ready(function() {
  $(".answer").hide();
  $(".question").click(function() {
    $(".answer").slideToggle();
  });
});
