$(document).ready(function(){
	$(".grumpy-hover").mouseenter(function(){
		$(this).addClass("hover");
	})
	.mouseleave(function(){
		$(this).removeClass("hover");
	});
});

$(document).ready(function() {
    $('.toggle-nav').click(function(e) {
        $(this).toggleClass('active');
        $('.menu ul').toggleClass('active'); 
        e.preventDefault();
    });
});

$( ".expand" ).click(function() {
  $( ".menu-item" ).slideToggle( "slow", function() {
    // Animation complete.
  });
});