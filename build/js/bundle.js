(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var domEls =  {
	'spinner' : $('.tcon-loader--spinner360'),	
	'$sections' : $('.section'),
	'$navLinks' : $('.site_header a'),
	'$site_header' : $('.site_header')	
};

module.exports = domEls;
},{}],2:[function(require,module,exports){
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
},{"./modules/animatePageTransitions":3,"./modules/contactForm":4,"./modules/scrollIt":5}],3:[function(require,module,exports){
var domEls = require('../domEls');

module.exports = function animatePageTransitions() {

	domEls.$site_header.on('click', 'a', function(e) {

		e.preventDefault();

		$('body').addClass('init');

		var $this = $(this),
			$activeSec = domEls.$sections.filter('.active'),
			targetHref = $this.attr('href'),
			$targetSec = domEls.$sections.filter(targetHref);

		if ( $this.hasClass('on') || pt.isAnimating ) {
			return false;
		}

		domEls.$navLinks.removeClass('on');
		$this.addClass('on');

		// enable scroll bar on mobile on long pages
		$('body').removeClass('scroll');

		if( targetHref === '#about' ) {

			$('body').addClass('scroll');
			
		} else if ( targetHref === '#contact' ) {

			$('body').addClass('scroll');

		} 







		if (targetHref === '#gallery') {
			pt.outClass = 'moveToTop';
			pt.inClass = 'moveFromBottom';
		} else {
			pt.outClass = 'moveToRightFade';
			pt.inClass = 'fadeIn';
		}		



		domEls.$sections.not($activeSec).removeClass('active');

		$activeSec.addClass(pt.outClass + ' isAnimating');

		pt.isAnimating = true;

		$targetSec.addClass(pt.inClass + ' active');

		setTimeout(function() {
			$activeSec.removeClass( pt.outClass + ' active isAnimating');
			$targetSec.removeClass( pt.inClass );
			pt.isAnimating = false;

			if( targetHref === '#about' ) {

				$('#js_highlighted_card .target').addClass('initial_state');
			
			}

		}, 700);
				
	});


};
},{"../domEls":1}],4:[function(require,module,exports){
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
},{"../domEls":1,"./submitForm":6}],5:[function(require,module,exports){
module.exports = function scrollIt() {



/**
 * ScrollIt
 * ScrollIt.js(scroll•it•dot•js) makes it easy to make long, vertically scrolling pages.
 *
 * Latest version: https://github.com/cmpolis/scrollIt.js
 *
 * License <https://github.com/cmpolis/scrollIt.js/blob/master/LICENSE.txt>
 */
(function($) {
    'use strict';

    var pluginName = 'ScrollIt',
        pluginVersion = '1.0.3';

    /*
     * OPTIONS
     */
    var defaults = {
        upKey: 38,
        downKey: 40,
        easing: 'linear',
        scrollTime: 600,
        activeClass: 'active',
        onPageChange: null,
        topOffset : { val: 0}
    };

    var listeners = {
        scroll : null,
        keydown: null,
        click: null,
    };


    $.scrollIt = function(options) {

        /*
         * DECLARATIONS
         */
        var settings = $.extend(defaults, options),
            active = 0,
            lastIndex = $('[data-scroll-index]:last').attr('data-scroll-index');

        /*
         * METHODS
         */

        /**
         * navigate
         *
         * sets up navigation animation
         */
        var navigate = function(ndx) {
            if(ndx < 0 || ndx > lastIndex) return;

            var targetTop = $('[data-scroll-index=' + ndx + ']').offset().top + settings.topOffset.val + 1;
            $('html,body').animate({
                scrollTop: targetTop,
                easing: settings.easing
            }, settings.scrollTime);
        };

        /**
         * doScroll
         *
         * runs navigation() when criteria are met
         */
        var doScroll = function (e) {
            var target = $(e.target).closest("[data-scroll-nav]").attr('data-scroll-nav') ||
            $(e.target).closest("[data-scroll-goto]").attr('data-scroll-goto');
            navigate(parseInt(target, 10));
        };

        /**
         * keyNavigation
         *
         * sets up keyboard navigation behavior
         */
        var keyNavigation = function (e) {
            var key = e.which;
            if($('html,body').is(':animated') && (key == settings.upKey || key == settings.downKey)) {
                return false;
            }
            if(key == settings.upKey && active > 0) {
                navigate(parseInt(active, 10) - 1);
                return false;
            } else if(key == settings.downKey && active < lastIndex) {
                navigate(parseInt(active, 10) + 1);
                return false;
            }
            return true;
        };

        /**
         * updateActive
         *
         * sets the currently active item
         */
        var updateActive = function(ndx) {
            if(settings.onPageChange && ndx && (active != ndx)) settings.onPageChange(ndx);

            active = ndx;
            $('[data-scroll-nav]').removeClass(settings.activeClass);
            $('[data-scroll-nav=' + ndx + ']').addClass(settings.activeClass);
        };

        /**
         * watchActive
         *
         * watches currently active item and updates accordingly
         */
        var watchActive = function() {
            var winTop = $(window).scrollTop();

            var visible = $('[data-scroll-index]').filter(function(ndx, div) {
                return winTop >= $(div).offset().top + settings.topOffset.val &&
                winTop < $(div).offset().top + (settings.topOffset.val) + $(div).outerHeight();
            });
            var newActive = visible.first().attr('data-scroll-index');
            updateActive(newActive);
        };

        /*
         * runs methods
         */
        $(window).on('scroll',watchActive).scroll();

        $(window).on('keydown', keyNavigation);

        var clickHandler = function(e){
            e.preventDefault();
            doScroll(e);
        };

        $('body').on('click','[data-scroll-nav], [data-scroll-goto]', clickHandler);

        listeners.scroll = watchActive;
        listeners.keydown = keyNavigation;
        listeners.click = clickHandler;
    };

    $.scrollIt.listeners = listeners;

    $.scrollIt.destroy = function () {
        $(window).off('scroll', listeners.scroll);
        $(window).off('keydown', listeners.keydown);
        $('body').off('click','[data-scroll-nav], [data-scroll-goto]', listeners.click);
    };











    var mQuery = window.matchMedia("(max-width: 1000px)");
    mQuery.addListener(my_function);
    my_function(mQuery);

    var topOffset = {
      val: -70
    };

    function my_function(mQuery) {
      if (mQuery.matches) {
        $('body').addClass('sm-screen');
        $.scrollIt({
             topOffset : topOffset
        });

      } else {
        $('body').removeClass('sm-screen');
        $.scrollIt.destroy();
      }
    } 





}(jQuery));



};
},{}],6:[function(require,module,exports){
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




},{"../domEls":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwL2RvbUVscy5qcyIsInNyYy9qcy9hcHAvZW50cnkiLCJzcmMvanMvYXBwL21vZHVsZXMvYW5pbWF0ZVBhZ2VUcmFuc2l0aW9ucy5qcyIsInNyYy9qcy9hcHAvbW9kdWxlcy9jb250YWN0Rm9ybS5qcyIsInNyYy9qcy9hcHAvbW9kdWxlcy9zY3JvbGxJdC5qcyIsInNyYy9qcy9hcHAvbW9kdWxlcy9zdWJtaXRGb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBkb21FbHMgPSAge1xuXHQnc3Bpbm5lcicgOiAkKCcudGNvbi1sb2FkZXItLXNwaW5uZXIzNjAnKSxcdFxuXHQnJHNlY3Rpb25zJyA6ICQoJy5zZWN0aW9uJyksXG5cdCckbmF2TGlua3MnIDogJCgnLnNpdGVfaGVhZGVyIGEnKSxcblx0JyRzaXRlX2hlYWRlcicgOiAkKCcuc2l0ZV9oZWFkZXInKVx0XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUVsczsiLCJ2YXIgc2Nyb2xsSXQgPSByZXF1aXJlKCcuL21vZHVsZXMvc2Nyb2xsSXQnKTtcbnZhciBjb250YWN0Rm9ybSA9IHJlcXVpcmUoJy4vbW9kdWxlcy9jb250YWN0Rm9ybScpO1xudmFyIGFuaW1hdGVQYWdlVHJhbnNpdGlvbnMgPSByZXF1aXJlKCcuL21vZHVsZXMvYW5pbWF0ZVBhZ2VUcmFuc2l0aW9ucycpO1xuXG5cbnNjcm9sbEl0KCk7XG5jb250YWN0Rm9ybSgpO1xuXG5cbiggZnVuY3Rpb24oJCkge1xuXG5cblx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cblx0XHQvKiBzZXR1cCAqL1x0XG5cblx0XHQvLyBzcGlubmVyID0gJCgnLnRjb24tbG9hZGVyLS1zcGlubmVyMzYwJyk7XHRcdFxuXHRcdC8vICRzZWN0aW9ucyA9ICQoJy5zZWN0aW9uJyk7XG5cdFx0Ly8gJG5hdkxpbmtzID0gJCgnLnNpdGVfaGVhZGVyIGEnKTtcblx0XHQvLyAkc2l0ZV9oZWFkZXIgPSAkKCcuc2l0ZV9oZWFkZXInKTtcblxuXHRcdHB0ID0ge1xuXHRcdFx0aW5DbGFzczogJ2ZhZGVJbicsXG5cdFx0XHRvdXRDbGFzczogJycsXG5cdFx0XHRpc0FuaW1hdGluZzogZmFsc2Vcblx0XHR9O1xuXG5cblxuXHQgICAgdmFyIG1lZGlhX3F1ZXJ5ID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWluLXdpZHRoOiAxMDAwcHgpXCIpO1xuXHQgICAgbWVkaWFfcXVlcnkuYWRkTGlzdGVuZXIoZnVuV3JhcHBlcik7XG5cdCAgICBmdW5XcmFwcGVyKG1lZGlhX3F1ZXJ5KTtcblxuXG5cdCAgICBmdW5jdGlvbiBmdW5XcmFwcGVyKG1lZGlhX3F1ZXJ5KSB7XG5cdCAgICAgIGlmIChtZWRpYV9xdWVyeS5tYXRjaGVzKSB7XG5cdCAgICAgICAgYW5pbWF0ZVBhZ2VUcmFuc2l0aW9ucygpO1xuXHQgICAgICAgIFxuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIC8vIHR1cm4gZXZlbnQgaGFuZGxlcnMgb2ZmXG5cdCAgICAgICAgJCgnLnNpdGVfaGVhZGVyJykub2ZmKCk7XG5cdCAgICAgICAgJCgnI2Rvd24tbGluaycpLm9mZigpOyAgXG5cdCAgICAgICAgaGVyb0Rvd25MaW5rKCk7IFxuXHQgICAgICB9XG5cdCAgICB9ICAgIFx0XHRcblxuXG5cdFx0XG5cblx0XHRmdW5jdGlvbiBoZXJvRG93bkxpbmsoKSB7XG5cdFx0XHQkKCcjZG93bi1saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdCQoJ2JvZHknKS5hZGRDbGFzcygnaW5pdCcpO1xuXHRcdFx0XHQkKCcjZ2FsbGVyeS1saW5rJykudHJpZ2dlcignY2xpY2snKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblx0XHQvKiBTTElERVMgKi9cblxuXHRcdCQoJy5mbGV4c2xpZGVyJykuZmxleHNsaWRlcih7XG5cdFx0XHRhbmltYXRpb246IFwiZmFkZVwiLFxuXHRcdFx0c2xpZGVzaG93OiBmYWxzZSxcblx0XHRcdGNvbnRyb2xzQ29udGFpbmVyOiAkKFwiLmN1c3RvbS1jb250cm9scy1jb250YWluZXJcIiksXG5cdFx0XHRjdXN0b21EaXJlY3Rpb25OYXY6ICQoXCIuY3VzdG9tLW5hdmlnYXRpb24gYVwiKSxcblx0XHRcdHN0YXJ0OiBmdW5jdGlvbihzbGlkZXIpe1xuXHRcdFx0ICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXG5cblxuXG5cblx0XHRcblx0XHQvKiBIT01FUEFHRSBMT0FESU5HICovXG5cblxuXHRcdGZ1bmN0aW9uIGNsZWFyT3ZlcmxheSgpIHtcblx0XHRcdCQoJy5ob21lLW92ZXJsYXknKS5mYWRlT3V0KDMwMDApO1xuXHRcdH1cblxuXHRcdHNldFRpbWVvdXQoY2xlYXJPdmVybGF5LCAxNDAwKTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblx0XHQvKiBDYXJkcyAqL1xuXHRcdGNhcmQgPSB7fTtcblx0XHR2YXIgZGltbWVyID0gJCgnLmRpbW1lcicpO1xuXHRcdHZhciBjYXJkQ29udGFpbmVyID0gJCgnLkNhcmRfX2NvbnRhaW5lcicpO1xuXG5cblxuXG5cblx0XHQvKiBpc29sYXRlIG9uZSBwYW5lbCBhbmQgcmVtb3ZlIGl0J3MgdGludCBvbiBsb2FkICovXG5cdFx0ZnVuY3Rpb24gcmV0dXJuVGludCgpIHtcblx0XHRcdCQoJy5DYXJkX19mcm9udC0tdGludCcpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdFx0ICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ29uJyk7XHRcdFx0ICAgXG5cdFx0XHQgICAgJCgnI2pzX2hpZ2hsaWdodGVkX2NhcmQgLnRhcmdldCcpLnJlbW92ZUNsYXNzKCdpbml0aWFsX3N0YXRlJyk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiByZW1vdmVUaW50KCkge1xuXHRcdFx0JCgnLkNhcmQtLTQgLkNhcmRfX2Zyb250LS10aW50JykuYWRkQ2xhc3MoJ29uJyk7XG5cdFx0fVxuXG5cdFx0JChjYXJkQ29udGFpbmVyKS5ob3Zlcihcblx0XHRcdGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoIWNhcmQuaXNPcGVuKSB7XG5cdFx0XHRcdFx0cmV0dXJuVGludCgpO1xuXHRcdFx0XHR9XG5cblx0XHRcdH0sIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoIWNhcmQuaXNPcGVuKSB7XG5cdFx0XHRcdFx0cmVtb3ZlVGludCgpO1xuXHRcdFx0XHR9IFxuXHRcdFx0fVxuXHRcdCk7XHRcdFxuXG5cblxuXG5cdFx0Lyoga2VlcCB0aW50IGhpZ2hsaWdodGVkIHdoaWxlIGhvdmVyZWQgb24gaWNvbiAqL1xuXHRcdCQoJy50YXJnZXQnKS5ob3ZlcihcblxuXHRcdFx0ZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCQodGhpcykucHJldigpLmFkZENsYXNzKCdoaWdobGlnaHQnKTtcblxuXHRcdFx0fSwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCQodGhpcykucHJldigpLnJlbW92ZUNsYXNzKCdoaWdobGlnaHQnKTtcblx0XHRcdH1cblx0XHQpO1x0XG5cblxuXG5cblx0XHRcblx0XHQkKCcuQ2FyZCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cblx0XHRcdHZhciAkdGhpcyA9ICQodGhpcyk7XG5cblx0XHRcdGNhcmQuaXNPcGVuID0gdHJ1ZTtcblxuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRcdCQodGhpcylcblx0XHRcdFx0LnJlbW92ZUNsYXNzKCdyZXR1cm4nKVxuXHRcdFx0XHQuYWRkQ2xhc3MoJ21vdmVUb0NlbnRlciBmbGlwcGVkJyk7XG5cblx0XHRcdHdpbmRvdy54ID0gJCh3aW5kb3cpLndpZHRoKCkgLyAyO1xuXHRcdCAgICB3aW5kb3cueSA9ICQod2luZG93KS5oZWlnaHQoKSAvIDI7XG5cdFx0XHRcblx0XHRcdHZhciBlbCA9IHRoaXM7XHRcblxuXHRcdFx0aWYgKGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCkgeyAgICAgICBcblxuXHRcdFx0XHR2YXIgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0XHRjYXJkLnggPSByZWN0LmxlZnQ7XG5cdFx0XHRcdGNhcmQueSA9IHJlY3QudG9wO1xuXHRcdFx0XHRjYXJkLncgPSByZWN0LnJpZ2h0IC0gcmVjdC5sZWZ0O1xuXHRcdFx0XHRjYXJkLmggPSByZWN0LmJvdHRvbSAtIHJlY3QudG9wO1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhcIiBMZWZ0OiBcIiArIGNhcmQueCArIFwiXFxuIFRvcDogXCIgKyBjYXJkLnkgKyBcIlxcbiBXaWR0aDogXCIgKyBjYXJkLncgKyBcIlxcbiBIZWlnaHQ6IFwiICsgY2FyZC5oKTtcblxuXHRcdFx0XHR2YXIgbGVmdFRhcmdldCA9IHdpbmRvdy54IC0gKGNhcmQueCArICggY2FyZC53IC8gMiApKSxcblx0XHRcdFx0XHR0b3BUYXJnZXQgPSB3aW5kb3cueSAtIChjYXJkLnkgKyAoIGNhcmQuaCAvIDIgKSk7XG5cblx0XHRcdFx0Ly8gcHJldmVudCBmbGlwcGVyIGNhcmQgZnJvbSBnZXR0aW5nIHRvbyBoaWdoIGFuZCBkaXNhcGVhcmluZyBiZWhpbmQgdGhlIGhlYWRlclxuXHRcdFx0XHRpZiAod2luZG93LnkgPCAzMjApIHtcblxuXHRcdFx0XHRcdHRvcFRhcmdldCA9IDMyMCAtIChjYXJkLnkgKyAoIGNhcmQuaCAvIDIgKSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXJcdHRyYW5zZm9ybVZhbHVlID0gJ3RyYW5zbGF0ZSgnICsgbGVmdFRhcmdldCArICdweCwgJyArIHRvcFRhcmdldCArICdweCknO1xuXG5cblx0XHRcdFx0dmFyIHN0eWxlcyA9IHtcblx0XHRcdFx0ICAndHJhbnNmb3JtJyA6IHRyYW5zZm9ybVZhbHVlLFxuXHRcdFx0XHQgICctd2Via2l0LXRyYW5zZm9ybSc6IHRyYW5zZm9ybVZhbHVlXG5cdFx0XHRcdH07XG5cblx0XHRcdFx0JCh0aGlzKS5jc3Moc3R5bGVzKTtcblxuXHRcdFx0XHRkaW1tZXJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2RpbW1lZCcpXG5cdFx0XHRcdFx0LmNzcygnei1pbmRleCcsICczJyk7XG5cblx0XHRcdFx0Y2FyZENvbnRhaW5lclxuXHRcdFx0XHRcdC5jc3MoJ3otaW5kZXgnLCAnYXV0bycpO1xuXG5cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGFsZXJ0IChcIllvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoaXMgZXhhbXBsZSFcIik7XG5cdFx0XHR9XG5cdFx0XG5cdFx0XHRcblx0XHR9KTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cdFx0JCgnLkNhcmRfX2Nsb3NlQnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcblxuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRcdHZhciAkdGhpc0NhcmQgPSAkKHRoaXMpLmNsb3Nlc3QoJy5DYXJkJyksXHRcdFx0XG5cdFx0XHRcdHRyYW5zZm9ybVZhbHVlID0gJ3RyYW5zbGF0ZSgwLCAwKScsXG5cdFx0XHRcdHN0eWxlcyA9IHtcblx0XHRcdFx0XHQndHJhbnNmb3JtJyA6IHRyYW5zZm9ybVZhbHVlLFxuXHRcdFx0XHRcdCctd2Via2l0LXRyYW5zZm9ybSc6IHRyYW5zZm9ybVZhbHVlXG5cdFx0XHRcdH07XHRcdFx0XG5cblx0XHRcdCR0aGlzQ2FyZC5jc3Moc3R5bGVzKTtcblxuXHRcdFx0ZGltbWVyLnJlbW92ZUNsYXNzKCdkaW1tZWQnKTtcblxuXHRcdFx0JHRoaXNDYXJkXG5cdFx0XHRcdC5yZW1vdmVDbGFzcygnbW92ZVRvQ2VudGVyJylcblx0XHRcdFx0LmFkZENsYXNzKCdyZXR1cm4nKTtcblxuXHRcdFx0Ly8gZGVsYXkgdG8gYWxsb3cgZm9yIGNzcyB0cmFuc2l0aW9uIFxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0ZGltbWVyLmNzcygnei1pbmRleCcsICcxJyk7XG5cdFx0XHRcdGNhcmRDb250YWluZXIuY3NzKCd6LWluZGV4JywgJzInKTtcblx0XHRcdFx0JHRoaXNDYXJkLnJlbW92ZUNsYXNzKCdyZXR1cm4gZmxpcHBlZCcpO1xuXHRcdFx0XHRjYXJkLmlzT3BlbiA9IGZhbHNlO1xuXHRcdFx0fSwgNTAwKTtcblxuXHRcdFx0JCgnLkNhcmQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdCAgICAkKHRoaXMpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG5cdFx0XHR9KTtcdFx0XHRcblx0XHR9KTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblx0XG5cdCQoJy5tb2RhbCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdCQoJy5Db250YWN0X19ib3gnKS5hZGRDbGFzcygnYWN0aXZhdGVkJyk7XG5cdFx0JCgnLmNvbnRhY3QtdGludCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHQkKCcuQ29udGFjdF9fbWFpbicpLmFkZENsYXNzKCdkZWFjdGl2YXRlJyk7XG5cdH0pO1xuXHRcblx0JCgnLkNvbnRhY3RfX2Nsb3NlQnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcblx0XHQkKCcuQ29udGFjdF9fYm94JykucmVtb3ZlQ2xhc3MoJ2FjdGl2YXRlZCcpO1xuXHRcdCQoJy5jb250YWN0LXRpbnQnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0JCgnLkNvbnRhY3RfX21haW4nKS5yZW1vdmVDbGFzcygnZGVhY3RpdmF0ZScpO1xuXHR9KTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblx0fSk7XG5cbn0pKGpRdWVyeSk7IiwidmFyIGRvbUVscyA9IHJlcXVpcmUoJy4uL2RvbUVscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFuaW1hdGVQYWdlVHJhbnNpdGlvbnMoKSB7XG5cblx0ZG9tRWxzLiRzaXRlX2hlYWRlci5vbignY2xpY2snLCAnYScsIGZ1bmN0aW9uKGUpIHtcblxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdCQoJ2JvZHknKS5hZGRDbGFzcygnaW5pdCcpO1xuXG5cdFx0dmFyICR0aGlzID0gJCh0aGlzKSxcblx0XHRcdCRhY3RpdmVTZWMgPSBkb21FbHMuJHNlY3Rpb25zLmZpbHRlcignLmFjdGl2ZScpLFxuXHRcdFx0dGFyZ2V0SHJlZiA9ICR0aGlzLmF0dHIoJ2hyZWYnKSxcblx0XHRcdCR0YXJnZXRTZWMgPSBkb21FbHMuJHNlY3Rpb25zLmZpbHRlcih0YXJnZXRIcmVmKTtcblxuXHRcdGlmICggJHRoaXMuaGFzQ2xhc3MoJ29uJykgfHwgcHQuaXNBbmltYXRpbmcgKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0ZG9tRWxzLiRuYXZMaW5rcy5yZW1vdmVDbGFzcygnb24nKTtcblx0XHQkdGhpcy5hZGRDbGFzcygnb24nKTtcblxuXHRcdC8vIGVuYWJsZSBzY3JvbGwgYmFyIG9uIG1vYmlsZSBvbiBsb25nIHBhZ2VzXG5cdFx0JCgnYm9keScpLnJlbW92ZUNsYXNzKCdzY3JvbGwnKTtcblxuXHRcdGlmKCB0YXJnZXRIcmVmID09PSAnI2Fib3V0JyApIHtcblxuXHRcdFx0JCgnYm9keScpLmFkZENsYXNzKCdzY3JvbGwnKTtcblx0XHRcdFxuXHRcdH0gZWxzZSBpZiAoIHRhcmdldEhyZWYgPT09ICcjY29udGFjdCcgKSB7XG5cblx0XHRcdCQoJ2JvZHknKS5hZGRDbGFzcygnc2Nyb2xsJyk7XG5cblx0XHR9IFxuXG5cblxuXG5cblxuXG5cdFx0aWYgKHRhcmdldEhyZWYgPT09ICcjZ2FsbGVyeScpIHtcblx0XHRcdHB0Lm91dENsYXNzID0gJ21vdmVUb1RvcCc7XG5cdFx0XHRwdC5pbkNsYXNzID0gJ21vdmVGcm9tQm90dG9tJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0cHQub3V0Q2xhc3MgPSAnbW92ZVRvUmlnaHRGYWRlJztcblx0XHRcdHB0LmluQ2xhc3MgPSAnZmFkZUluJztcblx0XHR9XHRcdFxuXG5cblxuXHRcdGRvbUVscy4kc2VjdGlvbnMubm90KCRhY3RpdmVTZWMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblxuXHRcdCRhY3RpdmVTZWMuYWRkQ2xhc3MocHQub3V0Q2xhc3MgKyAnIGlzQW5pbWF0aW5nJyk7XG5cblx0XHRwdC5pc0FuaW1hdGluZyA9IHRydWU7XG5cblx0XHQkdGFyZ2V0U2VjLmFkZENsYXNzKHB0LmluQ2xhc3MgKyAnIGFjdGl2ZScpO1xuXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdCRhY3RpdmVTZWMucmVtb3ZlQ2xhc3MoIHB0Lm91dENsYXNzICsgJyBhY3RpdmUgaXNBbmltYXRpbmcnKTtcblx0XHRcdCR0YXJnZXRTZWMucmVtb3ZlQ2xhc3MoIHB0LmluQ2xhc3MgKTtcblx0XHRcdHB0LmlzQW5pbWF0aW5nID0gZmFsc2U7XG5cblx0XHRcdGlmKCB0YXJnZXRIcmVmID09PSAnI2Fib3V0JyApIHtcblxuXHRcdFx0XHQkKCcjanNfaGlnaGxpZ2h0ZWRfY2FyZCAudGFyZ2V0JykuYWRkQ2xhc3MoJ2luaXRpYWxfc3RhdGUnKTtcblx0XHRcdFxuXHRcdFx0fVxuXG5cdFx0fSwgNzAwKTtcblx0XHRcdFx0XG5cdH0pO1xuXG5cbn07IiwidmFyIGRvbUVscyA9IHJlcXVpcmUoJy4uL2RvbUVscycpO1xudmFyIHN1Ym1pdEZvcm0gPSByZXF1aXJlKCcuL3N1Ym1pdEZvcm0nKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29udGFjdEZvcm0oKSB7XG5cblx0JChmdW5jdGlvbigpIHtcblx0XHRcblx0XHQkKCcjYWpheC1jb250YWN0JykudmFsaWRhdGUoe1xuXHRcdFx0c3VibWl0SGFuZGxlcjogZnVuY3Rpb24oZm9ybSkge1xuXHRcdFx0XHRzdWJtaXRGb3JtKGZvcm0pO1x0XHRcdFxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdH0pO1xuXG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2Nyb2xsSXQoKSB7XG5cblxuXG4vKipcbiAqIFNjcm9sbEl0XG4gKiBTY3JvbGxJdC5qcyhzY3JvbGzigKJpdOKAomRvdOKAompzKSBtYWtlcyBpdCBlYXN5IHRvIG1ha2UgbG9uZywgdmVydGljYWxseSBzY3JvbGxpbmcgcGFnZXMuXG4gKlxuICogTGF0ZXN0IHZlcnNpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9jbXBvbGlzL3Njcm9sbEl0LmpzXG4gKlxuICogTGljZW5zZSA8aHR0cHM6Ly9naXRodWIuY29tL2NtcG9saXMvc2Nyb2xsSXQuanMvYmxvYi9tYXN0ZXIvTElDRU5TRS50eHQ+XG4gKi9cbihmdW5jdGlvbigkKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIHBsdWdpbk5hbWUgPSAnU2Nyb2xsSXQnLFxuICAgICAgICBwbHVnaW5WZXJzaW9uID0gJzEuMC4zJztcblxuICAgIC8qXG4gICAgICogT1BUSU9OU1xuICAgICAqL1xuICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgdXBLZXk6IDM4LFxuICAgICAgICBkb3duS2V5OiA0MCxcbiAgICAgICAgZWFzaW5nOiAnbGluZWFyJyxcbiAgICAgICAgc2Nyb2xsVGltZTogNjAwLFxuICAgICAgICBhY3RpdmVDbGFzczogJ2FjdGl2ZScsXG4gICAgICAgIG9uUGFnZUNoYW5nZTogbnVsbCxcbiAgICAgICAgdG9wT2Zmc2V0IDogeyB2YWw6IDB9XG4gICAgfTtcblxuICAgIHZhciBsaXN0ZW5lcnMgPSB7XG4gICAgICAgIHNjcm9sbCA6IG51bGwsXG4gICAgICAgIGtleWRvd246IG51bGwsXG4gICAgICAgIGNsaWNrOiBudWxsLFxuICAgIH07XG5cblxuICAgICQuc2Nyb2xsSXQgPSBmdW5jdGlvbihvcHRpb25zKSB7XG5cbiAgICAgICAgLypcbiAgICAgICAgICogREVDTEFSQVRJT05TXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgc2V0dGluZ3MgPSAkLmV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyksXG4gICAgICAgICAgICBhY3RpdmUgPSAwLFxuICAgICAgICAgICAgbGFzdEluZGV4ID0gJCgnW2RhdGEtc2Nyb2xsLWluZGV4XTpsYXN0JykuYXR0cignZGF0YS1zY3JvbGwtaW5kZXgnKTtcblxuICAgICAgICAvKlxuICAgICAgICAgKiBNRVRIT0RTXG4gICAgICAgICAqL1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBuYXZpZ2F0ZVxuICAgICAgICAgKlxuICAgICAgICAgKiBzZXRzIHVwIG5hdmlnYXRpb24gYW5pbWF0aW9uXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgbmF2aWdhdGUgPSBmdW5jdGlvbihuZHgpIHtcbiAgICAgICAgICAgIGlmKG5keCA8IDAgfHwgbmR4ID4gbGFzdEluZGV4KSByZXR1cm47XG5cbiAgICAgICAgICAgIHZhciB0YXJnZXRUb3AgPSAkKCdbZGF0YS1zY3JvbGwtaW5kZXg9JyArIG5keCArICddJykub2Zmc2V0KCkudG9wICsgc2V0dGluZ3MudG9wT2Zmc2V0LnZhbCArIDE7XG4gICAgICAgICAgICAkKCdodG1sLGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IHRhcmdldFRvcCxcbiAgICAgICAgICAgICAgICBlYXNpbmc6IHNldHRpbmdzLmVhc2luZ1xuICAgICAgICAgICAgfSwgc2V0dGluZ3Muc2Nyb2xsVGltZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGRvU2Nyb2xsXG4gICAgICAgICAqXG4gICAgICAgICAqIHJ1bnMgbmF2aWdhdGlvbigpIHdoZW4gY3JpdGVyaWEgYXJlIG1ldFxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIGRvU2Nyb2xsID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KFwiW2RhdGEtc2Nyb2xsLW5hdl1cIikuYXR0cignZGF0YS1zY3JvbGwtbmF2JykgfHxcbiAgICAgICAgICAgICQoZS50YXJnZXQpLmNsb3Nlc3QoXCJbZGF0YS1zY3JvbGwtZ290b11cIikuYXR0cignZGF0YS1zY3JvbGwtZ290bycpO1xuICAgICAgICAgICAgbmF2aWdhdGUocGFyc2VJbnQodGFyZ2V0LCAxMCkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBrZXlOYXZpZ2F0aW9uXG4gICAgICAgICAqXG4gICAgICAgICAqIHNldHMgdXAga2V5Ym9hcmQgbmF2aWdhdGlvbiBiZWhhdmlvclxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIGtleU5hdmlnYXRpb24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIGtleSA9IGUud2hpY2g7XG4gICAgICAgICAgICBpZigkKCdodG1sLGJvZHknKS5pcygnOmFuaW1hdGVkJykgJiYgKGtleSA9PSBzZXR0aW5ncy51cEtleSB8fCBrZXkgPT0gc2V0dGluZ3MuZG93bktleSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihrZXkgPT0gc2V0dGluZ3MudXBLZXkgJiYgYWN0aXZlID4gMCkge1xuICAgICAgICAgICAgICAgIG5hdmlnYXRlKHBhcnNlSW50KGFjdGl2ZSwgMTApIC0gMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIGlmKGtleSA9PSBzZXR0aW5ncy5kb3duS2V5ICYmIGFjdGl2ZSA8IGxhc3RJbmRleCkge1xuICAgICAgICAgICAgICAgIG5hdmlnYXRlKHBhcnNlSW50KGFjdGl2ZSwgMTApICsgMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHVwZGF0ZUFjdGl2ZVxuICAgICAgICAgKlxuICAgICAgICAgKiBzZXRzIHRoZSBjdXJyZW50bHkgYWN0aXZlIGl0ZW1cbiAgICAgICAgICovXG4gICAgICAgIHZhciB1cGRhdGVBY3RpdmUgPSBmdW5jdGlvbihuZHgpIHtcbiAgICAgICAgICAgIGlmKHNldHRpbmdzLm9uUGFnZUNoYW5nZSAmJiBuZHggJiYgKGFjdGl2ZSAhPSBuZHgpKSBzZXR0aW5ncy5vblBhZ2VDaGFuZ2UobmR4KTtcblxuICAgICAgICAgICAgYWN0aXZlID0gbmR4O1xuICAgICAgICAgICAgJCgnW2RhdGEtc2Nyb2xsLW5hdl0nKS5yZW1vdmVDbGFzcyhzZXR0aW5ncy5hY3RpdmVDbGFzcyk7XG4gICAgICAgICAgICAkKCdbZGF0YS1zY3JvbGwtbmF2PScgKyBuZHggKyAnXScpLmFkZENsYXNzKHNldHRpbmdzLmFjdGl2ZUNsYXNzKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogd2F0Y2hBY3RpdmVcbiAgICAgICAgICpcbiAgICAgICAgICogd2F0Y2hlcyBjdXJyZW50bHkgYWN0aXZlIGl0ZW0gYW5kIHVwZGF0ZXMgYWNjb3JkaW5nbHlcbiAgICAgICAgICovXG4gICAgICAgIHZhciB3YXRjaEFjdGl2ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHdpblRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblxuICAgICAgICAgICAgdmFyIHZpc2libGUgPSAkKCdbZGF0YS1zY3JvbGwtaW5kZXhdJykuZmlsdGVyKGZ1bmN0aW9uKG5keCwgZGl2KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpblRvcCA+PSAkKGRpdikub2Zmc2V0KCkudG9wICsgc2V0dGluZ3MudG9wT2Zmc2V0LnZhbCAmJlxuICAgICAgICAgICAgICAgIHdpblRvcCA8ICQoZGl2KS5vZmZzZXQoKS50b3AgKyAoc2V0dGluZ3MudG9wT2Zmc2V0LnZhbCkgKyAkKGRpdikub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIG5ld0FjdGl2ZSA9IHZpc2libGUuZmlyc3QoKS5hdHRyKCdkYXRhLXNjcm9sbC1pbmRleCcpO1xuICAgICAgICAgICAgdXBkYXRlQWN0aXZlKG5ld0FjdGl2ZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLypcbiAgICAgICAgICogcnVucyBtZXRob2RzXG4gICAgICAgICAqL1xuICAgICAgICAkKHdpbmRvdykub24oJ3Njcm9sbCcsd2F0Y2hBY3RpdmUpLnNjcm9sbCgpO1xuXG4gICAgICAgICQod2luZG93KS5vbigna2V5ZG93bicsIGtleU5hdmlnYXRpb24pO1xuXG4gICAgICAgIHZhciBjbGlja0hhbmRsZXIgPSBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGRvU2Nyb2xsKGUpO1xuICAgICAgICB9O1xuXG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCdbZGF0YS1zY3JvbGwtbmF2XSwgW2RhdGEtc2Nyb2xsLWdvdG9dJywgY2xpY2tIYW5kbGVyKTtcblxuICAgICAgICBsaXN0ZW5lcnMuc2Nyb2xsID0gd2F0Y2hBY3RpdmU7XG4gICAgICAgIGxpc3RlbmVycy5rZXlkb3duID0ga2V5TmF2aWdhdGlvbjtcbiAgICAgICAgbGlzdGVuZXJzLmNsaWNrID0gY2xpY2tIYW5kbGVyO1xuICAgIH07XG5cbiAgICAkLnNjcm9sbEl0Lmxpc3RlbmVycyA9IGxpc3RlbmVycztcblxuICAgICQuc2Nyb2xsSXQuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh3aW5kb3cpLm9mZignc2Nyb2xsJywgbGlzdGVuZXJzLnNjcm9sbCk7XG4gICAgICAgICQod2luZG93KS5vZmYoJ2tleWRvd24nLCBsaXN0ZW5lcnMua2V5ZG93bik7XG4gICAgICAgICQoJ2JvZHknKS5vZmYoJ2NsaWNrJywnW2RhdGEtc2Nyb2xsLW5hdl0sIFtkYXRhLXNjcm9sbC1nb3RvXScsIGxpc3RlbmVycy5jbGljayk7XG4gICAgfTtcblxuXG5cblxuXG5cblxuXG5cblxuXG4gICAgdmFyIG1RdWVyeSA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogMTAwMHB4KVwiKTtcbiAgICBtUXVlcnkuYWRkTGlzdGVuZXIobXlfZnVuY3Rpb24pO1xuICAgIG15X2Z1bmN0aW9uKG1RdWVyeSk7XG5cbiAgICB2YXIgdG9wT2Zmc2V0ID0ge1xuICAgICAgdmFsOiAtNzBcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gbXlfZnVuY3Rpb24obVF1ZXJ5KSB7XG4gICAgICBpZiAobVF1ZXJ5Lm1hdGNoZXMpIHtcbiAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdzbS1zY3JlZW4nKTtcbiAgICAgICAgJC5zY3JvbGxJdCh7XG4gICAgICAgICAgICAgdG9wT2Zmc2V0IDogdG9wT2Zmc2V0XG4gICAgICAgIH0pO1xuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ3NtLXNjcmVlbicpO1xuICAgICAgICAkLnNjcm9sbEl0LmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICB9IFxuXG5cblxuXG5cbn0oalF1ZXJ5KSk7XG5cblxuXG59OyIsInZhciBkb21FbHMgPSByZXF1aXJlKCcuLi9kb21FbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzdWJtaXRGb3JtKGZvcm0pIHtcblxuXHR2YXIgZm9ybU1lc3NhZ2VzID0gJCgnI2Zvcm0tbWVzc2FnZXMnKTtcblxuXHQvLyBkaXNwbGF5IHRoZSBzcGlubmVyXG5cdGRvbUVscy5zcGlubmVyLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuXG5cdC8vIFNlcmlhbGl6ZSB0aGUgZm9ybSBkYXRhLlxuXHR2YXIgZm9ybURhdGEgPSAkKGZvcm0pLnNlcmlhbGl6ZSgpO1xuXG5cdGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcblxuXHQkLmFqYXgoe1xuXHRcdHR5cGU6ICdQT1NUJyxcblx0XHR1cmw6ICQoZm9ybSkuYXR0cignYWN0aW9uJyksXG5cdFx0ZGF0YTogZm9ybURhdGFcblx0fSlcblx0LmRvbmUoZnVuY3Rpb24ocmVzcG9uc2UpIHtcblx0XHQvLyBNYWtlIHN1cmUgdGhhdCB0aGUgZm9ybU1lc3NhZ2VzIGRpdiBoYXMgdGhlICdzdWNjZXNzJyBjbGFzcy5cblx0XHQkKGZvcm1NZXNzYWdlcykucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG5cdFx0JChmb3JtTWVzc2FnZXMpLmFkZENsYXNzKCdzdWNjZXNzJyk7XG5cblx0XHQvLyBoaWRlIHRoZSBzcGlubmVyXG5cdFx0ZG9tRWxzLnNwaW5uZXIuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcblxuXHRcdC8vIFNldCB0aGUgbWVzc2FnZSB0ZXh0LlxuXHRcdC8vICQoZm9ybU1lc3NhZ2VzKS50ZXh0KHJlc3BvbnNlKTsgLy8gcmVzcG9uc2UgPSBzZXJ2ZXIgZGV0YWlsc1xuXHRcdCQoZm9ybU1lc3NhZ2VzKS50ZXh0KCdUaGFua3MhIFlvdXIgbWVzc2FnZSBoYXMgYmVlbiByZWNpZXZlZC4nKTtcblxuXG5cdFx0Ly8gQ2xlYXIgdGhlIGZvcm0uXG5cdFx0JCgnI25hbWUnKS52YWwoJycpO1xuXHRcdCQoJyNlbWFpbCcpLnZhbCgnJyk7XG5cdFx0JCgnI21lc3NhZ2UnKS52YWwoJycpO1xuXHR9KVxuXHQuZmFpbChmdW5jdGlvbihkYXRhKSB7XG5cdFx0Ly8gTWFrZSBzdXJlIHRoYXQgdGhlIGZvcm1NZXNzYWdlcyBkaXYgaGFzIHRoZSAnZXJyb3InIGNsYXNzLlxuXHRcdCQoZm9ybU1lc3NhZ2VzKS5yZW1vdmVDbGFzcygnc3VjY2VzcycpO1xuXHRcdCQoZm9ybU1lc3NhZ2VzKS5hZGRDbGFzcygnZXJyb3InKTtcblxuXHRcdC8vIFNldCB0aGUgbWVzc2FnZSB0ZXh0LlxuXHRcdGlmIChkYXRhLnJlc3BvbnNlVGV4dCAhPT0gJycpIHtcblx0XHRcdCQoZm9ybU1lc3NhZ2VzKS50ZXh0KGRhdGEucmVzcG9uc2VUZXh0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JChmb3JtTWVzc2FnZXMpLnRleHQoJ09vcHMhIEFuIGVycm9yIG9jY3VyZWQgYW5kIHlvdXIgbWVzc2FnZSBjb3VsZCBub3QgYmUgc2VudC4nKTtcblx0XHR9XG5cdH0pO1x0XG59O1xuXG5cblxuIl19
