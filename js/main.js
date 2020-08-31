jQuery(window).on('load',function(){
    $('#navi-section').addClass('complete');
    $homeEl =  anime.timeline({
        easing: 'easeOutExpo',
    });
    $homeEl.add({
        targets: '.home-landing',
        width: ['0','100%'],
        opacity:[0,1],
        translateX: ['100%', '0'],
        duration: 700,
    });
    $homeEl.add({
        targets: '#gray-square',
        opacity: [0 ,1],
        translateX: ['-200%', '0'],
        duration: 200,
    });
    $homeEl.add({
        targets: '#gray-square',
        width: ['0', '55%'],
        duration: 700,
    });
    $homeEl.add({
        targets: '.lead-hero-landing h1, .lead-hero-landing li',
        opacity:[0,1],
        translateY: ['100%', '0'],
        delay: (el, i) => 200 * i,
    })
   
});
jQuery(document).ready(function($) {
    const main = {
        init: function() {
            this.hamburger()
            this.onePageScroll()
        },

        navAnim: function(){
            $open = $('#navigation-container.open');
            $close = $('#navigation-container.close');
            if( $open.length){

                anime.timeline({
                    easing: 'easeOutExpo',
                })
                .add({
                    targets: '#navigation-container.open',
                    translateX: ['110%', '0'],
                    opacity:  [0,1],
                    duration: 100,
                    offset: 100,
                })
                .add({
                    targets: '#navigation-container.open #nav-side',
                    translateX: ['-100%', '0'],
                    opacity:  [0,1],
                    duration: 200,   
                    offset: 100,
                })
                .add({
                    targets: '#navigation-container.open #social-side',
                    translateX:  ['100%', '0'],
                     opacity:{
                        value:[0,1],
                        easing:'linear'
                    },
                    duration: 200,
                    offset: 100,
                })
                .add({
                    targets: '.nav-item li, .contact-div p',
                    opacity:  [0, 1],
                    translateY:  ['-100%', '0'],
                    delay: (el, i) => 110 * i,
                    duration: 200,
                    offset: 100,
                })
                .add({
                    targets: '.social-nav li',
                    translateX:  ['-100%', '0'],
                    opacity:  [0, 1],
                    duration: 200,
                    delay: (el, i) => 100 * i,
                    offset: 100,
                })
                
            }
            else{
                anime.timeline({
                    easing: 'easeOutExpo',
                })
                .add({
                        targets: '#navigation-container.close #nav-side',
                        translateX: ['0', '-100%'],
                        opacity:  [1,0],
                        duration: 200,
                    })
                .add({
                    targets: '#navigation-container.close #social-side',
                    translateX: ['0', '100'],
                    opacity:  [1,0],
                    duration: 100,
                    offset: '-=200',
                    })
                .add({
                    targets: '#navigation-container.close',
                    translateX: ['0','250%'],
                    opacity:  [1,0],
                    duration: 100,
                })
                
            }
            
        },
        hamburger:  function(){

            $('#nav-icon1').click(function(){
                $(this).toggleClass('open');
                $('.navi-section').toggleClass('open');
                $('#navigation-container').toggleClass('open');
                $('#navigation-container').toggleClass('close');
                main.navAnim();
            });

        },
        onePageScroll: function(){

        },        
    }
    main.init();

});