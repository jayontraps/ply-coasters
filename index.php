<?php include 'inc/header.php'; ?>

<?php include 'inc/svg-defs.php'; ?>

<div class="container pt-perspective"> 

	<header class="site_header">
		<div class=" inner_wrap">

			<div class="logo">
				<a class="on" href="#hero">
					<div class="logo-shapes">
						<?php include "inc/logo-svg.php"; ?>  
					</div>
					<h1 class="logo-title animated">Ply Coasters</h1>
				</a>
			</div>
			
			<?php include 'inc/main-nav.php'; ?>

		</div>
	</header>



	<section id="hero" class="section hero pt-page active">
		<?php include "inc/hero.php"; ?>
	</section>	

	<section id="collections" class="section pt-page ">
		<?php include "inc/slides.php"; ?>
	</section>

	<section id="about" class="section pt-page ">
		<?php include 'inc/about.php'; ?>
	</section>

	<section id="contact" class="section pt-page ">
		<?php include 'inc/contact.php'; ?>
	</section>



</div>
<?php include 'inc/footer.php' ; ?>