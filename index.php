<?php include 'inc/head.php'; ?>

<?php include 'inc/svg-defs.php'; ?>

<div class="container"> 


	<header class="site_header">
		<div class=" inner_wrap">

			<div class="logo">

				<a class="on" href="#hero">

					<img src="img/logo-shapes-plus-words-2.svg" />					

				</a>

			</div>
			
			<?php include 'inc/main-nav.php'; ?>			

		</div>
	</header>






	<section data-scroll-index='0' id="hero" class="section hero page active">

		<div class="home-overlay"></div>

		<div id="logo-ov" class="logo-overlay">
			<?php include "inc/logo-overlay-svg.php"; ?>
		</div>

		<a href="#gallery" id="down-link" class="hero-down-link">
			<svg class="arrow-down"><use xlink:href="#arrow-down"></use></svg>
		</a>		

	</section>	





	<section data-scroll-index='1' id="gallery" class="section page ">
		<?php include "inc/slides.php"; ?>
	</section>


	

	<section data-scroll-index='2' id="about" class="section page ">
		<?php include 'inc/about.php'; ?>
	</section>


	

	<section data-scroll-index='3' id="contact" class="section page ">
		<?php include 'inc/contact.php'; ?>
	</section>


	



</div>
<?php include 'inc/footer.php' ; ?>