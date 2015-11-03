( function($) {

	$(document).ready(function() {

		var $sections = $('.section');

		// console.log($sections);

		$('.site_header').on('click', 'a', function(e) {
			e.preventDefault();
			var $this = $(this);			
			var $activeSec = $sections.filter('.active');
			var targetHref = $this.attr('href');
			var $targetSec = $sections.filter(targetHref);
			var outClass = 'pt-page-moveToLeftFade',
				inClass = 'active pt-page-moveToRight';			


			$sections.removeClass('active');
			$activeSec.removeClass('active');
			$targetSec.addClass('active');

			// // cycle through animations
			// $sections.removeClass('active pt-page-moveToLeftFade pt-page-moveToRight');
			// $activeSec.addClass(outClass);
			// $targetSec.addClass(inClass);


		});

	});

})(jQuery);