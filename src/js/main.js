
// if ($.browser.mobile) $('body').addClass('mobile');
// if ($.browser.safari) $('body').addClass('safari');
// if ($.browser.iphone || $.browser.ipad || $.browser.ipod ) $('body').addClass('ios');

$(document).on('ready', function () {
	var $window = $(window),
		windowWidth = $window.width(),
		windowHeight = $window.height(),
		bodyHeight = $('body').height();


		// resize
		$window.on('resize', function () {

			windowWidth = $window.width();
			windowHeight = $window.height();
			bodyHeight = $('body').height();

		});


});

$(window).on('load', function() {
	// init owl-carousel
	$('.owl-1').owlCarousel({
	    loop:true,
	    nav:true,
	    items:1,
		autoplay:true,
		autoplayTimeout:8000,
		smartSpeed: 700
	});

	new WOW().init();

});	


var owl2 = $('.owl-2').owlCarousel({
    center: true,
    items:2,
    loop:true,
    margin:0,
    nav:true,
	autoplay:true,
	autoplayTimeout:8000,
	smartSpeed: 400,
    responsive:{
    	0:{
            items:1
        },
        600:{
            items:3
        }
    }
});
owl2.on('changed.owl.carousel', function(event) {
	$('.owl-item').removeClass('yellow');
	$(this).find('.center').addClass('yellow');
});

$('.owl-3').owlCarousel({
    center: true,
    items:2,
    loop:true,
    margin:20,
    responsive:{
    	0:{
            items:1
        },
        600:{
            items:3
        }
    }
});

$('.owl-4').owlCarousel({
    items:4,
    loop:true,
    margin:20,
    nav:true,
    responsive:{
    	0:{
            items:2
        },
        600:{
            items:4
        }
    }
});


$(document).ready(function(){
    $("#main-nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});


$('.js-open-modal').on('click', function(e) {
	e.preventDefault();
	$('.comment-modal').addClass('opened');
	$('body').addClass('fixed');
})

$('.modal-inner .close-btn').each(function() {
    $(this).on('click', function(e) {
        $(this).closest('.main-modal').removeClass('opened');
	   $('body').removeClass('fixed');
    });
});

$('#mobile-nav-btn').on('click', function(e) {
    e.preventDefault();
    $('.top-line').toggleClass('opened');
});

$(document).ready(function(){
    $('.js-services-btn').each(function() {
        $(this).on('click', function(e) {
            e.preventDefault();
            var top = $('#services').offset().top - 130;
            $('body,html').animate({scrollTop: top}, 1500);
        })
    });
});

$(document).ready(function(){
    $('.js-testimonials-btn').each(function() {
        $(this).on('click', function(e) {
            e.preventDefault();
            var top = $('#testimonials').offset().top - 130;
            $('body,html').animate({scrollTop: top}, 1500);
        })
    });
});

$(document).ready(function(){
    $('.js-contact-btn').each(function() {
        $(this).on('click', function(e) {
            e.preventDefault();
            var top = $('#footer').offset().top - 130;
            $('body,html').animate({scrollTop: top}, 1500);
        })
    });
});


$('.js-impressum-open').on('click', function(e) {
    e.preventDefault();
    $('.impressum-modal').addClass('opened');
    $('body').addClass('fixed');
});

$('.js-agb-open').on('click', function(e) {
    e.preventDefault();
    $('.agb-modal').addClass('opened');
    $('body').addClass('fixed');
});