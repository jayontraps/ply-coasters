
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
					 <span class="event-date">
						 	Friday 22 November 12noon-7pm<br>
						 	Saturday 23 November 10am-6pm<br>
					 		Sunday 24 November 10am-5pm.
					</span>
					 <span class="event-link">
						 <a href="http://scandimarket.co.uk/events/scandinavian-christmas-market-2019/" target="_blank">Scandinavian Market.</a>
					 </span>
					 <span class="event-details">Albion Street Rotherhithe.</span>
				 </li>

				 <li class="event-li">
					 <span class="event-date">Saturday 30th November 10am-3pm.</span>
					 <span class="event-link">
						 <a href="https://weareccfm.com/locations/oval/" target="_blank">Oval Farmers’ Market.</a>
					 </span>
					 <span class="event-details">St Marks Church, Oval.</span>
				 </li>

				 <li class="event-li">
					 <span class="event-date">Sunday 1st December,</span>

					 <span class="event-details">Northcote Road Christmas Market SW11.</span>
				 </li>

				 <li class="event-li">
					 <span class="event-date">Saturday 7th December,</span>
					 <span class="event-link">
						 <a href="https://www.pexmas.com/whats-on" target="_blank">Pexmas,</a>
					 </span>
					 <span class="event-details">Copeland Park & Bussey Building.</span>
				 </li>

				 <li class="event-li">
					 <span class="event-date">Saturday 7th December 12noon,</span>

					 <span class="event-details">Brockley Cross Christmas Market.</span>
				 </li>

				 <li class="event-li">
					 <span class="event-date">Sunday 8th December,</span>

					 <span class="event-details">The Rookery Christmas Fair, Streatham.</span>
				 </li>

				 <li class="event-li">
					 <span class="event-date">Sunday 15th December, 10am-3pm,</span>

					 <span class="event-details">Horniman Christmas Market, Horniman Museum and Gardens.</span>
				 </li>
				 
				</ul>
				<div class="Button Button--contact modal">Say hello..</div>


			</div>

		</div>
	</div>
</div>
