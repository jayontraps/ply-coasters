var scrollIt = require('./modules/scrollIt');
var contactForm = require('./modules/contactForm');
var animatePageTransitions = require('./modules/animatePageTransitions');


scrollIt();
contactForm();


( function($) {


	$(document).ready(function() {

		/* setup */	

		// spinner = $('.tcon-loader--spinner360');		
		// $sections = $('.section');
		// $navLinks = $('.site_header a');
		// $site_header = $('.site_header');

		pt = {
			inClass: 'fadeIn',
			outClass: '',
			isAnimating: false
		};



	    var media_query = window.matchMedia("(min-width: 1000px)");
	    media_query.addListener(funWrapper);
	    funWrapper(media_query);


	    function funWrapper(media_query) {
	      if (media_query.matches) {
	        animatePageTransitions();
	        
	      } else {
	        // turn event handlers off
	        $('.site_header').off();
	        $('#down-link').off();  
	        heroDownLink(); 
	      }
	    }    		


		

		function heroDownLink() {
			$('#down-link').on('click', function(e) {
				e.preventDefault();
				$('body').addClass('init');
				$('#gallery-link').trigger('click');
			});
		}
		















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

		setTimeout(clearOverlay, 1400);





















		/* Cards */
		card = {};
		var dimmer = $('.dimmer');
		var cardContainer = $('.Card__container');





		/* isolate one panel and remove it's tint on load */
		function returnTint() {
			$('.Card__front--tint').each(function () {
			    $(this).removeClass('on');			   
			    $('#js_highlighted_card .target').removeClass('initial_state');
			});
		}

		function removeTint() {
			$('.Card--4 .Card__front--tint').addClass('on');
		}

		$(cardContainer).hover(
			function() {
				if (!card.isOpen) {
					returnTint();
				}

			}, function() {
				if (!card.isOpen) {
					removeTint();
				} 
			}
		);		




		/* keep tint highlighted while hovered on icon */
		$('.target').hover(

			function() {
				$(this).prev().addClass('highlight');

			}, function() {
				$(this).prev().removeClass('highlight');
			}
		);	




		
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


			} else {
				alert ("Your browser does not support this example!");
			}
		
			
		});














		$('.Card__closeBtn').on('click', function(event) {

			event.stopPropagation();

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
				card.isOpen = false;
			}, 500);

			$('.Card').each(function () {
			    $(this).removeAttr('style');
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