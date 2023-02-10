    AOS.init();
    (function () {
        var $frame  = $('#basic');
        var $slidee = $frame.children('ul').eq(0);
        var $wrap   = $frame.parent();
        $frame.sly({
            horizontal: 1,
            itemNav: 'basic',
            smart: 1,
            activateOn: 'click',
            mouseDragging: 1,
            touchDragging: 1,
            releaseSwing: 1,
            startAt: 3,
            scrollBar: $wrap.find('.scrollbar'),
            scrollBy: 1,
            pagesBar: $wrap.find('.pages'),
            activatePageOn: 'click',
            speed: 300,
            elasticBounds: 1,
            // easing: 'easeOutExpo',
            dragHandle: 1,
            dynamicHandle: 1,
            clickBar: 1,
        });
    }());

    const threesixty = new ThreeSixty(document.getElementById('threesixty'), {
    image:'images/threesixtyimg/ext_360.webp',
    width: 1400,
    height: 788,
    count: 36,
    perRow: 5,
    speed: 100,
    inverted: true,
    prev: document.getElementById('prev'),
    next: document.getElementById('next')
    });
    threesixty.stop();


$(document).ready(function(){
    var carousel1 = '.js-carousel-1';
    var carousel2 = '.js-carousel-2';
    var owlCarousel1 = $(carousel1).owlCarousel({
        items: 1,
        nav:false,
        dots:false,
    });
    var owlCarousel2 = $(carousel2).owlCarousel({
        items: 2,
        margin: 10,
        nav:true,
    });
    carouselSyncCurrentClass();
    owlCarousel1.on('changed.owl.carousel', function () {
        carouselSyncCurrentClass();
    });
    owlCarousel2.on('changed.owl.carousel', function (event) {
        carouselSyncCurrentClass();
    });
    owlCarousel2.find('.item').click(function () {
        var itemIndex = $(this).parent().index();
        owlCarousel1.trigger('to.owl.carousel', itemIndex);
        carouselSyncCurrentClass();
    });

    function carouselSyncCurrentClass() {
        setTimeout(function () {
            var carousel1ActiveIndex = $('.js-carousel-1 .owl-item.active').index();
            $('.js-carousel-2 .owl-item').removeClass('current');
            var currentItem = $('.js-carousel-2 .owl-item:nth-child(' + (carousel1ActiveIndex + 1) + ')');
            currentItem.addClass('current');

            if (!currentItem.hasClass('active')) {
                if (currentItem.prevAll('.active').length > 0) {
                    owlCarousel2.trigger('next.owl.carousel');
                }
                if (currentItem.nextAll('.active').length) {
                    owlCarousel2.trigger('prev.owl.carousel');
                }
            }
        }, 100);
    }


    var owl;
   owl = $('#c1').owlCarousel({
            loop:true,
            margin:0,
            nav:true,
            dotsContainer: '#carousel-custom-dots',
            dots:true,
            
            responsive:{
                0:{
                    items:1,
                    nav:false,
                },
                600:{
                    items:1
                },
                1000:{
                    items:1,
                }
            }
        });

    $('.owl-dot').click(function () {
    owl.trigger('to.owl.carousel', [$(this).index(), 300]);
    });


    $('#c2').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            dots:false,
            responsive:{
                0:{
                    items:1,
                    nav:false,
                    margin:0,
                    dots:true,
                },
                600:{
                    items:1,
                    dots:true,
                },
                1000:{
                    items:4
                }
            }
        });
        $('#c3').owlCarousel({
            loop:true,
            margin:0,
            nav:true,
            dots:false,
            stagePadding: 300,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                },
                1500:{
                    stagePadding: 400,
                    items:1
                }
            }
        });
        $('#carousel-thumb, #carousel-thumb1').owlCarousel({
            loop:true,
            margin:7,
            nav:true,
            dots:false,
            responsive:{
                0:{
                    items:2,
                },
                600:{
                    items:2
                },
                1000:{
                    items:2
                }
            }
        });


$(window).scroll(function() {
var windowpos = $(window).scrollTop();
var secPos2 = $('.sec-02').position().top;
var secPos1 = $('.sec-01').position().top;
if( windowpos >= secPos2 ) {
var a = 180;
    var b = 320;
    var c = 200;
    var d = 370;

    $({counter: 0}).animate({counter: a}, {
        duration: 3000,
        easing:'linear',
        step: function() {    
            $('.total').text(Math.ceil(this.counter))
        },
        complete: function() {
        }
    });
    $({counter: 0}).animate({counter: b}, {
        duration: 3000,
        easing:'linear',
        step: function() {    
            $('.totalb').text(Math.ceil(this.counter))
        },
        complete: function() {
        }
    });
    $({counter: 0}).animate({counter: c}, {
        duration: 3000,
        easing:'linear',
        step: function() {    
            $('.totalc').text(Math.ceil(this.counter))
        },
        complete: function() {
        }
    });
    $({counter: 0}).animate({counter: d}, {
        duration: 3000,
        easing:'linear',
        step: function() {    
            $('.totald').text(Math.ceil(this.counter))
        },
        complete: function() {
        }
    });
}
        if(windowpos >= secPos1 ){
        var e = 593000;
            var f = 1196;
            $({counter: 1000}).animate({counter: e}, {
                duration: 3000,
                easing:'linear',
                step: function() {    
                    $('.digit-start').text(Math.ceil(this.counter))
                },
                complete: function() {
                }
            });
            $({counter: 300}).animate({counter: f}, {
                duration: 3000,
                easing:'linear',
                step: function() {    
                    $('.digit-cc').text(Math.ceil(this.counter))
                },
                complete: function() {
                }
            });
        } 
        else {
        }
});
    if($(window).width() > 767){
        $('.btn-360').click( function(){
            $(this).parent().siblings('.carousel').addClass('hidden');
            $(this).parent().siblings('#threesixty').removeClass('hidden');
            $(this).addClass('threesixty-play');
            $(this).removeClass('btn-360');
            threesixty.play(false, 1);
            //threesixty.toggle();
        return false;
        });
    }

    $(document).on('click', "a.threesixty-play", function(event) {
    event.preventDefault();

    $(this).parent().siblings('.carousel').removeClass('hidden');
    $(this).parent().siblings('#threesixty').addClass('hidden');
    //threesixty.destroy();
    //alert('click');
    });

    $('.tabs>a').click(function(){
        var tab_id = $(this).attr('data-tab');
        $('.tabs>a').removeClass('tab-active');
        $(this).addClass('tab-active');
    });



});
    var scrollToTopBtn = document.querySelector("#back-to-top");
    var rootElement = document.documentElement;

    function handleScroll() {
        var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
        if (rootElement.scrollTop / scrollTotal > 0.8) {
            scrollToTopBtn.classList.add("showBtn");
        } else {
            scrollToTopBtn.classList.remove("showBtn");
        }
    }

    function scrollToTop() {
        rootElement.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    scrollToTopBtn.addEventListener("click", scrollToTop);
    document.addEventListener("scroll", handleScroll);

$(document).ready(function(){
    $(window).scroll(function(){
        inViewport();
    });
    $(window).resize(function(){
        inViewport();
    });
    function inViewport(){
        $('.sec-08car').each(function(){
            var divPos = $(this).offset().top,
                topOfWindow = $(window).scrollTop(),
                windowHeight = $(window).innerHeight(), 
                scrolled = topOfWindow - divPos,
                wheelMove = topOfWindow*1.5;
            
            
            if( divPos-(windowHeight/2) < topOfWindow){ 
                $(this).find('.img-car-moving').css({ 
                    transform: `translate3d(${scrolled * 1.5}px, 0, 0)`
                }); 
                $(this).find('.back-wheel, .front-wheel').css({ 
                    transform: 'rotate(' + wheelMove + 'deg)' 
                }); 
            }                  
            
        });
    }
    $('.bar-click').click(function(){
        $(this).parents('header').siblings('.mobile-nav').removeClass('hidden').addClass('block');
    });
    $('.mobile-nav-close').click(function(){
        $(this).parents('.mobile-nav').addClass('hidden');
    });
    if($(window).width() < 767){
        var owlPost = $("#c3");
        owlPost.data('owl.carousel').destroy();
        owlPost.owlCarousel({
            loop:true,
            margin:0,
            nav:false,
            dots:false,
            stagePadding:0,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        });
        var elem = $('#c4');
        elem.addClass('owl-carousel')
        elem.owlCarousel({
            loop:false,
            margin:15,
            nav:false,
            dots:false,
            stagePadding:0,
            responsive:{
                0:{
                    items:1,
                    nav:false,
                    dots:true,
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        });
        AOS.init({
        disable: window.innerWidth < 767,
        });
    }

    $('.f-accordion-item').click(function(){
        $(this).next().addClass('pt-4').slideToggle();
        $(this).parent().prevAll().find('.f-accordion-body').slideUp();
        $(this).parent().nextAll().find('.f-accordion-body').slideUp();
    });    

    var WindowHeight = jQuery(window).height();
    var load_element = 0;
    var scroll_position = jQuery('.sec-02_about').offset().top;

    var screen_height = jQuery(window).height();
    var activation_offset = 0;
    var max_scroll_height = jQuery('body').height() + screen_height;

    var scroll_activation_point = scroll_position - (screen_height * activation_offset);

    jQuery(window).on('scroll', function(e) {

        var y_scroll_pos = window.pageYOffset;
        var element_in_view = y_scroll_pos > scroll_activation_point;
        var has_reached_bottom_of_page = max_scroll_height <= y_scroll_pos && !element_in_view;

        if (element_in_view || has_reached_bottom_of_page) {
            jQuery('.sec-02_about').addClass("change");
        } else {
            jQuery('.sec-02_about').removeClass("change");
        }
    });
    $('.owl-dots1 .owl-dot1').click(function(){
        $('.owl-dots1 .owl-dot1').removeClass('active_new');
        $(this).addClass('active_new');
        $('#c1').trigger('next.owl.carousel');
    });


    $('#carousel-custom-dots li').on('click', function(event){
        event.preventDefault();
        var sel = this.getAttribute('toggle-target');
        $('.owl-dots1 button').removeClass('active_new').filter(sel).addClass('active_new');
    });

});