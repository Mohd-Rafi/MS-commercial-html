
    AOS.init();
    const threesixty = new ThreeSixty(document.getElementById('threesixty'), {
    image:'images/ext-360-img.webp',
    width: 741,
    height: 350,
    count: 36,
    perRow: 5,
    speed: 100,
    inverted: true,
    prev: document.getElementById('prev'),
    next: document.getElementById('next')
    });
    threesixty.stop();


$(document).ready(function(){

    var wheelCarousel = $('#wheel-carousel');
    wheelCarousel.owlCarousel({
        loop:false,
        nav:false,
        margin:20,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },            
            960:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });
    wheelCarousel.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY>0) {
            wheelCarousel.trigger('next.owl');
        } else {
            wheelCarousel.trigger('prev.owl');
        }
        e.preventDefault();
    });


    var carousel1 = '.js-carousel-1';
    var carousel2 = '.js-carousel-2';
    var owlCarousel1 = $(carousel1).owlCarousel({
        items: 1,
        nav:false,
        dots:true,
        autoplay: true,
        smartSpeed: 500,
        loop:true,
        autoplayTimeout: 9500,
        responsive:{
            0:{
                items:1,
            },
            1200:{
                items:1
            }
        }

    });
    var owlCarousel2 = $(carousel2).owlCarousel({
        items: 2,
        margin: 10,
        nav:true,
    });
    // carouselSyncCurrentClass();
    // owlCarousel1.on('changed.owl.carousel', function () {
    //     carouselSyncCurrentClass();
    // });
    // owlCarousel2.on('changed.owl.carousel', function (event) {
    //     carouselSyncCurrentClass();
    // });
    // owlCarousel2.find('.item').click(function () {
    //     var itemIndex = $(this).parent().index();
    //     owlCarousel1.trigger('to.owl.carousel', itemIndex);
    //     carouselSyncCurrentClass();
    // });

    // function carouselSyncCurrentClass() {
    //     setTimeout(function () {
    //         var carousel1ActiveIndex = $('.js-carousel-1 .owl-item.active').index();
    //         $('.js-carousel-2 .owl-item').removeClass('current');
    //         var currentItem = $('.js-carousel-2 .owl-item:nth-child(' + (carousel1ActiveIndex + 1) + ')');
    //         currentItem.addClass('current');

    //         if (!currentItem.hasClass('active')) {
    //             if (currentItem.prevAll('.active').length > 0) {
    //                 owlCarousel2.trigger('next.owl.carousel');
    //             }
    //             if (currentItem.nextAll('.active').length) {
    //                 owlCarousel2.trigger('prev.owl.carousel');
    //             }
    //         }
    //     }, 100);
    // }


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

    $('.owl_dot').click(function (event) {
        owl.trigger('to.owl.carousel', [$(this).index(), 300]);
        remoActiveFromDots();
    });
    
     owl.on('changed.owl.carousel', function(event) {
         
         remoActiveFromDots();
        var ein = (event.page.index)+1
        $('.owl_dot'+ein).addClass('active_new');
        var ein = (event.page.index)+1
        $('.owl_dot'+ein).addClass('active_new');
         //console.log("ein:  "+ein)
     })
   
    
    
    var nodeList = document.getElementsByClassName('owl-dotclick');
    console.log("nodeList:  "+nodeList.length)
    for(var i=1;i<=nodeList.length;i++) {
        var obj = nodeList[i];
        
         $('.owl_dot'+i).click(function () {
            owl.trigger('to.owl.carousel', [$(this).index(), 300]); 
         })
    }

    
    
    function remoActiveFromDots(){
        for(var a=1;a<=nodeList.length;a++) {
            $('.owl_dot'+a).removeClass('active_new')
        }
    }


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

var paused = false;
var isRun = false;
var isAnimate = false;
$(window).scroll(function() {
var windowpos = $(window).scrollTop();
// var secPos2 = $('.sec-02').position().top;
// var secPos1 = $('.sec-01').position().top;

if( windowpos >= 1500 ) {
    var a = 180;
    var b = 320;
    var c = 200;
    var d = 370;
    if(isAnimate == false){
        $({counter: 160}).animate({counter: a}, {
            duration: 1000,
            easing:'linear',
            step: function() {    
                $('.total').text(Math.ceil(this.counter))
            },
            complete: function() {
                isAnimate = true
            }
        });
        $({counter: 300}).animate({counter: b}, {
            duration: 1000,
            easing:'linear',
            step: function() {    
                $('.totalb').text(Math.ceil(this.counter))
            },
            complete: function() {
                isAnimate = true
            }
        });
        $({counter: 180}).animate({counter: c}, {
            duration: 1000,
            easing:'linear',
            step: function() {    
                $('.totalc').text(Math.ceil(this.counter))
            },
            complete: function() {
                isAnimate = true
            }
        });
        $({counter: 350}).animate({counter: d}, {
            duration: 1000,
            easing:'linear',
            step: function() {    
                $('.totald').text(Math.ceil(this.counter))
            },
            complete: function() {
                isAnimate = true
            }
        });
    }


    //$('#animate').addClass('slide-left');
}else{
   // $('#animate').removeClass('slide-left');
}
       
        if(windowpos >= 380 &&  windowpos >= 400){
            var e = 593000;
            var f = 1196;

            if(isRun == false){
                $({counter: 592900}).animate({counter: e}, {
                    duration: 500,
                    easing:'linear',
                    step: function() {    
                        $('.digit-start').text(Math.ceil(this.counter))
                    },
                    complete: function() {
                        isRun = true
                    }
                });
                $({counter: 1100}).animate({counter: f}, {
                    duration: 500,
                    easing:'linear',
                    step: function() {    
                        $('.digit-cc').text(Math.ceil(this.counter))
                    },
                    complete: function() {
                        isRun = true
                    }
                });
            }
        } 

});
    // if($(window).width() > 767){
        var isOpen = false
        $('.btn-360, .btn-360-xs-mob').click( function(e){
            e.preventDefault();
            if(!isOpen){
                $(this).parent().siblings('.carousel').addClass('hidden');
                $(this).parent().siblings('#threesixty').removeClass('hidden');
               // $(this).addClass('threesixty-play');
                //$(this).removeClass('btn-360');
                threesixty.play(false, 1);
                //threesixty.toggle();
                $(this).children('.view-icon').hide();
                $(this).children('.close-icon').show();
                isOpen = true
            }else{
                $(this).parent().siblings('.carousel').removeClass('hidden');
                $(this).parent().siblings('#threesixty').addClass('hidden');
                $(this).children('.close-icon').hide();
                $(this).children('.view-icon').show();
               // $(this).removeClass('threesixty-play');
                //$(this).addClass('btn-360');
                //threesixty.destroy();
                isOpen = false
            }
        });
    // }

    // $(document).find('.threesixty-play').on('click', function(event) {

    // });

    $('.tabs>a').click(function(e){
        e.preventDefault();
        var tab_id = $(this).attr('data-tab');
        $('.tabs>a').removeClass('tab-active');
        $(this).addClass('tab-active');
    });

    // owl.on('changed.owl.carousel', function(event) {
    //     event.preventDefault();
    //     var item = event.item.index + 1; 
    //     console.log("current: " + item);
    // })



});
    var scrollToTopBtn = document.querySelector("#back-to-top");
    var rootElement = document.documentElement;

    function handleScroll() {
        var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
       
        if (rootElement.scrollTop / scrollTotal > 0.93) {
           // console.log(rootElement.scrollTop / scrollTotal);
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


    $(function(){
        $(window).scroll(function(){
                var scroll = $(window).scrollTop();
                var divPos =  $('.sec-08car').offset().top;
                var scrolled = scroll - divPos;
                //console.log(scrolled + 'test');
            if ($(window).scrollTop() > 0){
                $(".img-car-moving").css("left",  -scrolled);
                $('.back-wheel, .front-wheel').css({ 
                        transform: 'rotate(' + -scrolled + 'deg)' 
                });   
            }
        });
        $(window).scroll(function(){
            if ($(window).scrollTop() >= 1) {
                $('header').addClass('header-fixed');
            }
            else {
                $('header').removeClass('header-fixed');
            }
        });
    });

    // $('.sec-08car').on('mousewheel', function(event, delta) {
    //     if(event.deltaY > 0) {
    //         inViewport();
    //         function inViewport(){
    //             $('.sec-08car').each(function(){
    //                 var divPos = $(this).offset().top,
    //                     topOfWindow = $(window).scrollTop(),
    //                     scrolled = topOfWindow - divPos;
    //                     $(this).find('.img-car-moving').css({ 
    //                         transform: `translate3d(${scrolled * 1}px, 0, 0)`
    //                     }); 
    //                     $(this).find('.back-wheel, .front-wheel').css({ 
    //                         transform: 'rotate(' + scrolled + 'deg)' 
    //                     });           
    //             });
    //         }
    //     } 
    //     else {
    //     console.log('scroll down');
    //     inViewport();
    //     function inViewport(){
    //         $('.sec-08car').each(function(){
    //             var divPos = $(this).offset().top,
    //                 topOfWindow = $(window).scrollTop(),
    //                 scrolled = topOfWindow - divPos;
    //                 $(this).find('.img-car-moving').css({ 
    //                     transform: `translate3d(-${scrolled * 1}px, 0, 0)`
    //                 }); 
    //                 $(this).find('.back-wheel, .front-wheel').css({ 
    //                     transform: 'rotate(-' + scrolled + 'deg)' 
    //                 });           
    //         });
    //     }
    //     }
    // });
    $('.bar-click').click(function(e){
        e.preventDefault();
        $('html, body').css('overflow','hidden');
        $(this).parents('header').siblings('.mobile-nav').removeClass('hidden').addClass('block');
        $(this).parent().hide();
        $(this).parent().next().removeClass('hidden');
    });
    $('.mobile-nav-close').click(function(e){
        e.preventDefault();
        $(this).parents('header').siblings('.mobile-nav').addClass('hidden');
        $(this).parent().addClass('hidden');
        $(this).parent().prev().show();
        $('html, body').css('overflow','auto');
    });
    if($(window).width() < 767){
        var owlPost = $("#c3");
        owlPost.data('owl.carousel').destroy();
        owlPost.owlCarousel({
            loop:true,
            margin:0,
            nav:true,
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
    if($(window).width()<767){
        $('.f-accordion-item').click(function(e){
            e.preventDefault();
            $(this).next().addClass('pt-4').slideToggle();
            $(this).parent().prevAll().find('.f-accordion-body').slideUp();
            $(this).parent().nextAll().find('.f-accordion-body').slideUp();
        });    
    }


    // var WindowHeight = jQuery(window).height();
    // var load_element = 0;
    // var scroll_position = jQuery('.sec-02_about').offset().top;

    // var screen_height = jQuery(window).height();
    // var activation_offset = 0;
    // var max_scroll_height = jQuery('body').height() + screen_height;

    // var scroll_activation_point = scroll_position - (screen_height * activation_offset);

    // jQuery(window).on('scroll', function(e) {

    //     var y_scroll_pos = window.pageYOffset;
    //     var element_in_view = y_scroll_pos > scroll_activation_point;
    //     var has_reached_bottom_of_page = max_scroll_height <= y_scroll_pos && !element_in_view;

    //     if (element_in_view || has_reached_bottom_of_page) {
    //         jQuery('.sec-02_about').addClass("change");
    //     } else {
    //         jQuery('.sec-02_about').removeClass("change");
    //     }
    // });




    // $('.owl-dots1 .owl-dotclick').click(function(e){
    //     e.preventDefault();
    //     $('.owl-dots1 .owl-dotclick').removeClass('active_new');
    //     $(this).addClass('active_new');
    //     $('#c1').trigger('next.owl.carousel');
    // });


    // $('#carousel-custom-dots li').on('click', function(event){
    //     event.preventDefault();
    //     var sel = this.getAttribute('toggle-target');
    //     $('.owl-dots1 button').removeClass('active_new').filter(sel).addClass('active_new');
    // });

    $('#dropdown-tab a:first-child').addClass('active');
    $('.menu-box').hide();
    $('.menu-box:first').show();
   
    $('#dropdown-tab a').click(function(e){
        e.preventDefault();
        $('#dropdown-tab a').removeClass('active');
        $(this).addClass('active');
        $('.menu-box').hide();
        
        var activeTab = $(this).attr('href');
        $(activeTab).fadeIn();

        var current = $(this),
        position = current.position();
        $('.js-tab-underline').css('left', position.left);
        $('.js-tab-underline').css('width', $(this).outerWidth());
        return false;
    });

    // $('.drp-menu').hover(function(){
    //     $(this).toggleClass('active');
    // });

    
    // $("header nav ul li").hover(
    //     function() {
    //         $(this).children(".dropdown-menu").stop(true, true).slideDown('100');
    //     },
    //     function() {
    //         $(this).children(".dropdown-menu").stop(true, true).slideUp('100');
    //     }
    // );
    

    $("header nav ul li").hover(function() {
        
        var isHovered = $(this).is(":hover");
        if (isHovered) {
          $(this).children(".dropdown-menu").stop().slideDown(300);

          

          $('.js-tab-underline').css('left', '38px');
          $('.js-tab-underline').css('width', $('.dropdown-tab-link.active').outerWidth());
        } else {
          $(this).children(".dropdown-menu").stop().slideUp(300);
        }
      });

    $('#btn-search').click(function(){
        $(this).parents('#main-nav').siblings('.search-block').show();
    });
    $('#btn-close').click(function(){
        $(this).parents('.search-block').hide();
    });

    $('#btn-search-xs').click(function(){
        $(this).parents('#main-nav').siblings('.search-xs-block').toggle();
        if($(this).parents('#main-nav').siblings('.search-xs-block').is(":visible")){
            $('body, html').css('overflow', 'hidden');
        }else{
            $('body, html').css('overflow', 'auto');
        }
        
    });

    $('#search-xs').click(function(){
       $(this).toggleClass('width-expand');
       if($(this).hasClass('width-expand')){
        $(this).children('.btn-search-xs').removeClass('hide');
       }
        $(this).children('.btn-search-xs').removeClass('hidden');
    });
    $('.btn-search-xs').on('click', function(){
        if($(this).parents('.search-xs').hasClass('width-expand')){
            $(this).removeClass('width-expand');
        }else{
        }
        $(this).addClass('hide');
    });

    var navWidth = $('#main-nav').children('nav').width();
    $('.search-block').css('width', navWidth);


    var pointerID;
    var tabId;
    function selectcar(target) {
        for (var i = 1; i < 8; i++) {
            $('#car-' + i).removeClass('car-list-active');
        }
        $('#' + target).addClass('car-list-active');
    }
    $('.color-name li a').click(function () {
        $(this).parent().siblings().removeClass('color-choose-active');
        $(this).parent().addClass('color-choose-active');
        pointerID = $('.car-list li').attr('id');
        tabId = $(this).parent().attr('id');
        selectcar(tabId);
    });
    $('.click-plus').click(function(){
        $('#defaultModal').css({
            'right':'0',
            'transition': 'right 0.5s ease-out',
        });
    });
    $('.modal-close').click(function(){
        $('#defaultModal').css({
            'right':'-100%',
            'transition': 'right 0.5s ease-out',
        });
    });

    $('.next-carousel').click(function(e){
        event.preventDefault();
        $('#modal-carousel').trigger('next.owl.carousel');
    });

    $('.prev-carousel').click(function(){
        $('#modal-carousel').trigger('prev.owl.carousel', [300]);
    });

    // $('.f-accordion-item').click(function(){
    //     $(this).next().addClass('pt-4').slideToggle();
    //     $(this).parent().prevAll().find('.f-accordion-body').slideUp();
    //     $(this).parent().nextAll().find('.f-accordion-body').slideUp();
    // });    


    $('.acc-btn').click(function(){
        $(this).removeClass('mb-1');
        $('.acc-btn').removeClass('acc-btn-active');
        $(this).addClass('acc-btn-active');
        // $(this).next(".accordion-collapse-body").slideToggle();
        // $(this).prevAll(".accordion-collapse-body").slideUp();
        $(this).prevAll().addClass('mb-1');
        $(this).nextAll().addClass('mb-1');
    });

    $('.bar-click').click(function(){
        $(this).parents('header').siblings('.mobile-nav').removeClass('hidden').addClass('block');
    });
    $('.mobile-nav-close').click(function(){
            $(this).parents('.mobile-nav').addClass('hidden');
    });


});


// supercarry page js

// $(".accordian-btn-inner").click(function(t) {
//     t.preventDefault(),
//     $(this).toggleClass("!pb-4"),
//     $(this).parent(".accordion-item-in").find(".accordian-body-inner").slideToggle(),
//     $(this).parent(".accordion-item-in").prevAll(".accordion-item-in").find(".accordian-body-inner").slideUp(),
//     $(this).parent(".accordion-item-in").nextAll(".accordion-item-in").find(".accordian-body-inner").slideUp(),
//     $(this).parent(".accordion-item-in").prevAll(".accordion-item-in").find('.accordian-btn-inner').removeClass('!pb-4').addClass('pb-10'),
//     $(this).parent(".accordion-item-in").nextAll(".accordion-item-in").find('.accordian-btn-inner').removeClass('!pb-4').addClass('pb-10'),
//     $(this).children().children(".toggle-icon").removeClass("plus_icon"),
//     $(this).children().children().addClass("minus_icon"),
//     $(this).parent(".accordion-item-in").prevAll(".accordion-item-in").find(".toggle-icon").addClass("plus_icon"),
//     $(this).parent(".accordion-item-in").prevAll(".accordion-item-in").find(".toggle-icon").removeClass("minus_icon"),
//     $(this).parent(".accordion-item-in").prevAll(".accordion-item-in").find('.accordian-btn-inner');

// });

jQuery(function(){
    $('#carousel_new').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
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
});

var $swiperSelector = $('.swiper-container');

$swiperSelector.each(function(index) {
    var $this = $(this);
    $this.addClass('swiper-slider-' + index);
    
    var dragSize = $this.data('drag-size') ? $this.data('drag-size') :86;
    var freeMode = $this.data('free-mode') ? $this.data('free-mode') : false;
    var loop = $this.data('loop') ? $this.data('loop') : false;
    var slidesDesktop = $this.data('slides-desktop') ? $this.data('slides-desktop') : 5;
    var slidesTablet = $this.data('slides-tablet') ? $this.data('slides-tablet') : 5;
    var slidesMobile = $this.data('slides-mobile') ? $this.data('slides-mobile') : 3;
    var spaceBetween = $this.data('space-between') ? $this.data('space-between'): 30;

    var swiper = new Swiper('.swiper-slider-' + index, {
      direction: 'horizontal',
      loop: loop,
      freeMode: freeMode,
      spaceBetween: spaceBetween,
      breakpoints: {
        1920: {
          slidesPerView: slidesDesktop
        },
        992: {
          slidesPerView: slidesTablet
        },
        320: {
           slidesPerView: slidesMobile,
           spaceBetween: 20,
        }
      },
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev'
    //   },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        dragSize: dragSize
      }
   });
});

$(document).find('.swiper-scrollbar-drag').append('<p class="text-sm font-medium leading-none text-white text-center">Drag<p>');
