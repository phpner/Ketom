$(document).ready(function ($) {

    $('.carusel1').owlCarousel({
        loop:true,
        margin:10,
        center:true,
        responsive:{
            0:{
                items:1,
            },
            992:{
                items:3,
            }
        }
    });


    $('.click-in').click(function () {

        $("#nav-icon").toggleClass('open');
        //$('#wrapper').toggleClass('over');
        $("header .top_menu").toggleClass('opener');

    });


    $(window).resize(function () {
        if(window.outerWidth >= 768){
            $("header .top_menu").removeClass('opener');
            $("#nav-icon").attr('class','');

        }

    });


    $('.popup-with-zoom-anim').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
    });

    function clickChechbox() {
        $("#checkbox").trigger('chec')
    }

});