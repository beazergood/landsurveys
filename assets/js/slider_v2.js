jQuery.noConflict();
jQuery(document).ready(function() {
		$_slider2 = jQuery("#slider-v2 > div");
		
		if ($_slider2.length)
		{
			$_slider2.easySlider
			({
				prevId:			'prevBtn',
				nextId:			'nextBtn',	
				auto:			true,
				pause:			10000,
				continuous:		true,
				numeric:		true,
				numericId:		'controls',
				numericPrev:	true,
				numericNext:	true
			});
		}												 

});