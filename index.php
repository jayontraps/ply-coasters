<?php include 'inc/head.php'; ?>

<?php include 'inc/svg-defs.php'; ?>

<div class="container"> 

	<svg class="icon icon-menu"><use xlink:href="#icon-menu"></use></svg>

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



	<section id="hero" class="section hero page active">

		<div class="home-overlay"></div>

		<div id="logo-ov" class="logo-overlay">
			<?php include "inc/logo-overlay-svg.php"; ?>
		</div>

		<a href="#collections" id="down-link" class="hero-down-link">
			<svg class="arrow-down"><use xlink:href="#arrow-down"></use></svg>
		</a>		

	</section>	


	<section id="collections" class="section page ">
		<?php include "inc/slides.php"; ?>
	</section>

	<section id="about" class="section page ">
		<?php include 'inc/about.php'; ?>
	</section>

	<section id="contact" class="section page ">
		<?php include 'inc/contact.php'; ?>
	</section>



</div>
<?php include 'inc/footer.php' ; ?>