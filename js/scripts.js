$(document).ready(function(){

  $(".init-show").click(function() {
    $(this).slideToggle();
    $(this).next().slideToggle();
  });

  $('.init-hidden').click(function() {
    $(this).slideToggle();
    $(this).prev().slideToggle();
  });

  $("#showall").click(function() {
    $(".init-hidden").slideDown();
    $(".init-show").slideDown();
  });

  $("#vocab").click(function() {
    $(".init-hidden").slideUp();
    $(".init-show").slideDown();

  });

  $("#def").click(function() {
    $(".init-hidden").slideDown();
    $(".init-show").slideUp();

  });

  $("#dark").click(function(){
    $("body").addClass('bg-dark');
  });

  $("#light").click(function(){
    $("body").removeClass();
  });
});
