
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
					<span class="event-date">Sunday 7th Feb 2016</span> - 
					<span class="event-link">
						<a href="https://www.facebook.com/events/164736044221639" target="_blank">So Last Century</a>
					</span> - 
					<span class="event-details">Venue 28, Beckenham, London.</span>
				</li>

				<li class="event-li">
					<span class="event-date">Friday 27th and Saturday 28th Feb 2016</span> - 
					<span class="event-link">
						<a href="https://www.rhs.org.uk/shows-events/rhs-london-shows/rhs-london-botanical-art-show" target="_blank">RHS Botanical Art Fair</a>
					</span> - 
					<span class="event-details">London.</span>
				</li>

				<li class="event-li">
					<span class="event-date">Saturday 16th and and Sunday 17th April 2016</span> - 
					<span class="event-link">
						<a href="http://classiccarbootsale.co.uk" target="_blank">Classic Car Boot Sale</a>
					</span> - 
					<span class="event-details">Kings Cross, London.</span>
				</li>

				<li class="event-li">
					<span class="event-date">Saturday 30th April, Sunday 1st and Monday 2nd May 2016</span> - 
					<span class="event-link">
						<a href="https://www.waterways.org.uk/events_festivals/canalway_cavalcade/iwa_canalway_cavalcade" target="_blank">Canalway Cavalcade</a>
					</span> - 
					<span class="event-details">Little Venice, London.</span>
				</li>


			
					
				</ul>
				<div class="Button Button--contact modal">Say hello..</div>


			</div>

		</div>
	</div>
</div>








