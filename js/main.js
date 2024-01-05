$(document).ready(function(){
    // header hide

    $(window).scroll(function(){
        let st = $(this).scrollTop()
        console.log(st)
        if(st > 450){      
            $('header').addClass('hide')    
            $('.mb-bt').addClass('hide')  
        }else{ 
            $('header').removeClass('hide')  
            $('.mb-bt').removeClass('hide')  
        }
    })

    // all-menu
    $('.all-menu').click(function(){
        $('.all-nav-wrapper').addClass('all-nav-wrapper-active')
        $('.all-nav-mask').addClass('all-nav-mask-active')
    })
    
    $('.all-nav-close').click(function(){
        $('.all-nav-wrapper').removeClass('all-nav-wrapper-active')
        $('.all-nav-mask').removeClass('all-nav-mask-active')
    })

    // 모바일

    
     $('.mb-bt').click(function(e){
        e.preventDefault();
        $('.mb-bt').toggleClass('mb-bt-open')
        $('.mb-menu-mask').toggleClass('mb-menu-mask-active')
        $('.mb-nav').toggleClass('mb-nav-open')
     })
    
    $(window).resize(function(){
        let temp = $(window).width()
        if(temp > 1220 ){
        //    [모바일] 3가지 클래스 remove
        $('.mb-bt').removeClass('mb-bt-open')
        $('.mb-menu-mask').removeClass('mb-menu-mask-active')
        $('.mb-nav').removeClass('mb-nav-open')
        }else {
            // [전체메뉴] 2가지 클래스 remove
            $('.all-nav-wrapper').removeClass('all-nav-wrapper-active')
            $('.all-nav-mask').removeClass('all-nav-mask-active')
        }
    })

    //모바일 서브메뉴 
    const mb_mainmenu = $('.mb-mainmenu')
          mb_submenu = $('.mb-submenu') 
    let mb_submenu_height = [];

    $.each(mb_submenu, function(index){
        let count = $(this).find('li').length;
        mb_submenu_height[index]=51*count+22 
        console.log(count)
    })
    // console.log(mb_submenu_height)
    // console.log(mb_mainmenu)
    // console.log(mb_submenu)


    let mb_li = $('.mb-menu > li')
    $.each(mb_mainmenu, function(index){
        $(this).click(function(e){
            e.preventDefault();
            // mb-main-open class 추가를 해서 있으면 펼치고 없으면 닫기
            $(this).toggleClass('mb-mainmenu-open')
            let active = $(this).hasClass('mb-mainmenu-open')
            if(active){
                //클릭 됐다
                // 해당(클릭된) li>a의 높이값을 저장
                let temp = mb_submenu_height[index]
                mb_li.eq(index).height(temp+ 54)
                // 저장한 높이값에다가 + 54
            }else{
                //클릭 안됐다
                //mb_li 높이값을  54
                mb_li.eq(index).height(54)

            }
        })
    })
    

    // swiper
    new Swiper(".sw-visual", {
        autoplay: true, 
        loop: true,  
        effect: "fade", 
        speed: 3000,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    let sw_banner = new Swiper(".sw-banner", {
        slidesPerView: 2, 
        autoplay: true, 
        loop: true,
        breakpoints: {
            1023 : {slidesPerView: 6},
            872 : {slidesPerView: 5},
            676 : {slidesPerView: 4},
            450 : {slidesPerView: 3},
            320 : {slidesPerView: 2},
        },
        spaceBetween: 13, 
        navigation: {
            nextEl : ".banner-forward",
            prevEl : ".banner-back"
        }
    });

    // gotop 클릭했을 때 할일 
    // html, body 에 animate => 스크롤탑 0  /////// 초입력
    $('.gotop').click(function(){
        $('html, body').animate({
            scrollTop : 0
        }, 500)
    })

    // banner
    const banner_back = $('.banner-back')
    const banner_play = $('.banner-play')
    const banner_forward = $('.banner-forward')

    banner_play.click(function(){
        $(this).toggleClass('banner-play-start')
        let temp = $(this).hasClass('banner-play-start')
        if(temp){
            // 슬라이드 작동 안함
            sw_banner.autoplay.stop()
        }else{
            // 슬라이드 작동 
            sw_banner.autoplay.start()
        }
    })





})