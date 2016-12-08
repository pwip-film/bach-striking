<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
	<head>
		<meta charset="<?php bloginfo('charset'); ?>">
		<title><?php wp_title(''); ?><?php if(wp_title('', false)) { echo ' :'; } ?> <?php bloginfo('name'); ?></title>

		<link href="//www.google-analytics.com" rel="dns-prefetch">
        <link href="<?php echo get_template_directory_uri(); ?>/img/icons/favicon.ico" rel="shortcut icon">
        <link href="<?php echo get_template_directory_uri(); ?>/img/icons/touch.png" rel="apple-touch-icon-precomposed">

		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="<?php bloginfo('description'); ?>">

		<?php wp_head(); ?>
		<script>
        // conditionizr.com
        // configure environment tests
        conditionizr.config({
            assets: '<?php echo get_template_directory_uri(); ?>',
            tests: {}
        });
        </script>

	</head>
	<body <?php body_class(); ?>>

		<!-- wrapper -->
		<div class="wrapper">

			<!-- header -->
			<header class="header clear" role="banner">
				<div class="header__wrapper">
					<!-- logo -->
					<div class="header__logo">
						<a href="<?php echo home_url(); ?>">
							<img src="http://bachstarcafe.com/wp-content/uploads/sites/2/2016/03/bachstarlogo.png" alt="Logo" class="header__logo-img">
						</a>
					</div>
					<!-- /logo -->

					<!-- nav -->
					<nav class="header__nav">
						<div class="header__nav-menu">
							<ul class="header__nav-list">
								<li class="header__nav-item page_item page-item-2"><a href="http://127.0.0.1:8094/about">About</a></li>
								<li class="header__nav-item page_item page-item-2"><a href="http://127.0.0.1:8094/see-the-film">See The Film</a></li>
								<li class="header__nav-item page_item page-item-2"><a href="http://127.0.0.1:8094/screening-kit">Screening Kit</a></li>
								<li class="header__nav-item page_item page-item-2"><a href="http://127.0.0.1:8094/contact">Contact</a></li>
							</ul>
							<ul class="header__social-list">
								<li class="header__social-list-item"><a class="header__social-link fa fa-facebook" href="http://facebook.com/"></a></li>
								<li class="header__social-list-item"><a class="header__social-link fa fa-twitter" href="http://twitter.com/"></a></li>
								<li class="header__social-list-item"><a class="header__social-link fa fa-vimeo" href="http://vimeo.com/"></a></li>
								<li class="header__social-list-item"><a class="header__social-link fa fa-instagram" href="http://instagram.com/"></a></li>
							</ul>
						</div>
					</nav>
					<!-- /nav -->
				</div>
			</header>
			<!-- /header -->
