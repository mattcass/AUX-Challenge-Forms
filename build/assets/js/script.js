/* Your JavaScript goes here */

(function() {


		var csv  = $('.csv');
		var visa = $('input#visa');
		var amex = $('input#amex');
		var discover = $('input#discover');
		var mastercard = $('input#mc');

		// Create a .checked function to see if checkbox is checked
	 	$.fn.checked = function(value) {
	        
	        if(value === true || value === false) {
	            // Set the value of the checkbox
	            $(this).each(function(){ this.checked = value; });
	            
	        } 
	    };

		$('#cardNumber').validateCreditCard(function(result){

			if (result.card_type.name === 'amex') {
				amex.checked(true);
			}
			else if (result.card_type.name === 'visa') {
				visa.checked(true);
			}
			else if (result.card_type.name === 'discover') {
				discover.checked(true);
			}
			else if (result.card_type.name === 'mastercard') {
				mastercard.checked(true);
			}

			changeCSV();

		});


		function changeCSV() {
			if (amex.is(':checked')) {
				csv.addClass('xpress');
			} 
			else {
				csv.removeClass('xpress');
			}
		};


		// Check for 'required'	input support with modernizr
		Modernizr.load({
			test: Modernizr.input.required,
			yep: console.log('required works here!'),
			nope: ['vendor/jquery.validate.min.js'],

			// call jQuery Validate if required is not supported 
			complete: function () {
				if (!Modernizr.input.required) {
					$('form').each(function() {
						$(this).validate();
					});
				}
			}

		});

})();