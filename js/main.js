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

    $('.popup-with-form').magnificPopup({
        removalDelay: 500, //delay removal by X to allow out-animation
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
        midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    });

    function clickChechbox() {
        $("#checkbox").trigger('chec')
    }

});