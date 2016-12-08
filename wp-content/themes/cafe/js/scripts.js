

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
						$('.main-video__top-quote').addClass('main-video__top-quote--visible');
						setTimeout( function (){
							$('.main-video__bottom-quote').addClass('main-video__bottom-quote--visible');
							setTimeout( function (){
								$('.main-video__play-wrapper').addClass('main-video__play-wrapper--visible');
							}, 1000);
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

		app.video = {
			init: function (){
				this.set_play_btn();
			},
			set_play_btn: function (){
				var that = this;
				$(document).on('click', '.main-video__play-wrapper', function (){
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
