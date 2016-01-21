var domEls = require('../domEls');

module.exports = function submitForm(form) {

	var formMessages = $('#form-messages');

	// display the spinner
	domEls.spinner.css('display', 'block');

	// Serialize the form data.
	var formData = $(form).serialize();

	console.log(formData);

	$.ajax({
		type: 'POST',
		url: $(form).attr('action'),
		data: formData
	})
	.done(function(response) {
		// Make sure that the formMessages div has the 'success' class.
		$(formMessages).removeClass('error');
		$(formMessages).addClass('success');

		// hide the spinner
		domEls.spinner.css('display', 'none');

		// Set the message text.
		// $(formMessages).text(response); // response = server details
		$(formMessages).text('Thanks! Your message has been recieved.');


		// Clear the form.
		$('#name').val('');
		$('#email').val('');
		$('#message').val('');
	})
	.fail(function(data) {
		// Make sure that the formMessages div has the 'error' class.
		$(formMessages).removeClass('success');
		$(formMessages).addClass('error');

		// Set the message text.
		if (data.responseText !== '') {
			$(formMessages).text(data.responseText);
		} else {
			$(formMessages).text('Oops! An error occured and your message could not be sent.');
		}
	});	
};



