"use strict";
$(document).ready(function() {


    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        AOS Animation Activation
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    AOS.init();
    window.addEventListener("load", AOS.refresh);
    AOS.init({
        once: true
    })

    


    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
           Sticky Header
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (
            document.body.scrollTop > 50 ||
            document.documentElement.scrollTop > 50
        ) {
            $(".site-header--sticky").addClass("scrolling");
        } else {
            $(".site-header--sticky").removeClass("scrolling");
        }
        const pageIsShowcaseMobileOrWeb = window.location.pathname.includes("showcase-mobile.html") || window.location.pathname.includes("showcase-website.html");
        if (
            document.body.scrollTop > (pageIsShowcaseMobileOrWeb ? 280 : 700) ||
            document.documentElement.scrollTop > (pageIsShowcaseMobileOrWeb ? 280 : 700)
        ) {
            $(".site-header--sticky.scrolling").addClass("reveal-header");
            if ($("#logo")[0].src.split("/")[document.getElementById("logo-1").src.split("/").length - 1] === "kristo-white.gif") {
                $("#logo")[0].src = "image/logo/kristo-black.gif";
                $("#logo-1")[0].src = "image/logo/kristo-black.gif";
            }
        } else {
            $(".site-header--sticky.scrolling").removeClass("reveal-header");
            if ($("#logo")[0].src.split("/")[document.getElementById("logo-1").src.split("/").length - 1] === "kristo-black.gif") {
                $("#logo")[0].src = "image/logo/kristo-white.gif";
                $("#logo-1")[0].src = "image/logo/kristo-white.gif";
            }
        }
    }


    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
           Prcing Dynamic Script
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    $('#table-price-value .toggle-btn').on("click", function(e) {
        $(e.target).toggleClass("clicked");
        if ($(e.target).parent().parent().hasClass("monthly-active")) {
            $(e.target).parent().parent().removeClass("monthly-active").addClass("yearly-active");
        } else {
            $(e.target).parent().parent().removeClass("yearly-active").addClass("monthly-active");
        }
    });

    $("[data-pricing-trigger]").on("click", function(e) {
        $(e.target).addClass("active").siblings().removeClass("active");
        var target = $(e.target).attr("data-target");
        if ($(target).attr("data-value-active") == "monthly") {
            $(target).attr("data-value-active", "yearly");
        } else {
            $(target).attr("data-value-active", "monthly");
        }
    });


    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
           Smooth Scroll
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

    $(".goto").on("click", function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate({
                    scrollTop: $(hash).offset().top,
                },
                2000,
                function() {
                    window.location.hash = hash;
                }
            );
        } // End if
    });



    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
          Preloader Activation
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

    $(window).load(function() {
        setTimeout(function() {
            $("#loading").fadeOut(500);
        }, 1000);
        setTimeout(function() {
            $("#loading").remove();
        }, 2000);
    });




    

});