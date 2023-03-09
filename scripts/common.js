
    AOS.init();
    let threesixty = new ThreeSixty(document.getElementById('threesixty'), {
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
    let threesixty2 = new ThreeSixty(document.getElementById('threesixty-2'), {
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

    let wheelCarousel = $('#wheel-carousel');
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


    let carousel1 = '.js-carousel-1';
    let carousel2 = '.js-carousel-2';
    $(carousel1).owlCarousel({
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
    $(carousel2).owlCarousel({
        items: 2,
        margin: 10,
        nav:true,
    });

    let owl;
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
        let ein = (event.page.index)+1
        $('.owl_dot'+ein).addClass('active_new');
     })
   
    
    
    let nodeList = document.getElementsByClassName('owl-dotclick');
    for(let i=1;i<=nodeList.length;i++) {
         $('.owl_dot'+i).click(function () {
            owl.trigger('to.owl.carousel', [$(this).index(), 300]); 
         })
    }

    
    
    function remoActiveFromDots(){
        for(let a=1;a<=nodeList.length;a++) {
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
        $('#c3, #carousel-psgr').owlCarousel({
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

let paused = false;
let isRun = false;
let isAnimate = false;
$(window).scroll(function() {
let windowpos = $(window).scrollTop();

if( windowpos >= 1500 ) {
    let a = 180;
    let b = 320;
    let c = 200;
    let d = 370;
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
}else{
   
}
       
        if(windowpos >= 380 &&  windowpos >= 400){
            let e = 593000;
            let f = 1196;

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

        let isOpen = false
        $('.btn-360, .btn-360-xs-mob').click( function(e){
            e.preventDefault();
            if(!isOpen){
                $(this).parent().siblings('.carousel').addClass('hidden');
                $(this).parent().siblings('#threesixty').removeClass('hidden');
                $(this).parent().siblings('#threesixty-2').removeClass('hidden');
                threesixty.play(false, 1);
                $(this).children('.view-icon').hide();
                $(this).children('.close-icon').show();
                isOpen = true
            }else{
                $(this).parent().siblings('.carousel').removeClass('hidden');
                $(this).parent().siblings('#threesixty').addClass('hidden');
                $(this).parent().siblings('#threesixty-2').addClass('hidden');
                $(this).children('.close-icon').hide();
                $(this).children('.view-icon').show();
                isOpen = false
            }
        });


    $('.tab-pane').hide();
    $('.tab-pane:first').show();
    $('.tabs>a').click(function(e){
        e.preventDefault();
        var _href = $(this).attr("href");
        $('.tabs>a').removeClass('tab-active');
        $(this).addClass('tab-active');
        $('.tab-pane').hide();
        $(_href).fadeIn();
    });



});
    let scrollToTopBtn = document.querySelector("#back-to-top");
    let rootElement = document.documentElement;

    function handleScroll() {
        let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
       
        if (rootElement.scrollTop / scrollTotal > 0.93) {
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


    $('.send-otp').click(function(){
        var Inputval = $(this).siblings('input').val();
        if(Inputval.length == 10){
            $(this).parents('.mobile-otp').addClass('hidden');
            $(this).parents('.mobile-otp').siblings('.registered-otp').removeClass('hidden');
            $(this).parents('.mobile-otp').find('.error').addClass('hidden');
        }else{
            $(this).parents('.mobile-otp').find('.error').removeClass('hidden');
        }

    });
    $('.change-mobile-no').click(function(){
        $(this).parents('.registered-otp').addClass('hidden');
        $(this).parents('.registered-otp').siblings('.mobile-otp').removeClass('hidden');
    });

    $(function(){
        $(window).scroll(function(){
                let scroll = $(window).scrollTop();
                let divPos =  $('.sec-08car').offset().top;
                let scrolled = scroll - divPos;
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
        let owlPost = $("#c3");
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
        let elem = $('#c4');
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

    $('#dropdown-tab a:first-child').addClass('active');
    $('.menu-box').hide();
    $('.menu-box:first').show();
   
    $('#dropdown-tab a').click(function(e){
        e.preventDefault();
        $('#dropdown-tab a').removeClass('active');
        $(this).addClass('active');
        $('.menu-box').hide();
        
        let activeTab = $(this).attr('href');
        $(activeTab).fadeIn();

        let current = $(this),
        position = current.position();
        $('.js-tab-underline').css('left', position.left);
        $('.js-tab-underline').css('width', $(this).outerWidth());
        return false;
    });

    $("header nav ul li").hover(function() {
        
        let isHovered = $(this).is(":hover");
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

    let navWidth = $('#main-nav').children('nav').width();
    $('.search-block').css('width', navWidth);


    let pointerID;
    let tabId;
    function selectcar(target) {
        for (let i = 1; i < 8; i++) {
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


    $('.acc-btn').click(function(){
        $(this).removeClass('mb-1');
        $('.acc-btn').removeClass('acc-btn-active');
        $(this).addClass('acc-btn-active');
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

let $swiperSelector = $('.swiper-container');

$swiperSelector.each(function(index) {
    let $this = $(this);
    $this.addClass('swiper-slider-' + index);
    
    let dragSize = $this.data('drag-size') ? $this.data('drag-size') :86;
    let freeMode = $this.data('free-mode') ? $this.data('free-mode') : false;
    let loop = $this.data('loop') ? $this.data('loop') : false;
    let slidesDesktop = $this.data('slides-desktop') ? $this.data('slides-desktop') : 5;
    let slidesTablet = $this.data('slides-tablet') ? $this.data('slides-tablet') : 5;
    let slidesMobile = $this.data('slides-mobile') ? $this.data('slides-mobile') : 3;
    let spaceBetween = $this.data('space-between') ? $this.data('space-between'): 30;

    let swiper = new Swiper('.swiper-slider-' + index, {
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
           spaceBetween: 10,
        }
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        dragSize: dragSize
      }
   });
});

$(document).find('.swiper-scrollbar-drag').append('<p class="text-sm font-medium leading-none text-white text-center">Drag<p>');
