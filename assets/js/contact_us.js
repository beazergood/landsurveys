jQuery.noConflict();
jQuery(document).ready(function() {
		
	jQuery('form#contactForm').submit(function() {
		jQuery('form#contactForm .error').remove();
		var hasError = false;
		jQuery('.requiredField').each(function() {
			if(jQuery.trim($(this).val()) == '') {
				var labelText = jQuery(this).prev('label').text();
				jQuery(this).parent().append('<span class="error">You forgot to enter your '+labelText+'.</span>');
				hasError = true;
			} else if($(this).hasClass('email')) {
				var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
				if(!emailReg.test(jQuery.trim(jQuery(this).val()))) {
					var labelText = jQuery(this).prev('label').text();
					
					jQuery(this).parent().append('<span class="error">You entered an invalid '+labelText+'.</span>');
					hasError = true;
				}
			}
		});
		if(!hasError) {
			jQuery('form#contactForm li.buttons button').fadeOut('normal', function() {
				jQuery(this).parent().append('<img src="/wp-content/themes/grounded/images/loading.gif" alt="Loading&hellip;" height="31" width="31" />');
			});
			var formInput = jQuery(this).serialize();
			jQuery.post(jQuery(this).attr('action'),formInput, function(data){
				jQuery('form#contactForm').slideUp("fast", function() {				   
					jQuery(this).before('<p class="contactSuccess"><strong>Thanks!</strong> Your email was successfully sent.</p>');
				});
			});
		}
		
		return false;
		
	});
});