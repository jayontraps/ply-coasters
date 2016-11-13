
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
					<span class="event-date">Thursday 16th November</span> -
					<span class="event-link">
						<a href="http://www.cabbagesandfrocks.co.uk/index.html" target="_blank">Cabbages and Frocks Market</a>
					</span> -
					<span class="event-details">Marylebone Christmas Lights with Jennifer Saunders. 3-7pm. FREE</span>
				</li>


				<li class="event-li">
					<span class="event-date">Sunday 20th November</span> -
					<span class="event-link">
						<a href="http://anerleycraft.wixsite.com/anerley-craft-fair" target="_blank">Anerly Craft Fair</a>
					</span> -
					<span class="event-details">Anerly Town Hall, 3-7pm. FREE</span>
				</li>


				<li class="event-li">
					<span class="event-date">Saturday 26th November</span> -
					<span class="event-link">
						Church of The Holy Spirit Christmas Fair
					</span> -
					<span class="event-details">Narbonne Avenue, Clapham, London SW4 9JU. 12-4pm.</span>
				</li>


				<li class="event-li">
					<span class="event-date">Sunday 27th November</span> -
					<span class="event-link">
						<a href="http://www.friendsofdulwichcollege.co.uk/" target="_blank">Dulwich College Christmas Fair</a>
					</span> -
					<span class="event-details">Dulwich College, 11.30am - 4pm. £3 entry.</span>
				</li>


				<li class="event-li">
					<span class="event-date">Sunday 4th December</span> -
					<span class="event-link">
						<a href="https://www.morleycollege.ac.uk/events" target="_blank">Morley College Winter Fair</a>
					</span> -
					<span class="event-details">11am - 3pm. FREE</span>
				</li>


				<li class="event-li">
					<span class="event-date">Sunday 11th December</span> -
					<span class="event-link">
						<a href="http://thealmapub.com/home.html" target="_blank">Alma Christmas Fair</a>
					</span> -
					<span class="event-details">Church Road, Crystal Palace, London SE19 2TA . 11am - 5pm. FREE</span>
				</li>




				</ul>
				<div class="Button Button--contact modal">Say hello..</div>


			</div>

		</div>
	</div>
</div>








