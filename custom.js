$(document).ready(function(){
  $('.n').click(function(e){
    var x=$(this).attr('href');
    $('html, body').animate({
      scrollTop: $(x).offset().top},500);
      e.preventDefault();

  });
});
