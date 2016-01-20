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