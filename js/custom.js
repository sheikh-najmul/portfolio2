$(function () {
    "use strict";

    //preloader start    
    $(window).load(function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    // smooth scroll start
    $('#menubar a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            return false;
                        } else {
                            $target.attr('tabindex', '-1');
                            $target.focus();
                        };
                    });
                }
            }
        });


    // scroll to top button start 
    $('.top_to').click(function () {
        $('html').animate({
            scrollTop: 0
        }, 1000);
    });
    $(window).scroll(function () {
        var $scrolling = $(this).scrollTop();

        if ($scrolling > 300) {
            $('.top_to').fadeIn();
        } else {
            $('.top_to').fadeOut();
        }
    });


    //menubar fixed top start
    var $navOffset = $('#menubar').offset().top;
    $(window).scroll(function () {
        var $scrolling = $(this).scrollTop();
        if ($scrolling > $navOffset) {
            $('#menubar').addClass('navFixed');
        } else {
            $('#menubar').removeClass('navFixed');
        }
    });



    //banner slide start
    $('.banner_slide').slick({
        dots: true,
        arrows: false,
        autoplay: false,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                },
                breakpoint: 321,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });

    //team slide start
    $('.team_slide').slick({
        dots: false,
        arrows: false,
        autoplay: true,
        speed: 900,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                },
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });
    //testimonial slide start


    $('.testimonial_slide').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        speed: 900,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                },
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });
    //partner slide start


    $('.partner_slide').slick({
        dots: false,
        arrows: true,
        autoplay: true,
        speed: 900,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: '<i class="fa fa-chevron-right right_arrow"></i>',
        prevArrow: '<i class="fa fa-chevron-left left_arrow"></i>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });
    //venobox start

    $('.venobox').venobox();

    //counter start

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});