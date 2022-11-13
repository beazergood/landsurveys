jQuery.noConflict();
jQuery(document).ready(function() {
      jQuery("#navigation .sub-menu").parent("li").addClass("parent").end().before("<span class='space'></span>").end().find("li:last-child").addClass("last");
	  
	  //jQuery(".thumbnail").preloader();
	  //jQuery(".thumbnail_indiv").preloader();

      $messageContainer1 = jQuery(".messagesBeveled > div > div");
		
		if ($messageContainer1.length)
		{
			$messageContainer1.easySlider
			({
				prevId:			'leftBtn',
				nextId:			'rightBtn',	
				auto:			false,
				pause:			3000,
				continuous:		true,
				numericPrev:	true,
				numericNext:	true
			});
		}

		$messageContainer2 = jQuery(".messagesPlain > div > div");
		
		if ($messageContainer2.length)
		{
			$messageContainer2.easySlider
			({
				prevId:			'leftBtn2',
				nextId:			'rightBtn2',	
				auto:			false,
				pause:			3000,
				continuous:		true,
				numericPrev:	true,
				numericNext:	true
			});
		}



		$messageContainer3 = jQuery(".messagesBlack > div > div");
		
		if ($messageContainer3.length)
		{
			$messageContainer3.easySlider
			({
				prevId:			'leftBtn3',
				nextId:			'rightBtn3',	
				auto:			false,
				pause:			3000,
				continuous:		true,
				numericPrev:	true,
				numericNext:	true
			});
		}
		
		
		jQuery(".commentlist li:nth-child(even)").addClass('even');

		jQuery(".btn-show-code").click(function(){ jQuery(this).toggleClass("open"); });
   		
        jQuery("form input[type=text], form textarea").focus(function(){ 
																 jQuery(this).prev("label").hide();
												 })
                                                 .blur(function(){
                                                                 if (jQuery(this).attr("value") == '') { jQuery(this).prev("label").show();
																 return false;
																 }else{
																 	jQuery(this).prev("label").hide();
																 	return false;
																 } 
                                                 })

		
		jQuery("a[rel^='prettyPhoto']").prettyPhoto({theme: 'facebook'});
		
});