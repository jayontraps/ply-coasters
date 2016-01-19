( function($) {


	// coaster = {

	// 	"back":[
	// 	    {
	// 	    	"heading":"Coaster 1",
	// 	     	"text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque saepe porro, dignissimos magni officia totam doloribus ratione odit inventore iste, dicta, laboriosam recusandae eligendi quidem quisquam. Vel officia inventore quas."
	// 	 	},	
	// 	    {
	// 	    	"heading":"Coaster 2",
	// 	     	"text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque saepe porro, dignissimos magni officia totam doloribus ratione odit inventore iste, dicta, laboriosam recusandae eligendi quidem quisquam. Vel officia inventore quas."
	// 	 	},
	// 	    {
	// 	    	"heading":"Coaster 3",
	// 	     	"text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque saepe porro, dignissimos magni officia totam doloribus ratione odit inventore iste, dicta, laboriosam recusandae eligendi quidem quisquam. Vel officia inventore quas."
	// 	 	},
	// 	    {
	// 	    	"heading":"Coaster 4",
	// 	     	"text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque saepe porro, dignissimos magni officia totam doloribus ratione odit inventore iste, dicta, laboriosam recusandae eligendi quidem quisquam. Vel officia inventore quas."
	// 	 	},
	// 	    {
	// 	    	"heading":"Coaster 5",
	// 	     	"text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque saepe porro, dignissimos magni officia totam doloribus ratione odit inventore iste, dicta, laboriosam recusandae eligendi quidem quisquam. Vel officia inventore quas."
	// 	 	},
	// 	    {
	// 	    	"heading":"Coaster 6",
	// 	     	"text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque saepe porro, dignissimos magni officia totam doloribus ratione odit inventore iste, dicta, laboriosam recusandae eligendi quidem quisquam. Vel officia inventore quas."
	// 	     }
	// ]};







	


	$(document).ready(function() {

		/* NAVIGATION */






		var $sections = $('.section');
		var $navLinks = $('.site_header a');
		var $site_header = $('.site_header');
		var pt = {
			inClass: 'fadeIn',
			outClass: '',
			isAnimating: false
		};



		$('.icon-menu').on('click', function() {
			$site_header.toggleClass('toggled');
		});


		

		$('.site_header').on('click', 'a', function(e) {

			e.preventDefault();

			$('body').addClass('init');

			var $this = $(this),
				$activeSec = $sections.filter('.active'),
				targetHref = $this.attr('href'),
				$targetSec = $sections.filter(targetHref);

			if ( $this.hasClass('on') || pt.isAnimating ) {
				return false;
			}

			$navLinks.removeClass('on');
			$this.addClass('on');

			// enable scroll bar on mobile on long pages
			$('body').removeClass('scroll');


			// set header class to determin background and color
			if( targetHref === '#about' ) {

				$('body').addClass('scroll');

				$site_header.addClass('show-bgc');
				
			} 

			else if ( targetHref === '#collections' ) {
				
				$site_header.removeClass('show-bgc');
				
			} else if ( targetHref === '#contact' ) {

				$('body').addClass('scroll');
				
				$site_header.addClass('show-bgc');
				
			} else if ( targetHref === '#hero' ) {
				
				$site_header.removeClass('show-bgc');
				
			}			



			if (targetHref === '#collections') {
				pt.outClass = 'moveToTop';
				pt.inClass = 'moveFromBottom';
			} else {
				pt.outClass = 'moveToRightFade';
				pt.inClass = 'fadeIn';
			}		
		


			$sections.not($activeSec).removeClass('active');

			$activeSec.addClass(pt.outClass + ' isAnimating');

			pt.isAnimating = true;

			$targetSec.addClass(pt.inClass + ' active');

			setTimeout(function() {
				$activeSec.removeClass( pt.outClass + ' active isAnimating');
				$targetSec.removeClass( pt.inClass );
				pt.isAnimating = false;
			}, 700);
					
		});



		/* HERO DOWN LINK */
		$('#down-link').on('click', function(e) {
			e.preventDefault();
			$('body').addClass('init');
			$('#collections-link').trigger('click');
		});





		/* SLIDES */

		$('.flexslider').flexslider({
			animation: "fade",
			slideshow: false,
			controlsContainer: $(".custom-controls-container"),
			customDirectionNav: $(".custom-navigation a"),
			start: function(slider){
			  $('body').removeClass('loading');
			}
		});



		
		/* HOMEPAGE LOADING */


		function clearOverlay() {
			$('.home-overlay').fadeOut(3000);
		}

		function showHeader() {
			// $('.site_header').show();
			$('#down-link').addClass('on');
		}

		function newSession() {
			if (Cookies.get('loaded')) {

			} else {
				Cookies.set('loaded', '1');
			}
		}
		setTimeout(clearOverlay, 1400);
		setTimeout(showHeader, 1400);















		/* Cards */
		var card = {};
		var dimmer = $('.dimmer');
		var cardContainer = $('.Card__container');
		var textOverlay = $('.Card__text__overlay');
		
		$('.Card').on('click', function(event) {

			var $this = $(this);

			card.isOpen = true;

			event.stopPropagation();

			$(this)
				.removeClass('return')
				.addClass('moveToCenter flipped');

			window.x = $(window).width() / 2;
		    window.y = $(window).height() / 2;
			
			var el = this;	

			if (el.getBoundingClientRect) {       

				var rect = el.getBoundingClientRect();
				card.x = rect.left;
				card.y = rect.top;
				card.w = rect.right - rect.left;
				card.h = rect.bottom - rect.top;
				// console.log(" Left: " + card.x + "\n Top: " + card.y + "\n Width: " + card.w + "\n Height: " + card.h);

				var leftTarget = window.x - (card.x + ( card.w / 2 )),
					topTarget = window.y - (card.y + ( card.h / 2 ));

				// prevent flipper card from getting too high and disapearing behind the header
				if (window.y < 320) {

					topTarget = 320 - (card.y + ( card.h / 2 ));
				}

				var	transformValue = 'translate(' + leftTarget + 'px, ' + topTarget + 'px)';


				var styles = {
				  'transform' : transformValue,
				  '-webkit-transform': transformValue
				};

				$(this).css(styles);

				dimmer
					.addClass('dimmed')
					.css('z-index', '3');

				cardContainer
					.css('z-index', 'auto');

				// pull back others
				$('.Card').not(this).addClass('pull-back');






				// inject text into overlay div to overcome blurry scaled text
				// var currCoasterId = $this.find('.Card__content').data('order'),
				// 	currCoasterHeading = coaster.back[currCoasterId].heading,
				// 	currCoasterText = coaster.back[currCoasterId].text;
			
				// var 
				// 	overlayLeftVal = window.x - 210,
				// 	overlayTopVal = window.y - 210,
				// 	textDivStyles = {
				// 	'top' : overlayTopVal + 'px',
				// 	'left' : overlayLeftVal + 'px'
				// };


				// textOverlay.css(textDivStyles);


				// $('<h2/>', {
				// 	'class': 'Card__content__heading',
				// 	html: currCoasterHeading
				// })
				// .appendTo( textOverlay.find('#text_target'));

				// $('<div/>', {
				// 	'class': 'Card__content__text',
				// 	html: currCoasterText
				// })
				// .appendTo( textOverlay.find('#text_target'));
				







			} else {
				alert ("Your browser does not support this example!");
			}
		
			
		});














		$('.Card__closeBtn').on('click', function(event) {

			event.stopPropagation();

			// textOverlay.find('#text_target').empty();


			var $thisCard = $(this).closest('.Card'),			
				transformValue = 'translate(0, 0)',
				styles = {
					'transform' : transformValue,
					'-webkit-transform': transformValue
				};			

			$thisCard.css(styles);

			dimmer.removeClass('dimmed');

			$thisCard
				.removeClass('moveToCenter')
				.addClass('return');

			// delay to allow for css transition 
			setTimeout(function() {
				dimmer.css('z-index', '1');
				cardContainer.css('z-index', '2');
				$thisCard.removeClass('return flipped');
			}, 800);

			$('.Card').each(function () {
			    $(this).removeAttr('style').removeClass('pull-back');

			});			
		});


















		/* CONTACT */
		$(function() {

			// Get the form.
			var form = $('#ajax-contact');

			// Get the messages div.
			var formMessages = $('#form-messages');

			// Set up an event listener for the contact form.
			$(form).submit(function(e) {
				// Stop the browser from submitting the form.
				e.preventDefault();

				// Serialize the form data.
				var formData = $(form).serialize();

				// Submit the form using AJAX.
				$.ajax({
					type: 'POST',
					url: $(form).attr('action'),
					data: formData
				})
				.done(function(response) {
					// Make sure that the formMessages div has the 'success' class.
					$(formMessages).removeClass('error');
					$(formMessages).addClass('success');

					// Set the message text.
					$(formMessages).text(response);

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

			});

		});





	
	$('.modal').on('click', function() {
		$('.Contact__box').addClass('activated');
		$('.contact-tint').addClass('active');
		$('.Contact__main').addClass('deactivate');
	});
	
	$('.Contact__closeBtn').on('click', function(event) {
		$('.Contact__box').removeClass('activated');
		$('.contact-tint').removeClass('active');
		$('.Contact__main').removeClass('deactivate');
	});
















	});

})(jQuery);