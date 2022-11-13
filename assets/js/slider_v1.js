jQuery.noConflict();
jQuery(document).ready(function() {

		$_slider1 = jQuery("#slider-v1 > div");
		
		if ($_slider1.length)
		{
			$_slider1.easySlider
			({
				prevId:			'prevBtn',
				nextId:			'nextBtn',	
				auto:			true,
				pause:			5000,
				continuous:		true,
				numeric:		true,
				numericId:		'controls',
				numericPrev:	true,
				numericNext:	true
			});
		}
});