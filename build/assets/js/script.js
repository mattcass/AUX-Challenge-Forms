/* Your JavaScript goes here */

(function() {

		var amex = $('#amex');
		var csv  = $('.csv');
		var visa = $('input#visa');
		var amex = $('input#amex');
		var discover = $('input#discover');
		var mastercard = $('input#mc');


	 	$.fn.checked = function(value) {
	        
	        if(value === true || value === false) {
	            // Set the value of the checkbox
	            $(this).each(function(){ this.checked = value; });
	            
	        } 
	    };

		function getCardNumber() {
			$('#cardNumber').keyup(function(){
				var card = $(this).val();
				var cardNumber = (card).slice(0,1);

				console.log(cardNumber);

				if (cardNumber === '3') {
					(amex).checked(true);
					(csv).addClass('xpress');
				} else if (cardNumber === '4') {
					(visa).checked(true);
					(csv).removeClass('xpress');
				} else if (cardNumber === '5') {
					(mastercard).checked(true); 
					(csv).removeClass('xpress');
				} else if (cardNumber === '6'){
					(discover).checked(true);
					(csv).removeClass('xpress');
				}
			});

		};

		(amex).change(function(){
			if ($(this).prop('checked')) {
				csv.addClass('xpress');
			} else {
				csv.removeClass('xpress')
			}
		});

		getCardNumber();

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