(function($) {

	'use strict';

	//* Navbar
	var nav_offset_top = $('header').height() + 50;

	//* Navbar Fixed
	function navbarFixed() {
		if ($('.header_area').length) {
			$(window).scroll(function() {
				var scroll = $(window).scrollTop();
				if (scroll >= nav_offset_top) {
					$('.header_area').addClass('navbar_fixed');
				} else {
					$('.header_area').removeClass('navbar_fixed');
				}
			});
		}
	}
	navbarFixed();

	//* Slider
	function mailChimp() {
		$('#mc_embed_signup').find('form').ajaxChimp();
	}
	mailChimp();
	$('select').niceSelect();

	// * Magnific Pop-Up
	if ($('.img-gal').length > 0) {
		$('.img-gal').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});
	}

	//* Testimonials Slider
	function testimonials_slider() {
		if ($('.testi_slider').length) {
			$('.testi_slider').owlCarousel({
				loop: true,
				margin: 30,
				items: 2,
				autoplay: true,
				smartSpeed: 2500,
				autoplayTimeout: 15000,
				dots: true,
				responsiveClass: true,
				responsive: {
					0: {
						items: 1
					},
					991: {
						items: 2
					}
				}
			});
		}
	}
	testimonials_slider();

	//* Navbar collapse on select nav-link
	function navClose(){
		var navLinks = document.getElementsByClassName("nav-link");
		var navToggler = document.getElementById("navbar-toggler");
		Array.from(navLinks).forEach(link => {
			link.addEventListener("click", () => {
			if (jQuery(window).width() <= 1000) {
				navToggler.click();
			}
			});
		});
	}
	navClose();

	//* Switch active nav-link on click
	$(".nav-item").on('click', function() {
		$(this).toggleClass('active');
	});
	$(".navbar-nav a").on('click', function() {
		$(".nav-item").removeClass('active');
	});

	//* Active Link Switch
	var scrollLink = $('.page-scroll');
	$(window).scroll(function() {
	var scrollbarLocation = $(this).scrollTop();
		
	scrollLink.each(function() {
		var sectionOffset = $(this.hash).offset().top - 73;
		if ( sectionOffset <= scrollbarLocation ) {
			$(this).parent().addClass('active');
			$(this).parent().siblings().removeClass('active');
		}
		});
	});
})(jQuery);