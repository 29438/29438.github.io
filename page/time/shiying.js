$(document).ready(function(){
  var windowHeight = $(window).height();
  if($(this).height() < windowHeight){
      $(this).height(windowHeight);
  }
});