
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
 					<span class="event-date">Sunday 18th November 10.30am–4.45pm</span>
 					<span class="event-link">
 						<a href="http://www.age-exchange.org.uk/get-involved/friends-of-age-exchange/blackheath-christmas-fair/" target="_blank">Blackheath Christmas Fair</a>
 					</span>
 					<span class="event-details">Blackheath Halls</span>
 				</li>


				<li class="event-li">
					<span class="event-date">Saturday 24th November 12-5pm</span>
					<span class="event-link">
						<a href="https://www.orleanshousegallery.org" target="_blank">Orleans House Shopping Weekend</a>
					</span>
					<span class="event-details">Orleans House Gallery, Riverside, Twickenham TW1 3DJ</span>
				</li>


				<li class="event-li">
					<span class="event-date">Sunday 25th November 11.30–4pm</span>
					<span class="event-link">
						<a href="http://www.friendsofdulwichcollege.co.uk" target="_blank">Dulwich College Christmas Fair</a>
					</span>
					<span class="event-details">Dulwich Common SE21 7LD</span>
				</li>


				<li class="event-li">
					<span class="event-date">Sunday 2nd December 11am–3pm</span>
					<span class="event-link">
						<a href="https://www.morleycollege.ac.uk/events/1288-morley-winter-fair" target="_blank">Morley College Winter Fair</a>
					</span>
					<span class="event-details">61 Westminster Bridge Road SE1 7HT</span>
				</li>

				<li class="event-li">
					<span class="event-date">Saturday 8th December 11am-6pm</span>
					<span class="event-link">
						<a href="https://www.pexmas.com/about-pexmas-2018/" target="_blank">Pexmas Festive Market</a>
					</span>
					<span class="event-details">Warwick Gardens, Lyndhurst Way, Peckham SE15 5AQ</span>
				</li>


				<li class="event-li">
					<span class="event-date">Saturday 8th December 12–6pm</span>
					<span class="event-link">
						<a href="https://www.facebook.com/events/272700780047173/" target="_blank">Brockley Christmas Market,</a>
					</span>
					<span class="event-details">Coulgate Street next to Brockley Station</span>
				</li>


				<li class="event-li">
					<span class="event-date">Sunday 9th December 11am–4pm</span>
					<span class="event-link">
						<a href="https://www.sccoop.org.uk/events" target="_blank">The Rookery Christmas Fair</a>
					</span>
					<span class="event-details">Streatham Common</span>
				</li>



				</ul>
				<div class="Button Button--contact modal">Say hello..</div>


			</div>

		</div>
	</div>
</div>
