$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 10) {
    	$('#nav').addClass('shrink');
    	$('#picLogo').addClass('shrink');
      $('.navButton').removeClass('btn btn-md ');
      $('.navButton').addClass('btn btn-sm');

    }
    else {
    $('#nav').removeClass('shrink');
    $('.navButton').removeClass('btn btn-sm');
    $('.navButton').addClass('btn btn-lg');
    }
  });
});
