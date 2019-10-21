/*!
 * GRT Responsive Menu - jQuery Plugin
 * Version: 1.0
 * Author: GRT107
 *
 * Copyright (c) 2018 GRT107
 * Released under the MIT license
*/

// Create a function for mobile version
(function( $ ){
	$.fn.grtmobile = function () {
		if ($(window).width() < 991) {
			$('.grt-mobile-button').on('click', function(){
				$(this).toggleClass("grt-mobile-button-open");
				$("#navbarSupportedContent").toggleClass("collapse");
				$("#navbarSupportedContent").toggleClass("navbar-collapse");
				$("ul.navbar-nav").toggleClass("open-grt-menu");
				$("ul.navbar-nav").toggleClass("grt-menu");
				$("html, body").toggleClass("body-overflow");
			});
		}
	}
})( jQuery );

// Initialize and check for mobile
$.fn.grtmobile();

// On resize window check for mobile

var resizeTimeout;
$(window).resize(function(){
  if(!!resizeTimeout){ clearTimeout(resizeTimeout); }
  resizeTimeout = setTimeout(function(){
    $.fn.grtmobile();
  },200);
});

// Add shadow on scroll after 60px
$(window).scroll(function(e){
   if ($(this).scrollTop() > 60){
       $('header').addClass('scrolled');
   } else {
       $('header').removeClass('scrolled');
   }
});

// Prevent a href clicks on dropdown category
$('li.grt-dropdown > a').on('click', function(e){
	e.preventDefault();
});
