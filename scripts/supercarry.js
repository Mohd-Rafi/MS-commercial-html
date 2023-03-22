$(function(){
    AOS.init();
    let threesixtySupercarry = new ThreeSixty(document.getElementById('threesixty3'), {
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
    threesixtySupercarry.stop();
    let threesixtySupercarry2 = new ThreeSixty(document.getElementById('threesixty4'), {
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
    threesixtySupercarry2.stop();
    $(window).scroll(function(){
        if ($(window).scrollTop() >= 5) {
            $('header').addClass('header-fixed');
        }
        else {
            $('header').removeClass('header-fixed');
        }
    });
    $('#c2').owlCarousel({
        loop:true,
        margin:17,
        nav:true,
        dots:false,
        responsiveClass:true,
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
            1200:{
                items:4
            }
        }
    });
    $('#carousel-thumb, #carousel-thumb1').owlCarousel({
        loop:true,
        margin:7,
        nav:true,
        dots:false,
        responsiveClass:true,
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

})
    let paused = false;
    let isRun = false;
    let isAnimate = false;
    $(window).scroll(function() {

    let scrollToTopBtn = document.querySelector("#back-to-top");
    let rootElement = document.documentElement;

    function handleScroll() {
        let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
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
        scrollToTopBtn.style.display = "none";
    }
    scrollToTopBtn.addEventListener("click", scrollToTop);
    document.addEventListener("scroll", handleScroll);
    let cngSec = $('.sc-cng').offset().top;
    $(window).scroll(function(){
        if($(window).scrollTop() >= cngSec - 300 ){
            $(document).find('.sc-cng .green-car-img').animate({'left':'70%'}, "slow");
            console.log('i am cng sec');
        }
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
        }
        $(this).addClass('hide');
    });

    let navWidth = $('#main-nav').children('nav').width();
    $('.search-block').css('width', navWidth);

    
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
        tabId = $(this).parent().attr('id');
        selectcar(tabId);
    });
    let tabId2;
    function selectcar2(target) {
        for (let i = 1; i < 8; i++) {
            $('#pc-car-' + i).removeClass('pc-car-list-active');
        }
        $('#' + target).addClass('pc-car-list-active');
    }
    $('.color-name2 li a').click(function () {
        $(this).parent().siblings().removeClass('secondColor-choose-active');
        $(this).parent().addClass('secondColor-choose-active');
        tabId2 = $(this).parent().attr('id');
        selectcar2(tabId2);
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
    $('#modal-carousel').owlCarousel({
        loop:false,
        margin:0,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            }
        }
    });
    $('.next-carousel').click(function(e){
        e.preventDefault();
        $('#modal-carousel').trigger('next.owl.carousel');
    });

    $('.prev-carousel').click(function(){
        $('#modal-carousel').trigger('prev.owl.carousel', [300]);
    });
    if($(window).width()<767){
        $('.f-accordion-item').click(function(e){
            e.preventDefault();
            $(this).next().addClass('pt-4').slideToggle();
            $(this).parent().prevAll().find('.f-accordion-body').slideUp();
            $(this).parent().nextAll().find('.f-accordion-body').slideUp();
        });    
    }

    $('.bar-click').click(function(){
        $(this).parents('header').siblings('.mobile-nav').removeClass('hidden').addClass('block');
    });
    $('.mobile-nav-close').click(function(){
            $(this).parents('.mobile-nav').addClass('hidden');
    });
    $('#carousel_new').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots:false,
        responsiveClass:true,
        video: true,
        lazyLoad: false,
        responsive:{
            0:{
                items:1,
                nav:false,
                dots:false,
            },
            600:{
                items:1,
                dots:false,
            },
            1200:{
                items:1,
                dots:true,
            }
        }
    });
    
    $('.hero-slider').not('.slick-initialized').slick({
    vertical: true,
    verticalSwiping: true,
    cssEase: "ease-in",
    dots: true,
    infinite: true,
    speed: 350,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    });
    

    $('.vid-icon-xs').click(function(){
        $('.modal-video').fadeIn();
        $('.modal-backdrop').fadeIn();
    });
    $('.modal-video-close').click(function(){
        $(this).parents('.modal-video').fadeOut();
        $(this).parents('.modal-video').siblings('.modal-backdrop').fadeOut();
    });


    function MoveScroll() {
        let supercarry = document.querySelector('.car-line-shape');
        let scrollY = Math.abs(1500 - (window.scrollY || window.pageYOffset));


        if (window.scrollY < 1500) {
            $(".sc-1-wrap").removeClass("is-fixed");
            $(".sc-1").removeClass("is-fixed");
        }

        if (scrollY >= 0 && scrollY < 50) {
            $(".sc-1-wrap").addClass("is-fixed");
            $(".sc-1").addClass("is-fixed");
            supercarry.classList.remove("mystyle");
            
        }

        if (scrollY >= 4500) {
            $(".sc-1-wrap").removeClass("is-fixed");
            $(".sc-1").removeClass("is-fixed");
        }

        if (scrollY >= 4300 && scrollY < 4500) {
            $(".sc-1-wrap").addClass("is-fixed");
            $(".sc-1").addClass("is-fixed");
        }
        let maxScrollY = 5500

        let path = document.getElementById("mPath");

        let pathLen = path.getTotalLength();
        let dist = (pathLen * scrollY / maxScrollY);
        let pos = path.getPointAtLength(dist);
        
        if (dist + 1 <= pathLen) {
            let posAhead = path.getPointAtLength(dist + 1);
            var angle = Math.atan2(posAhead.y - pos.y, posAhead.x - pos.x);
        } else {
            let posBehind = path.getPointAtLength(dist - 1);
            var angle = Math.atan2(pos.y - posBehind.y, pos.x - posBehind.x);
        }
        path.getBoundingClientRect();
        if(pos.x <= 15){
            supercarry.style.left = 0;
        }
        if (pos.x >= 190 && pos.x <= 271) {
            $(document).find('#firstFeature').removeClass('opacity-0');
            $(document).find('#feature-1').removeClass('opacity-0');
        } else {
            $(document).find('#firstFeature').addClass('opacity-0');
            $(document).find('#feature-1').addClass('opacity-0');
           
        }
        if (pos.x >= 466 && pos.x <= 585) {
            $(document).find('#secondFeature').removeClass('opacity-0');
            $(document).find('#feature-2').removeClass('opacity-0');
        } else {
            $(document).find('#secondFeature').addClass('opacity-0');
            $(document).find('#feature-2').addClass('opacity-0');
        }
        if(pos.x >= 784 && pos.x <= 863){
            $(document).find('#thirdFeature').removeClass('opacity-0');
            $(document).find('#feature-3').removeClass('opacity-0');
        }else{
            $(document).find('#thirdFeature').addClass('opacity-0');
            $(document).find('#feature-3').addClass('opacity-0');
        }if(pos.x >= 1066 && pos.x <= 1175){
            $(document).find('#fourthFeature').removeClass('opacity-0');
            $(document).find('#feature-4').removeClass('opacity-0');
        }else{
            $(document).find('#fourthFeature').addClass('opacity-0');
            $(document).find('#feature-4').addClass('opacity-0');
        }if(pos.x >= 1348 && pos.x <= 1462){
            $(document).find('#fifthFeature').removeClass('opacity-0');
            $(document).find('#feature-5').removeClass('opacity-0');
        }else{
            $(document).find('#fifthFeature').addClass('opacity-0');
            $(document).find('#feature-5').addClass('opacity-0');
        }

        let deg = rad2deg(angle);
        supercarry.style.left = pos.x + "px";
        supercarry.style.top = (pos.y) + "px";
        supercarry.style.transform = 'rotate(' + deg + 'deg)';
    }

    function rad2deg(rad) {
        console.log(rad)
        return 180 * rad / Math.PI;
    }


    window.addEventListener("scroll", MoveScroll);
    MoveScroll();

    $('#inputChecked').click(function() {
        if ($(this).is(':checked')) {
            $(this).parents('.switcher-block').siblings('.car-list').find('.car-feature').addClass('hidden');
            $(this).parents('.switcher-block').siblings('.car-list').find('.360-view').removeClass('hidden');
            $(this).parents('.switcher-block').find('.eye').addClass('eye-active');  
            $(this).parents('.minion-switcher').siblings('.color-name').addClass('hidden');

        }else{
            $(this).parents('.switcher-block').siblings('.car-list').find('.car-feature').removeClass('hidden');
            $(this).parents('.switcher-block').siblings('.car-list').find('.360-view').addClass('hidden');
            $(this).parents('.switcher-block').find('.eye').removeClass('eye-active');
            $(this).parents('.minion-switcher').siblings('.color-name').removeClass('hidden');
        }
    });

    $('.tab-pane').hide();
    $('.tab-pane:first').show();
    $('.tabs>a').click(function(e){
        e.preventDefault();
        let _href = $(this).attr("href");
        $('.tabs>a').removeClass('tab-active');
        $(this).addClass('tab-active');
        $('.tab-pane').hide();
        $(_href).fadeIn();
        
    });

});
