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
    $('.word').removeClass('bg-danger');
    $('.word').removeClass('bg-warning');
    $('.word').removeClass('bg-success');
    $('.word').addClass('bg-info');

  });

  $("#vocab").click(function() {
    $(".init-hidden").slideUp();
    $(".init-show").slideDown();
    $('.word').removeClass('bg-danger');
    $('.word').removeClass('bg-info');
    $('.word').removeClass('bg-success');
    $('.word').addClass('bg-warning');


  });

  $("#def").click(function() {
    $(".init-hidden").slideDown();
    $(".init-show").slideUp();
    $('.word').removeClass('bg-danger');
    $('.word').removeClass('bg-warning');
    $('.word').removeClass('bg-info');
    $('.word').addClass('bg-success');


  });

  $("#dark").click(function(){
    $("body").addClass('bg-dark');
  });

  $("#light").click(function(){
    $("body").removeClass();
  });
});
