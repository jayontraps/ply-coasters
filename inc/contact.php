
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
				 	<span class="event-date">Sunday 20th May 11am–7pm </span>
				 	<span class="event-link">
				 		<a href="http://greenwichpeninsula.co.uk/whats-on/urban-village-fete-2018/" target="_blank">Urban Village Fete</a>
				 	</span>
				 	<span class="event-details">Greenwich Peninsula</span>
				 </li>

				 <li class="event-li">
				 	<span class="event-date">Saturday 16th June</span>
				 	<span class="event-link">
				 		<a href="https://crystalpalacefestival.org/locations/" target="_blank">Crystal Palace Festival</a>
				 	</span>
				 	<span class="event-details">Crystal Palace Park</span>
				 </li>

				 <li class="event-li">
					 <span class="event-date">Sunday 17th June - 10am - 4pm</span>
					 <span class="event-link">
						 Heritage Craft Market at the Crystal Palace Subway
					 </span>
					 <span class="event-details">Near Bus stop B, Crystal Palace Parade</span>
				 </li>


				 <li class="event-li">
				 	<span class="event-date">Sunday 24th June</span>
				 	<span class="event-link">
				 		Flea @ Flat Iron Square
				 	</span>
				 	<span class="event-details">53 Southwark Street, London SE1 1RU</span>
				 </li>


				 <li class="event-li">
					 <span class="event-date">Saturday 30th June 12-5pm</span>
					 <span class="event-link">
						 <a href="http://www.abbevillefete.com" target="_blank">Abbeville Fete</a>
					 </span>
					 <span class="event-details">Clapham</span>
				 </li>

				</ul>
				<div class="Button Button--contact modal">Say hello..</div>


			</div>

		</div>
	</div>
</div>
