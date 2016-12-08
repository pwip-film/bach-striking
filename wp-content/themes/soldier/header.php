<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
	<head>
		<meta charset="<?php bloginfo('charset'); ?>">
		<title><?php wp_title(''); ?><?php if(wp_title('', false)) { echo ' :'; } ?> <?php bloginfo('name'); ?></title>

		<link href="//www.google-analytics.com" rel="dns-prefetch">
        <link href="http://uw8qk1h10vx1n1kk6420h9xs.wpengine.netdna-cdn.com/wp-content/uploads/2015/12/favicon.png" rel="shortcut icon">
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
							<img src="http://uw8qk1h10vx1n1kk6420h9xs.wpengine.netdna-cdn.com/wp-content/uploads/2015/12/sac_logo_green.png" alt="Logo" class="header__logo-img">
						</a>
					</div>
					<!-- /logo -->

					<!-- nav -->
					<nav class="header__nav">
						<div class="header__nav-menu">
							<ul class="header__nav-list">
								<li class="header__nav-item page_item page-item-2"><a href="/about">About</a></li>
								<li class="header__nav-item page_item page-item-2"><a href="/see-the-film">See The Film</a></li>
								<li class="header__nav-item page_item page-item-2"><a href="/resources">Resources</a></li>
								<li class="header__nav-item page_item page-item-2"><a href="/contact">Contact</a></li>
							</ul>
							<ul class="header__social-list">
								<li class="header__social-list-item"><a class="header__social-link fa fa-facebook" href="http://facebook.com/"></a></li>
								<li class="header__social-list-item"><a class="header__social-link fa fa-twitter" href="http://twitter.com/"></a></li>
								<li class="header__social-list-item"><a class="header__social-link fa fa-vimeo" href="http://vimeo.com/"></a></li>
							</ul>
						</div>
					</nav>
					<!-- /nav -->
				</div>
			</header>
			<!-- /header -->
