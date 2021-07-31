$(function() {
    "use strict";

    var nav_offset_top = $('header').height() + 50;
    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/
    function navbarFixed() {
        if ($('.header-section').length) {
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $(".header-section").addClass("navbar_fixed");
                } else {
                    $(".header-section").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();

});