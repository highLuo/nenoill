$(function () {
        var swiperFlag = false;
        var wyzVido = new Swiper('.e_bannerD-1 .swiper-container', {
            autoplay: {
                delay: 6000,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            },
            speed: 1200,
            loop: true,
            navigation: {
                nextEl: '.e_bannerD-1 .p_btn_next ',
                prevEl: '.e_bannerD-1 .p_btn_prev ',
            },
            pagination: {
                el: '.e_bannerD-1 .p_pagenation',
                clickable: true,
            },
            // 切换完毕事件
            on: {
                init: function () {
                },
                slideChangeTransitionEnd: function () {

                    var _this = $('.e_bannerD-1 .swiper-container .swiper-slide').eq(this.activeIndex);
                    // 执行一下
                    if (!swiperFlag) {
                        swiperFlag = true;
                    } else {
                        videoSelect(_this);
                    }
                }
            }
        });
        videoSelect($('.e_bannerD-1 .swiper-container .swiper-slide.swiper-slide-active'));

        function videoSelect(_this) {
            var cc = _this.find('.videoContent .video').length;
            console.log(cc);
            if (cc) {
                wyzVido.autoplay.stop();
                _this.find('.videoContent .video').trigger('play');

                _this.find('video').bind('ended', function () {
                    wyzVido.slideNext();
                    wyzVido.autoplay.start();
                });
            }
        }


    })