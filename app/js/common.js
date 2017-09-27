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


    /* Fixed sidebar block */

    //$(function(){
    //    var topPos = $('#floating').offset().top; //расстояние от АйДи флоатинг до начала документа
    //    $(window).scroll(function() { //при скроллинге:
    //        var top = $(document).scrollTop(),//скролинг документа
    //            pip = $('footer').offset().top,//расстояние от футера до начала документа
    //            height = $('#floating').outerHeight();//высота черного блока
    //        console.log(topPos)//вывод в консоль любого значения
    //
    //        if (top > topPos && top < pip - height) {//проскролено больше расстояния от АйДи флоатинг до начала документа
    //            //и проскролено меньше чем расстояние от футера минус высота черного блоока
    //            $('#floating').addClass('fixed').fadeIn(300); //добавляем черному блоку класс фиксед и плавное проявление
    //        }
    //        else if (top > pip - height) {$('#floating').fadeOut(100);//скрытие черного блока при достижении футера
    //        }
    //        else {$('#floating').removeClass('fixed');}//убираем класс фиксед
    //    });
    //});


    /* Popup show hide */

    //$(document).ready(function(){
    //    PopUpHide();
    //});
    //function PopUpShow(){
    //    $("#popup1").show();
    //}
    //function PopUpHide(){
    //    $("#popup1").hide();
    //}


    /* Humburgers */

    //var $humburger = $(".hamburger");
    //var API = $menu.data( "mmenu" );
    //
    //$humburger.on( "click", function() {
    //    API.open();
    //});
    //
    //API.bind( "open:finish", function() {
    //    setTimeout(function() {
    //        $humburger.addClass( "is-active" );
    //    }, 100);
    //});
    //API.bind( "close:finish", function() {
    //    setTimeout(function() {
    //        $humburger.removeClass( "is-active" );
    //    }, 100);
    //});


    /* Owl-carousel (если карусель заружена, сделать блоки одинаковой высоты) */

    //$('.carousel-services').on('initialized.owl.carousel', function () {
    //    setTimeout(function () {
    //        carouselService()
    //    }, 100);
    //});

    //Owl-carousel

    //$('.carousel-services').owlCarousel({
    //    loop: true,
    //    nav: true,
    //    smartSpeed: 700,
    //    navText: ['<i class="fa fa-angle-double-left">', '<i class="fa fa-angle-double-right">'],
    //    responsiveClass: true,
    //    dots: false,
    //    responsive: {
    //        0: {
    //            items: 1
    //        },
    //        800: {
    //            items: 2
    //        },
    //        1100: {
    //            items: 3
    //        }
    //    }
    //});


    /* Blocks the same height for owl-carousel for images */

    //function carouselService() {
    //    $('.carousel-services__item').each(function () {
    //        var ths = $(this),
    //            thsh = ths.find('.carousel-services__content').outerHeight();
    //        ths.find('.carousel-services__image').css('min-height', thsh);
    //    });
    //}carouselService();


    function logoHeight() {
        var logoHeight = $('.logo').outerHeight();
        $('.search_wrap').css('min-height', logoHeight);
    }logoHeight();


    /* Blocks the same height */

    //function carouselService() {
    //    var mh = 23;
    //    $('.services').each(function () {
    //        var ths = $(this),
    //            thsh = ths.find('.services__header').outerHeight();
    //        //console.log(thsh);
    //        if(thsh > mh) {
    //            mh = thsh;
    //        };
    //    });
    //
    //    $('.services__header').height(mh);
    //    //console.log($('.services__header').outerHeight());
    //}carouselService();


    /* Add last/first span for cms */

    //$('.carousel-services__composition .carousel-services__header').each(function () {
    //    var ths = $(this);
    //    ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>')); // выделяет последнее слово в span
    //});


    $('.s-theme__header').each(function () {
        var ths = $(this);
        ths.html(ths.html().replace(/^(\S+)/, '<span class="s-theme__header_beige">$1</span>'));  // выделяет первое слово в span
    });


    /* Selectize */
    //$('select').selectize();


    /* Resize Window (in the end) */

    //function onResize() {
    //    $('.carousel-services__content').equalHeights();  // for owl-carousel,
    //}onResize();
    //window.onresize = function () {
    //    onResize()
    //};


    /* Superfish */

    //$('.top-line .sf-menu').superfish({
    //    cssArrows: false,
    //    hoverClass: 'no-class',
    //    delay: 200
    //});


    /* Owl-carousel */

    //var owl = $('.slider');
    //owl.owlCarousel({
    //    loop: true,
    //    items: 1,
    //    itemClass: 'slide-wrap',
    //    nav: true,
    //    navText:'',  // if we have additional owl-nav, default owl-nav will be empty.
    //    dots: true,
    //    smartSpeed: 700
    //});
    //
    //// nav for additional owl-nav
    //$('.owl-nav__prev').click(function(){
    //    owl.trigger('prev.owl.carousel');
    //});
    //$('.owl-nav__next').click(function(){
    //    owl.trigger('next.owl.carousel');
    //});

    //<section class="s-slider">
    //    <div class="container">
    //        <div class="owl-nav">
    //            <div class="owl-nav__prew"><i class="fa fa-angle-left"></i></div>
    //            <div class="owl-nav__next"><i class="fa fa-angle-right"></i></div>
    //        </div>
    //    </div>
    //    <div class="slider">
    //        <div class="slide"></div>
    //        <div class="slide"></div>
    //        <div class="slide"></div>
    //    </div>
    //</section>

    $('.owl-carousel').owlCarousel({
        loop:true,
        nav:true,
        dots: true,
        items:1,
        //itemClass: 'slide-wrap',
        navText: ['<div class="carousel__nav">', '<div class="carousel__nav">'],
        smartSpeed: 700
    })

    // nav for additional owl-nav
    //$('.owl-nav__prev').click(function(){
    //    owl.trigger('prev.owl.carousel');
    //});
    //$('.owl-nav__next').click(function(){
    //    owl.trigger('next.owl.carousel');
    //});


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
        var thiss = $(this).find(".toggle-mnu");
        thiss.addClass("on");
        $(".main-mnu").slideToggle();
        return false;
    });

    $(".ishome").click(function() {
        $(".toggle-mnu").removeClass("on");
    });


    /* Magnific-popup */

    //$('.popup-with-move-anim').magnificPopup({
    //    type: 'inline',
    //    fixedContentPos: false,
    //    fixedBgPos: true,
    //    overflowY: 'auto',
    //    closeBtnInside: true,
    //    preloader: false,
    //    midClick: true,
    //    removalDelay: 300,
    //    mainClass: 'my-mfp-slide-bottom'
    //});


    /* What form did the application come from (for magnific-popup) */

    //$('a[href="#callback"]').click(function() {      // возьмет из кнопки зачение data-form и вставит в input[type=hidden] value с этим значением, чтобы знать с какой фрмы пришла заявка
    //    $('#callback .formname').val($(this).data('form'));
    //});




});




















