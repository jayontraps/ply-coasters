var domEls = require('../domEls');
var submitForm = require('./submitForm');



module.exports = function contactForm() {

	$(function() {
		
		$('#ajax-contact').validate({
			submitHandler: function(form) {
				submitForm(form);			
			}
		});

	});

};