$(document).ready(function () {

  $("#spotify").slideUp();
  $("#record").slideUp();

  $("#crystalline_curated").click(function () {
    $("#spotify").slideToggle();
  });
  $("#record_heading").click(function () {
    $("#record").slideToggle(2000);
  });
});
