
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


				<li class="event-li">
					<span class="event-date">Sunday 23rd April</span> -
					<span class="event-link">
						<a href="http://classiccarbootsale.co.uk/" target="_blank">Classic Car Boot Sale</a>
					</span> -
					<span class="event-details">Lewis Cubitt Square, King’s Cross, London, N1C 4UG. 10am - 6pm</span>
				</li>

				<li class="event-li">
					<span class="event-date">Saturday 29th April - Monday 1st May</span>
					<span class="event-link">
						<a href="https://www.waterways.org.uk/events_festivals/canalway_cavalcade/iwa_canalway_cavalcade" target="_blank">Canalway Cavalcade</a>
					</span>
					<span class="event-details">Little Venice, London</span>
				</li>
				<li class="event-li">
					<span class="event-date">Sunday 21st May</span>
					<span class="event-link">
						<a href="http://weareurbanvillage.co.uk/" target="_blank">Urban Village Fete</a>
					</span>
					<span class="event-details">Greenwich Peninsula (Opposite 02 Centre)</span>
				</li>

				<li class="event-li">
					<span class="event-date">Saturday 24th June</span>
					<span class="event-link">
						<a href="http://www.abbevillefete.com" target="_blank">Abbeville Fete</a>
					</span>
					<span class="event-details">Abbeville Road, Clapham, SW4 9JX. 12-4pm</span>
				</li>
				<li class="event-li">
					<span class="event-date">Saturday 8th July</span>
					<span class="event-link">
						<a href="http://www.barnes-ca.org/barnesfair/" target="_blank">Barnes Fair</a>
					</span>
					<span class="event-details">9.30-5.30pm</span>
				</li>
				<li class="event-li">
					<span class="event-date">Saturday 12th August</span>
					<span class="event-link">
						<a href="https://www.facebook.com/bowies.beckenham.oddity/" target="_blank">Beckenham Bowie Oddity</a>
					</span>
					<span class="event-details">Beckenham Recreation Ground, 12-8pm</span>
				</li>

				</ul>
				<div class="Button Button--contact modal">Say hello..</div>


			</div>

		</div>
	</div>
</div>








