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

    $(".top_menu li").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $(".form").validate({
        success: "valid",
        rules: {
            name: {
                minlength: 3,
                required: true,
            },
            tel: {
                required: true,
                minlength: 5,
            },
            email: {
                required: true,
                minlength: 5,
                email: true
            },
        },
        messages: {
            name: "Ваше имя",
            tel: "Ваш телефон",
            email: "Введите Вашу почту"
        }
    });

});