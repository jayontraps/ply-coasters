( function($) {

	$(document).ready(function() {

		/* NAVIGATION */

		var $sections = $('.section');
		var $navLinks = $('.site_header a');
		var pt = {
			inClass: 'fadeIn',
			outClass: '',
			isAnimating: false
		};

		$('.site_header').on('click', 'a', function(e) {

			e.preventDefault();

			var $this = $(this),
				$activeSec = $sections.filter('.active'),
				targetHref = $this.attr('href'),
				$targetSec = $sections.filter(targetHref);

			if ( $this.hasClass('on') || pt.isAnimating ) {
				return false;
			}

			$navLinks.removeClass('on');
			$this.addClass('on');



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



		/* SHOW WHITE HEADER */

		$navLinks.on('click', function() {

			var $this = $(this),
				$thisHref = $this.attr('href'),
				$site_header = $('.site_header');

			if( $thisHref === '#about' ) {
				$site_header.addClass('show-bg');
			} else if ( $thisHref === '#collections' ) {
				$site_header.removeClass('show-bg');
			} else if ( $thisHref === '#contact' ) {
				$site_header.addClass('show-bg');
			} else if ( $thisHref === '#hero' ) {
				$site_header.removeClass('show-bg');
			}
		});




	});

})(jQuery);