/* Your JavaScript goes here */

(function() {

	console.log('this is an test of the emergency alert system');

		var amex = $('#amex');
		var csv  = $('.csv');
		
		(amex).on('click', function() {
			(csv).toggleClass('xpress');
		});

})();