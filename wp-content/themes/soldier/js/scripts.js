

(function ($, root, undefined) {

	$.fn.scrollView = function () {
	    return this.each(function () {
	        $('html, body').animate({
	            scrollTop: $(this).offset().top
	        }, 1000);
	    });
	}
	
	$(function () {
		
		'use strict';
		
		// DOM ready, take it away

		var app = {
			init: function (){
				app.video.init();
				app.content.init();
				app.about.init();
				app.wm = {
					'width': $(window).width(),
					'height': $(window).height(),
				}
			},

		}

		app.content = {
			init: function (){
				this.homepage();
				this.headings();
			},
			homepage: function (){
				if ($('body').hasClass('home')){
					setTimeout(function (){
						$('.main-video__play-button').addClass('main-video__play-button--visible');
						$('.main-video__play-text').addClass('main-video__play-text--visible');
						setTimeout( function (){
							$('.main-content__text').addClass('main-content__text--visible');
						}, 1000);
					}, 500);
				}
			},
			headings: function (){
				if ($('body').hasClass('page')){
					setTimeout(function (){
						$('.subheader-wrapper').addClass('active');
						setTimeout(function (){
							$('.subheader-wrapper').addClass('fill');
							setTimeout(function (){							
								$('.subheader-wrapper').addClass('text');
							},500);
						}, 500);
					}, 500);
				}
			}
		}

		app.about = {
			init: function (){
				this.credits();
				this.credit_status = false;
			},
			credits: function (){
				$(document).on('click', '.about-credits__sub-title', function (){
					if (app.about.credit_status == false){
						app.about.credit_status = true;
						$('.about-credits').removeClass('about-credits--collapsed');
						$('.about-credits__sub-title i').addClass('active');
						$('.about-credits__list').slideDown();						
					} else {
						app.about.credit_status = false;
						$('.about-credits').addClass('about-credits--collapsed');
						$('.about-credits__sub-title i').removeClass('active');
						$('.about-credits__list').slideUp();												
					}

				});
			}
		}

		app.video = {
			init: function (){
				this.set_play_btn();
			},
			set_play_btn: function (){
				var that = this;
				$(document).on('click', '.main-video__play-button', function (){
					console.log('');
					that.hide_quote(function (){
						that.load_video();
					});
				});
			},
			hide_quote: function (cb){
				var that = this;
				$('.main-video__quote-wrapper').fadeOut(function(){
					cb();					
				});
			},
			load_video: function (){
			    var iframe = document.querySelector('iframe');
			    $('.main-video').css({'height': app.wm.height});
			    $('.main-video__transparency').addClass('main-video__transparency--video');
		    	$('.main-video__video-wrapper').fitVids();
			    $('.main-video__video-wrapper').fadeIn(function (){
				    $('.main-video').scrollView();
				    var player = new Vimeo.Player(iframe);
				    setTimeout(function (){
					    player.play();
				    },1000);
			    });
			}
		}

		app.init();
		
	});
	
})(jQuery, this);
