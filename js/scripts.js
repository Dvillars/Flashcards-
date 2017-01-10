$(document).ready(function(){
  $(".init-show").click(function() {
    $(this).slideToggle();
    $(this).next().slideToggle();
  });
  $('.init-hidden').click(function() {
    $(this).slideToggle();
    $(this).prev().slideToggle();
  });
})
