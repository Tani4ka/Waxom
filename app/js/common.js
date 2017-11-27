$(function() {
                             /**** Common scripts ****/
    /* SVG Fallback */

    //if(!Modernizr.svg) {
    //    $("img[src*='svg']").attr("src", function() {
    //        return $(this).attr("src").replace(".svg", ".png");
    //    });
    //};


    /* E-mail Ajax Send example */

    //Documentation & Example: https://github.com/agragregra/uniMail
    //$(".callback").submit(function() { //Change
    //    var th = $(this);
    //    $.ajax({
    //        //type: "POST",
    //        //url: "mail.php", //Change
    //        //data: th.serialize()     // need hostname with imail
    //

    //    }).done(function() {         /* or */
    //        alert("Thank you!");
    //        setTimeout(function() {
    //            // Done Functions
    //            th.trigger("reset");
    //        }, 1000);
    //    });
    ////
    //    }).done(function() {           /* or */
    //        $('.success').addClass('visible');
    //        setTimeout(function() {
    //            th.trigger("reset");
    //            $('.success').removeClass('visible');
    //            $.magnificPopup.close();
    //        }, 3000);
    //    });

    //    //}).done(function() {    /* or */
    //    //    $(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn(); // alert("Thank you!");
    //    //    setTimeout(function() {
    //    //        $(th).find('.success').removeClass('active').fadeOut();// Done Functions
    //    //        th.trigger("reset");
    //    //    }, 3000);
    //    //});
    //    return false;
    //});


    /* Chrome Smooth Scroll */
    try {
        $.browserSelector();
        if($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch(err) {};


    /* Prevent Drag for a, img */

    $("img, a").on("dragstart", function(event) { event.preventDefault(); });


    /* Scroll page to top */

    $(window).scroll(function () {
        if ($(this).scrollTop() > $(this).height()) {
            $('.top').addClass('active');
        } else {
            $('.top').removeClass('active');
        }
    });
    $('.top').click(function () {
        $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
    });


    /* Preloader */

    $(window).on('load', function () {
        $('.preloader').delay(1000).fadeOut('slow');
    });



                        /***** Aditional scripts *****/

    /* Equalheight from plugin */

    (function ($) {
        $.fn.equalHeights = function () {
            var $items = $(this);
            function equalize() {
                $items.height('initial');
                var maxH = $items.eq(0).height();
                $items.each(function () {
                    maxH = ($(this).height() > maxH) ? $(this).height() : maxH;
                });
                $items.height(maxH);
            }
            equalize();
            $(window).bind('resize', function () {
                equalize();
            });
        };
    })(jQuery);

    // call equalHeights
    $('.products__header').equalHeights();
    $('.products__text').equalHeights();


    /* Blocks the same height for owl-carousel for images */

    function logoHeight() {
        var logoHeight = $('.logo').outerHeight();
        $('.search_wrap').css('min-height', logoHeight);
    }logoHeight();


    /* Add last/first span for cms */

    $('.s-theme__header').each(function () {
        var ths = $(this);
        ths.html(ths.html().replace(/^(\S+)/, '<span class="s-theme__header_beige">$1</span>'));  // выделяет первое слово в span
    });


    /* Owl-carousel */

    $('.carousel').owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        items: 1,
        navText: "",
        //navText: ['<div class="carousel__nav">', '<div class="carousel__nav">'],
        smartSpeed: 700
    });

    $('.carousel2').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        smartSpeed: 700,
        items: 3,
        responsive : {
            0   : { items : 1  },
            600 : { items : 2  },
            768 : { items : 2  },
            992 : { items : 3
            }
        }
    });

    $('.carousel3').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        smartSpeed: 700,
        items: 4,
        responsive : {
            0   : { items : 2  },
            480   : { items : 3  },
            992 : { items : 4  }
        }
    });


    /* Mmenu */

    $(".toggle-mnu").after("<div id='my-menu'>");
    $(".sf-menu").clone().appendTo("#my-menu");
    $("#my-menu").find("*").attr("style", "");
    $("#my-menu").find("ul").removeClass("sf-menu");
    $("#my-menu").mmenu({
        extensions: [ 'theme-white', 'pagedim-black', 'fx-menu-slide'],    // 'widescreen' -don"t work
        navbar: {
            title: 'Меню'
        }
    });


    /* Gamburger for menu */

     https://codepen.io/agragregra/pen/bEbbmZ
    $(".toggle-mnu").click(function() {
        var mmApi = $("#my-menu").data( "mmenu" );
        mmApi.open();
        $(".toggle-mnu").addClass("on");
        $(".main-mnu").slideToggle();
        return false;
    });

    $(".mm-slideout").click(function() {
       $(".toggle-mnu").removeClass("on");
    });


    /* Video */

    //$(".presentation__loader").click(function() {
    //    $(".video").get(0).play();
    //    $(".video").css('z-index', '5');
    //    $(".video").css('background', 'black');
    //});


    /* iframe */

    $(".presentation__loader").click(function() {
        $("#iframe").css('z-index', '5');
        $("#iframe")[0].src = "https://www.youtube.com/embed/YyUpmzZ9vzw?autoplay=1";
    });


    /* height depend from width */

    //$(function(){
    //    $('.device').height($('.device').width()/2.75);
    //
    //    $(window).resize(function(){
    //        $('.device').height($('.device').width()/2.75);
    //    });
    //});


    /* Number counter */

    var adv = $(".advantages-item__count");
    var advOffsetTop = adv.offset().top;
    var windowHeight = $(window).height();
    //console.log($(window).scrollTop());
    //console.log(advOffsetTop);
    //console.log(windowHeight);

    $(window).scroll(startCounter);
    function startCounter() {
        if ($(window).scrollTop() > advOffsetTop - windowHeight) {
            $(window).off("scroll", startCounter);
            $('.advantages-item__count').each(function () {
                var $this = $(this);
                jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 3000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
        }
    }

});




















