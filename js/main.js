jQuery(window).on('load',function(){
    $('#navi-section').addClass('complete');

    $('#sc-container').addClass('open');
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
    });
});
jQuery(document).ready(function($) {
    const main = {
        isAnimating: 0,
        init: function() {
            this.hamburger()
            // this.onePageScroll()
            // this.fullpage()
            this.stacksAnim();
            this.elemAnim()
            this.navAnim()
            this.nav()
            this.leadAnim()
            this.projectsAnim()
            this.projectModal()
            this.gsapModal()
            this.inputAnim()
            // this.animateLogo()
        },
        // animateLogo: function(){
        //     var animateL = gsap.timeline({ease:'Expo.easeOut',});
        //     animateL
        //     .from('#svg',{y:'-10%', autoAlpha:0, duration:2,repeat:-1});
        // },
        inputAnim: function(){
            $(".input-effect input").focusout(function(){
                if($(this).val() != ""){
                    $(this).addClass("has-content");
                }else{
                    $(this).removeClass("has-content");
                }
            })
        },
        gsapModal: function(){
            $('.modal-gsap .close-gmodal').on('click', function(){
                $this = $(this);
                var modalID = $this.data('close');
                var animateProj = gsap.timeline({ease:'Expo.easeOut',});
                    animateProj
                    // .to(modalID,{autoAlpha : 0,duration: .2,});
                    .set('#works .bg-black-project',{ x:'100%'})
                    .to(modalID+' .content-area-modal',{x:'100%', autoAlpha:0, duration:.6})
                    .to(modalID+' .modal-img-hero',{y:'-20%', autoAlpha:0,duration:.4},'-=.4')
                    .to(modalID,{ x:'100%',display:'hiden',duration: .2})
                    .to('#works .bg-black-project',{ x:0,duration:.3})
            });
            $('.modal-trigger').on('click', function(){
                $this = $(this);
                var modalID = $this.data('target');
                var animateModal = gsap.timeline({ease:'Expo.easeIn'});
                animateModal
                .set(modalID, {x:'100%',display:'block'})
                .set(modalID+' .content-area-modal',{x:'-100%', autoAlpha:0})
                .set(modalID+' .modal-img-hero',{y:'-20%', autoAlpha:0})
                .to('#works .bg-black-project',{ x:'100%', duration: .5})
                .to(modalID,{ x:0,  duration: .6})
                .to(modalID+' .content-area-modal',{x:0, duration:.8, autoAlpha:1}, '-=.5')
                .to(modalID+' .modal-img-hero',{y:0 ,duration: 1, autoAlpha:1})
                
            });

        },
        projectModal: function(){

        },
        projectsAnim: function(){
            $('#project-nav ul>li').on('click', function(){
                var $clicked = $(this).data('id');
                var $current = $('#project-nav ul>li.active').data('id');
                if($clicked == $current) return
                var animateProj = gsap.timeline({ease:'Expo.easeOut',});
                    animateProj
                    .to('#'+$current+' #project-image-container',{y: "10%",autoAlpha : 0,duration: .2,})
                    .to('#'+$current+' #project-des',{y: "-20%",autoAlpha : 0,},"-=.1",)
                    .to('#'+$current,{ className:'-=d-none'})
                    .fromTo('#'+$clicked+' #project-image-container',{y: '10%',autoAlpha : 0},{y: 0,autoAlpha : 1,duration: .2},"-=.8",)
                    .to('#'+$clicked,{ className:''},"-=.8")
                    .fromTo('#'+$clicked+' #project-des',{ y: '-10%',autoAlpha : 0},{ y: 0,autoAlpha : 1},"-=.8")
                $('#project-nav ul>li.active').removeClass('active');
                $(this).addClass('active');
            })
        },
        nav: function(){

            $('.nav-item a').on('click', function(){
                $('#nav-icon1').toggleClass('open');
                $('.navi-section').toggleClass('open');
                $('#navigation-container').toggleClass('open');
                $('#navigation-container').toggleClass('close');
                main.navAnim();
            });
        },
       
        stacksAnim: function(){
            $('#stack-list i').on('click', function(){
             var $this = $(this);
             var iName = $this.data('iname');
             var iCon = $this.data('icon');
             $('#icon-desc').html(iName);

             $('#stack-show-icon i').attr('class', '').addClass(iCon);
             anime({
                targets: '#icon-desc',
                easing: 'easeOutExpo',
                opacity: [0,1],
                translateY: ['20%',0],
                duration: 700
              });
              anime({
                targets: '#stack-show-icon i',
                easing: 'easeOutExpo',
                opacity: [0,1],
                translateX: ['10%',0]
              });
            });
        },
        elemAnim: function(){
            

            var els = $("#stack-list i");
            els.each(function(i,e){
                var tlAbout = gsap.timeline({
                    scrollTrigger:{
                        trigger: this,
                        start: 'top 90%',
                        end: "10% top",
                    },
                });
                tlAbout.from(this, {y:'15%', opacity: 0 ,duration: .3, });
            });
            var leftDash = $(".animate.left-dash");
            leftDash.each(function(i,e){
                var dashLeft = gsap.timeline({
                    scrollTrigger:{
                        trigger: this,
                        start: 'top 80%'
                    },
                });
                dashLeft.from(this, {x:'15%', opacity: 0 ,duration: .5, });
            });
            var rightDash = $(".animate.right-dash");
            rightDash.each(function(i,e){
                var dashRight = gsap.timeline({
                    scrollTrigger:{
                        trigger: this,
                        start: 'top 80%'
                    },
                });
                dashRight.from(this, {x:'-15%', opacity: 0 ,duration: .5, });
            });
            var rotate = $(".animate.rotate-left");
            rotate.each(function(i,e){
                var leftR = gsap.timeline({
                    scrollTrigger:{
                        trigger: this,
                        start: 'top center'
                    },
                });
                leftR.from(this, {x:'-15%', opacity: 0,rotate:60 ,duration: 1, });
            });


            var tlProgject = gsap.timeline({
                scrollTrigger:{
                    trigger: '#works',
                    // start - scroller start 
                    start: 'top 60%',
                    // end - scroller end 
                    end: "10% top",
                    // markers: true,
                },
            });
            
            tlProgject.from('.bg-black-project', {x:'100%', opacity: 0 ,duration: .9, });
            tlProgject.from('#project-nav', {x:'100%', opacity: 0 },'-=.6');
            tlProgject.from('#project-image-container', {y:50, opacity: 0 ,duration: .3},'-=.3');
            
            var els = $("#about p");
            els.each(function(i,e){
                var tlAbout = gsap.timeline({
                    scrollTrigger:{
                        trigger: this,
                        start: 'top 60%',
                        // end - scroller end 
                        end: "10% top",
                    },
                });
                
                tlAbout.from(this, {y:'15%', opacity: 0 ,duration: .3, });
            });
            var tlsection = gsap.timeline({
                scrollTrigger:{
                    trigger: 'section',
                        // start: '-10% 60%',
                        // // end - scroller end  
                        // end: "10% top",
                        // markers: true,
                },
            });
            tlsection.staggerFrom('p', .1, {x:30,opacity: 0});
        },

        fullpage: function(){
        
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

                console.log('its close')
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
        leadAnim: function(){
            var TxtType = function(el, toRotate, period) {
                this.toRotate = toRotate;
                this.el = el;
                this.loopNum = 0;
                this.period = parseInt(period, 10) || 2000;
                this.txt = '';
                this.tick();
                this.isDeleting = false;
            };
        
            TxtType.prototype.tick = function() {
                var i = this.loopNum % this.toRotate.length;
                var fullTxt = this.toRotate[i];
        
                if (this.isDeleting) {
                this.txt = fullTxt.substring(0, this.txt.length - 1);
                } else {
                this.txt = fullTxt.substring(0, this.txt.length + 1);
                }
        
                this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
        
                var that = this;
                var delta = 200 - Math.random() * 100;
        
                if (this.isDeleting) { delta /= 2; }
        
                if (!this.isDeleting && this.txt === fullTxt) {
                delta = this.period;
                this.isDeleting = true;
                } else if (this.isDeleting && this.txt === '') {
                this.isDeleting = false;
                this.loopNum++;
                delta = 500;
                }
        
                setTimeout(function() {
                that.tick();
                }, delta);
            };
        
            window.onload = function() {
                var elements = document.getElementsByClassName('typewrite');
                for (var i=0; i<elements.length; i++) {
                    var toRotate = elements[i].getAttribute('data-type');
                    var period = elements[i].getAttribute('data-period');
                    if (toRotate) {
                      new TxtType(elements[i], JSON.parse(toRotate), period);
                    }
                }
                // INJECT CSS
                var css = document.createElement("style");
                css.type = "text/css";
                css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
                document.body.appendChild(css);
            };
        } 
       
    }
    
    main.init();

});