/*-----------------------------------------------------------
Main Js file
*------------------------------------------------------------
*/

!function(a){"use strict";a(window).on("scroll",function(){a(window).scrollTop()>=50?a(".sticky").addClass("stickyadd"):a(".sticky").removeClass("stickyadd")}),a(".navbar-nav a").on("click",function(t){var e=a(this);a("html, body").stop().animate({scrollTop:a(e.attr("href")).offset().top-0},1500,"easeInOutExpo"),t.preventDefault()}),a("#navbarCollapse").scrollspy({offset:20}),a(".element").each(function(){var t=a(this);t.typed({strings:t.attr("data-elements").split(","),typeSpeed:100,backDelay:3e3})}),a(window).on("load",function(){var t=a(".work-filter"),e=a("#menu-filter");t.isotope({filter:"*",layoutMode:"masonry",animationOptions:{duration:750,easing:"linear"}}),e.find("a").on("click",function(){var i=a(this).attr("data-filter");return e.find("a").removeClass("active"),a(this).addClass("active"),t.isotope({filter:i,animationOptions:{animationDuration:750,easing:"linear",queue:!1}}),!1})}),a(".img-zoom").magnificPopup({type:"image",closeOnContentClick:!0,mainClass:"mfp-fade",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]}})}(jQuery);

$(document).ready(function() {

	$('.simple-ajax-popup-align-top').magnificPopup({
		type: 'ajax',
		alignTop: true,
		overflowY: 'scroll' // as we know that popup content is tall we set scroll overflow by default to avoid jump
	});

	$('.simple-ajax-popup').magnificPopup({
		type: 'ajax'
	});

});
