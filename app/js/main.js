$(document).ready(function() {
  $(window).scroll(function(){
    $('*[class^="grumpy-banner"]').each(function(r){
      var pos = $(this).offset().top;
      var scrolled = $(window).scrollTop();
        $('*[class^="grumpy-banner"]').css('top', -(scrolled * 0.5) + 'px');     
      });
  });
});