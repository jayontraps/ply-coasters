
<div class="contact-tint"></div>

<div class="Contact__box animated">

	<div class="Contact__closeBtn">
		<svg class="icon icon-close"><use xlink:href="#icon-close"></use></svg>
	</div>

	<div class="Contact__box_content">

		<form id="ajax-contact" method="post" action="contact.php">

		<fieldset>
		  <input id="name" name="name" minlength="2" placeholder="Your name" type="text" tabindex="1" required autofocus>
		</fieldset>

		<fieldset>
		  <input id="email" name="email" placeholder="Your Email Address" type="email" tabindex="2" required >
		</fieldset>

		<fieldset>
		  <textarea id="message" name="message" placeholder="Type your Message Here...." tabindex="3" required></textarea>
		  <input id="" type="hidden" class="test" value="" />
		</fieldset>

		<fieldset>
		  <button name="submit" type="submit" id="contact-submit" class="Button" data-submit="...Sending">Submit</button>
		</fieldset>
		</form>

	</div>

	<span class="tcon-loader--spinner360" aria-label="loading">
	  <span class="tcon-visuallyhidden">loading</span>
	</span>

	<div id="form-messages"></div>

</div>	<!-- .Contact_box -->



<div class="outer">
	<div class="inner">
		<div class="centered">

			<div class="Contact__main animated">

				<h1 class="Contact__main__heading">Upcoming events</h1>


				<ul class="event-list">
<!-- template -->
<!--
				<li class="event-li">
					<span class="event-date"></span>
					<span class="event-link">
						<a href="" target="_blank"></a>
					</span>
					<span class="event-details"></span>
				</li>
 -->



				 <!-- new items.. -->
				 <li class="event-li">
 					<span class="event-date">Saturday 20th April 12pm–6pm</span>
 					<span class="event-link">
 						<a href="https://www.london.gov.uk/events/2019-04-20/feast-st-george-2019#acc-i-56710" target="_blank">Feast of St George</a>
 					</span>
 					<span class="event-details">Trafalgar Square, Westminster, London WC2N 5DN. FREE</span>
 				</li>

				<li class="event-li">
					<span class="event-date">4-6th May 2019, 10am–6pm (Mon 5pm)</span>
					<span class="event-link">
						<a href="https://www.waterways.org.uk/events_festivals/canalway_cavalcade/pdfs/iwa_canalway_cavalcade_leaflet_2019" target="_blank">IWA Canalway Cavalcade</a>
					</span>
					<span class="event-details">Little Venice London W9. FREE</span>
				</li>

				<li class="event-li">
					<span class="event-date">Saturday 13th July</span>
					<span class="event-link">
						<a href="http://www.barnes-ca.org/barnesfair/" target="_blank">Barnes Fair</a>
					</span>
					<span class="event-details">Barnes Common, London FREE</span>
				</li>

				</ul>
				<div class="Button Button--contact modal">Say hello..</div>


			</div>

		</div>
	</div>
</div>
