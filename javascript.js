$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 10) {
    	$('#nav').addClass('shrink');
    	$('#navStuff').addClass('shrink');
    }
    else {
    $('#nav').removeClass('shrink');
    $('#navStuff').removeClass('shrink');
    }
  });
});
