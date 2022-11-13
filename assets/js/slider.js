jQuery.noConflict();
jQuery(document).ready(function(){

	jQuery('#overlay')
	.css('opacity',0.65)
	.hide()
	.delay(1000)
	.slideDown('slow')
	.delay(3500)
	.slideUp('slow');
	});


//$_slider2 = jQuery("#slider-v2 > div");