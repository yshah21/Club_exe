(function ($) {
    "use strict";

    $(document).ready(function () {
        hotel_wp.ready();
    });

    $(window).load(function () {
        hotel_wp.load();
    });

    var hotel_wp = {

        ready: function () {
            this.language_dropdown();
            this.header_menu();
            this.header_menu_mobile();
            this.back_to_top();
            this.sticky_sidebar();
            this.filter_gallery();
            this.product_gallery();
            this.sc_about_slide();
            this.room_camera();
            this.sc_gallery();
            this.testimonials();
            this.video_play();
            this.list_box();
            this.list_switcher();
            this.rooms_search();
            this.rooms_search_wd();
            this.travel_search();
            this.rooms_search_ts();
            this.rooms_search_popup();
            this.feature_preloading();
            this.sc_travel();
            this.sc_testimonial_slides();
        },

        load: function () {
            this.parallax();
            this.slider_product();
            this.quick_view();
            this.search_box();
            // Gallery
            if( $('.wrapper-gallery').length > 0 ) {
                $('.wrapper-gallery').isotope({filter: '*'});
            }

        },

        sc_testimonial_slides: function () {
            $('.sc-testimonial.style-04').each(function () {
                $('.slider').owlCarousel({
                    items: 1,
                    loop: true,
                    nav: false,
                    dots: false,
                    autoplay: true,
                    autoplayTimeout: 6000,
                    autoplayHoverPause: true,
                });
            });

        },

        sc_travel: function () {
            $('.sc-travel.style-02').each(function () {
                $('.travel-slider').owlCarousel({
                    loop: false,
                    nav: true,
                    dots: false,
                    responsive:{
                        0:{
                            items:1,
                            dots: true,
                        },
                        600:{
                            items:2,
                            dots: true,
                        },
                        1000:{
                            items:3
                        }
                    }
                });
            });

        },

        search_box :function () {
            $('.search-box').on('click', '.toggle-form', function (e) {
                e.preventDefault();
                $('body').toggleClass('active-search');
                var $search = $(this).parent();
                setTimeout(function () {
                    $search.find('.search-field').focus();
                }, 400);
            });

            $('.search-box .background-toggle').on('click', function (e) {
                e.preventDefault();
                $('body').removeClass('active-search');
            });

            $(window).scroll(function() {
                $('body').removeClass('active-search');
            });

        },

        feature_preloading: function () {
            var $preload = $('#preloading');

            if ($preload.length > 0) {
                $preload.fadeOut( 300, function () {
                     $preload.remove();
                });
            }

        },


        rooms_search_popup: function () {
            $(document).on('click', '.form-popup-room .close-popup', function (event) {
                event.preventDefault();
                $('body').removeClass('book-active');
                $('.form-popup-room').removeClass('active');
            });

            $(document).on('click', '.wd-book-room .book-room, .rooms-content-search .book-room a', function (event) {
                event.preventDefault();
                $('body').addClass('book-active');
                $('.form-popup-room').addClass('active');
            });

            $(document).on('click', '.form-popup-room', function (e) {
                if ($(e.target).attr('id') == 'form-popup-room') {
                    $('body').removeClass('book-active');
                    $('.form-popup-room').removeClass('active');
                }
            });

            if ($('.popup-container').length) {

                var el = $('.popup-container'),
                    el_H = el.outerHeight(),
                    win_H = $(window).height();

                if (win_H > el_H) {
                    el.css('top', ( win_H - el_H ) / 2);
                }
            }

            var today = new Date(),
                tomorrow = new Date(),
                start_plus = 1;

            tomorrow.setDate(today.getDate() + start_plus);

            $( "form.hotel-popup-results #popup_check_in_date" ).datepicker({
                dateFormat: "M d, yy",
                minDate        : today,
                maxDate        : '+365D',
                numberOfMonths : 1,
                monthNamesShort: ['Jan', 'Feb', 'March', 'April', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                onSelect       : function () {
                    var date = $(this).datepicker('getDate'),
                        check_in_range_check_out = 1;


                    if (date) {
                        date.setDate(date.getDate() + check_in_range_check_out);
                    }

                    var checkout = $('form.hotel-popup-results #popup_check_out_date');
                    checkout.datepicker('option', 'minDate', date);
                }
            });

            $( "form.hotel-popup-results #popup_check_out_date" ).datepicker({
                minDate        : tomorrow,
                maxDate        : '+365D',
                numberOfMonths : 1,
                dateFormat: "M d, yy",
                monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec" ],
                onSelect       : function () {
                    var check_in = $('form.hotel-popup-results #popup_check_in_date'),
                        selected = $(this).datepicker('getDate'),
                        check_in_range_check_out = 1;

                    selected.setDate(selected.getDate() - check_in_range_check_out);

                    check_in.datepicker('option', 'maxDate', selected);
                }
            });
        },

        rooms_search_wd: function () {
            var today = new Date(),
                tomorrow = new Date(),
                start_plus = 1;

            tomorrow.setDate(today.getDate() + start_plus);

            $( "form.datepicker #check_in_date" ).datepicker({
                dateFormat: "M d, yy",
                minDate        : today,
                maxDate        : '+365D',
                numberOfMonths : 1,
                monthNamesShort: ['Jan', 'Feb', 'March', 'April', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                onSelect       : function () {
                    var date = $(this).datepicker('getDate'),
                        check_in_range_check_out = 1;


                    if (date) {
                        date.setDate(date.getDate() + check_in_range_check_out);
                    }

                    var checkout = $('form.datepicker #check_out_date');
                    checkout.datepicker('option', 'minDate', date);
                }
            });

            $( "form.datepicker #check_out_date" ).datepicker({
                minDate        : tomorrow,
                maxDate        : '+365D',
                numberOfMonths : 1,
                dateFormat: "M d, yy",
                monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec" ],
                onSelect       : function () {
                    var check_in = $('form.datepicker #check_in_date'),
                        selected = $(this).datepicker('getDate'),
                        check_in_range_check_out = 1;

                    selected.setDate(selected.getDate() - check_in_range_check_out);

                    check_in.datepicker('option', 'maxDate', selected);
                }
            });
        },

        travel_search: function () {
            var today = new Date();

            $( ".sc-travel-search #date-in" ).datepicker({
                dateFormat: "dd-mm-yy",
                minDate        : today,
                maxDate        : '+365D',
                numberOfMonths : 1
            });
        },

        rooms_search: function () {
            function widthDay() {
                $('.sc-hb-rooms-search.style-01 input.day').each(function () {
                    var text = $(this).val() + 1;
                    var getWidth = $('<span class="getWidth">' + text + '</span>').insertAfter(this);
                    $(this).css({'width': getWidth.outerWidth()}).next('.getWidth').remove();
                });
            }

            if (typeof(hotel_settings) === 'undefined') {

            }else{
                $('.sc-hb-rooms-search.style-01 input[id^="check_in_date"]').datepicker("option", {
                    altField: $('.sc-hb-rooms-search.style-01 input[id^="check_in_date"]').parent().find('.day'),
                    altFormat: "dd.",
                });
                $('.sc-hb-rooms-search.style-01 input[id^="check_out_date"]').datepicker("option", {
                    altField: $('.sc-hb-rooms-search.style-01 input[id^="check_out_date"]').parent().find('.day'),
                    altFormat: "dd.",
                });
                widthDay();
            };

            if (typeof(hotel_settings) === 'undefined') {
                var start_plus = 1;
            } else {
                var start_plus = hotel_settings.min_booking_date + 1;
            }
            start_plus = parseInt(start_plus);
            var date_min = new Date();
            date_min.setDate(date_min.getDate());

            $('#multidate, #multidate2').daterangepicker({
                parentEl: ".sc-hb-rooms-search.style-01 .hb-form-table",
                minDate: date_min,
                autoclose: true,
                autoApply: true
            });

            $('#multidate, #multidate2').DateRangePickerMinDate({
                dateMin: start_plus
            });

            $('#multidate').on('apply.daterangepicker', function (ev, picker) {

                $('.sc-hb-rooms-search.style-01 input[id^="check_in_date"]').val(picker.startDate.format('MMMM DD, YYYY'));
                $('#day').val(picker.startDate.format('DD.'));
                $('#month').val(picker.startDate.format('MMM YYYY'));
                $('.sc-hb-rooms-search.style-01 input[id^="check_out_date"]').val(picker.endDate.format('MMMM DD, YYYY'));
                $('#day2').val(picker.endDate.format('DD.'));
                $('#month2').val(picker.endDate.format('MMM YYYY'));

                widthDay();

            });

            $('#multidate2').on('apply.daterangepicker', function (ev, picker) {

                $('.sc-hb-rooms-search.style-01 input[id^="check_in_date"]').val(picker.startDate.format('MMMM DD, YYYY'));
                $('#day').val(picker.startDate.format('DD'));
                $('#month').val(picker.startDate.format('MMM YYYY'));
                $('.sc-hb-rooms-search.style-01 input[id^="check_out_date"]').val(picker.endDate.format('MMMM DD, YYYY'));
                $('#day2').val(picker.endDate.format('DD'));
                $('#month2').val(picker.endDate.format('MMM YYYY'));

                widthDay();

            });

            $('#multidate, #multidate2').on('cancel.daterangepicker', function (ev, picker) {
                $(this).val('');
            });
        },

        rooms_search_ts: function () {
            var $form = $('form[name=hb-search-form]');

            $form.on('click', '.hb-submit button', function (e) {
                setTimeout(function () {
                    $form.find('input').each(function (index, element) {
                        if ($(element).hasClass('error')) {
                            var id = $(element).attr('id');
                            $('.' + id).addClass('error');
                        }
                        else {
                            $(element).removeClass('error');
                        }
                    });
                }, 300);
            });

            //Multidate
            $('#guests').each(function () {
                var $form_list = $('.sc-hb-rooms-search.style-01 .hb-form-field-list');
                $('#guests').on('click touch', function () {
                    $form_list.toggleClass('active');
                });
                $(document).on('click touch', function (event) {
                    if (!$(event.target).parents().addBack().is('#guests')) {
                        $form_list.removeClass('active');
                    }
                });
                $form_list.on('click touch', function (event) {
                    event.stopPropagation();
                });
            });

            $('.goUp').on('click', function () {
                var index = $('select[name="adults_capacity"] option:selected').index();
                var count = $(' select[name="adults_capacity"] option').length;

                if (index + 1 >= count) {
                    return;
                }

                var selected = $($('select[name="adults_capacity"] option')[index + 1]).val();

                $('select[name="adults_capacity"]').val(selected);

            });
            $('.goDown').on('click', function () {
                var index = $('select[name="adults_capacity"] option:selected').index();
                if (index <= 0) {
                    return;
                }
                var selected = $($('select[name="adults_capacity"] option')[index - 1]).val();
                $('select[name="adults_capacity"]').val(selected);
            });

            function changeNumber() {
                var $max_child = $(' select[name="max_child"] option:selected').html();
                var $adults_capacity = $('select[name="adults_capacity"] option:selected').html();
                var $number_total = Math.round($adults_capacity);
                if ($number_total < 10) {
                    $('#number').val('0' + $number_total);
                } else {
                    $('#number').val($number_total);
                }
            }

            $('.sc-hb-rooms-search.style-01 .goUp').on('click', function () {
                changeNumber();
            });
            $('.sc-hb-rooms-search.style-01 .goDown').on('click', function () {
                changeNumber();
            });
        },

        list_switcher    : function () {

            var activeClass = 'switcher-active';
            var gridClass = 'layout-grid';
            var listClass = 'layout-list';

            $('.switchToGrid').on('click', function () {
                switchToGrid();
            });
            $('.switchToList').on('click', function () {
                switchToList();
            });

            function switchToGrid() {
                $('.switchToGrid').addClass(activeClass);
                $('.switchToList').removeClass(activeClass);
                $('.archive_switch').fadeOut(300, function () {
                    $(this).removeClass(listClass).addClass(gridClass).fadeIn(300);
                });
                localStorage.products_page = 'grid';
            }

            function switchToList() {
                $('.switchToList').addClass(activeClass);
                $('.switchToGrid').removeClass(activeClass);
                $('.archive_switch').fadeOut(300, function () {
                    $(this).removeClass(gridClass).addClass(listClass).fadeIn(300);
                });
                localStorage.products_page = 'list';
            }
        },

        list_box: function () {
            $('.sc-list-box.style-01').each(function () {
                $('.list-box-slider').owlCarousel({
                    loop:false,
                    margin:10,
                    nav: false,
                    responsive:{
                        0:{
                            items:1
                        },
                        600:{
                            items:2
                        },
                        1000:{
                            items:4
                        }
                    }
                });
            });

        },

        video_play: function () {
            //Background video
            $('.video-play').on( "click", function () {
                $('.cover-image').css('display','none');
                $('.title-video').css('display','none');
                var elem = $(this),
                    video = $(this).parents('.sc-video').find('.full-screen-video'),
                    player = video.get(0);
                if (player.paused) {
                    player.play();
                    elem.removeClass('ion-ios-play');
                    elem.addClass('ion-ios-pause');
                } else {
                    player.pause();
                    elem.removeClass('ion-ios-pause');
                    elem.addClass('ion-ios-play');
                }
            });
        },

        sc_gallery: function () {
            var $our_gallery = $(".sc-gallery.style-01");
            $our_gallery.each(function () {
                var $element = $(this).find('.gallery-slider');

                $element.owlCarousel({

                    margin: 15,
                    loop: true,
                    lazyLoad: true,
                    autoplay:true,
                    autoplayTimeout:2000,
                    autoplayHoverPause:true,
                    responsive: {
                        0: {
                            items: 1,
                            dots: true,
                        },
                        480: {
                            items: 2,
                            dots: true,
                        },
                        640:{
                            items: 3,
                        },

                        1024: {
                            items: 4,
                        },
                        1200: {
                            items: 6
                        }
                    }

                });
            });

            var $gallery_img = $(".sc-gallery.style-01, .rooms-content-search .room-media");

            $gallery_img.each(function () {

                $('a.btn-gallery').on('click', function(event) {
                    event.preventDefault();

                    var gallery = $(this).attr('href');

                    $(gallery).magnificPopup({
                        delegate: 'a',
                        type:'image',
                        gallery: {
                            enabled: true
                        }
                    }).magnificPopup('open');
                });

            });
        },

        room_camera: function () {

            var $room_single = $('body.single').find('.room-single, .blog-single-content');

            $room_single.each(function () {
                $('#camera_wrap').camera({
                    height: '470px',
                    loader: 'none',
                    pagination: false,
                    thumbnails: false
                });
            });

        },

        parallax: function () {
            var windown_width = $(window).outerWidth(),
                $page_title = $('.page-title');

            $page_title.each(function () {
                if (windown_width > 1024) {
                    $(window).stellar({
                        horizontalOffset: 0,
                        verticalOffset: 0
                    });
                }
            });
        },

        sc_about_slide: function () {
            var $slides = $('.sc-about-slides');

            $slides.each(function () {

                $slides.find('.slides').owlCarousel({
                    loop             : true,
                    lazyLoad         : true,
                    dots             : false,
                    nav              : true,
                    animateOut       : 'fadeOut',
                    autoplay         : true,
                    autoplayTimeout  : 2000,
                    autoplayHoverPause: true,
                    responsive: {
                        0: {
                            items: 1,
                        },
                        768: {
                            items: 2,
                        },
                    }
                });
            })
        },

        quick_view: function () {
            $('.quick-view a').magnificPopup({
                type: 'ajax',
            });
        },

        product_gallery: function () {
            $('.shop-single-content #slider .slides ').magnificPopup({
                delegate: 'a',
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
        },

        slider_product: function () {
            var $slider_product = $('.media-slider');

            $slider_product.each(function () {
                $('#carousel').flexslider({
                    animation    : "slide",
                    direction    : "vertical",
                    controlNav   : false,
                    animationLoop: false,
                    slideshow    : false,
                    itemWidth    : 100,
                    itemMargin   : 5,
                    maxItems     : 4,
                    directionNav : false,
                    asNavFor     : '#slider'
                });

                $('#slider').flexslider({
                    animation    : "slide",
                    controlNav   : false,
                    animationLoop: false,
                    directionNav : false,
                    slideshow    : false,
                    sync         : "#carousel"
                });
            })
        },

        slider_project: function () {
            var $project_single = $('article.single-slides');

            $project_single.each(function () {
                $(' #carousel').flexslider({
                    animation: "slide",
                    controlNav: false,
                    animationLoop: false,
                    slideshow: false,
                    itemWidth: 259,
                    itemMargin: 0,
                    asNavFor: '#slider'
                });

                $('#slider').flexslider({
                    animation: "slide",
                    autoplay: true,
                    pauseOnHover: false,
                    controlNav: false,
                    animationLoop: false,
                    slideshow: false,
                    itemHeight: 575,
                    sync: "#carousel"
                });
            })
        },

        sc_video_box: function () {
            $('.sc-video-box .video-thumbnail').magnificPopup({
                type: 'iframe',
         });
        },

        sc_projects: function () {
            $('.sc-project.home-style-1 a.popup-link ').magnificPopup({
                type: 'image',
            });

            $(document).on('click', '.filter-controls .filter', function (e) {
                e.preventDefault();
                var filter = $(this).data('filter'),
                    filter_wraper = $(this).parents('.project-archive').find('.wrapper-project');
                $('.filter-controls .filter').removeClass('active');
                $(this).addClass('active');
                filter_wraper.isotope({filter: filter});
            });
        },

        sc_services: function () {
            var $services = $('.sc-service.style-3');

            $services.each(function () {

                $('.slide').owlCarousel({
                    lazyLoad         : true,
                    dots             : false,
                    nav              : true,
                    responsive: {
                        0: {
                            items: 1,
                            dots: true,
                            nav: false,
                        },
                        768: {
                            items: 2,
                            dots: true,
                            nav: false,
                        },
                        1200: {
                            items: 3
                        }
                    }
                });
            })
        },

        our_team: function () {
            var $thim_teams = $('.sc-our-team');

            $thim_teams.each(function () {

                $(".slider").owlCarousel({
                    pagination       : true,
                    lazyLoad         : true,
                    responsive: {
                        0: {
                            items: 1,
                            dots: true,
                            nav: false
                        },

                        568: {
                            items: 2,
                            dots: true,
                            nav: false
                        },

                        600: {
                            items: 3,
                            dots: true,
                            nav: false
                        },
                        800: {
                            items: 3,
                            dots: true,
                            nav: false
                        },
                        1200: {
                            items: 4
                        }
                    }
                });
            })
        },

        client_logo: function () {
            var $thim_brands = $('.sc-client-logo.style-1,.sc-client-logo.style-2 '),
                autoplay = $thim_brands.data('nav') ? true : false,
                item = $thim_brands.data('itemsvisible');

            $thim_brands.each(function () {

                $(this).find('.owl-carousel').owlCarousel({
                        dots: false,
                        nav: autoplay,
                        responsive: {
                            0   : {
                                items: 1,
                            },
                            600   : {
                                items: 2,
                            },
                            768 : {
                                items: 4,
                            },
                            1200: {
                                items: item,
                            }
                        },
                    }
                )
            })
        },

        testimonials: function () {
            $('.sc-testimonials.style-01').each(function () {
                var elem = $(this).find('.testimonial-slider'),
                    itemsvisible = elem.data('itemsvisible');

                var testimonial_slider = elem.thimContentSlider({
                    items            : elem,
                    itemsVisible     : itemsvisible,
                    mouseWheel       : false,
                    autoPlay         : true,
                    itemMaxWidth     : 72,
                    itemMinWidth     : 72,
                    activeItemRatio  : 1.35,
                    activeItemPadding: 0,
                    itemPadding      : 0 -5
                });
            });

            $('.sc-testimonials.style-02').each(function () {
                var elem = $(this).find('.testimonial-slider2');

                var testimonial_slider2 = elem.owlCarousel({
                    loop: true,
                    autoplay:true,
                    autoplayTimeout:2000,
                    autoplayHoverPause:true,
                    items: 1,
                    nav: false,
                    animateOut: 'fadeOut',
                    animateIn: 'slideInUp'
                });
            });
        },

        slider: function () {
            $('.single-slides .image-slides').owlCarousel({
                loop :true,
                items : 1,
                nav: true,
                dots: true,
                autoplay:true,
                autoplayTimeout:2000,
                autoplayHoverPause:true
            }),
            /**/
            $('.list-team.slider').owlCarousel({
                loop :true,
                responsiveClass:true,
                responsive:{
                    0:{
                        items: 1,
                    },
                    600:{
                        items:2,
                    },
                    1000:{
                        items:4,
                    }
                }
            })
        },

        language_dropdown: function () {

            $('.language .dropdown').on({
                mouseenter: function () {
                    $(this).addClass('active');
                    $(this).children('.dropdown-language').stop(true, false).slideDown(250);
                },
                mouseleave: function () {
                    $(this).removeClass('active');
                    $(this).children('.dropdown-language').stop(true, false).slideUp(250);
                }
            });
        },

        header_menu_mobile: function () {
            $(document).on('click', '.menu-mobile-effect', function (e) {
                e.stopPropagation();
                $('body').toggleClass('mobile-menu-open');
            });


            $(document).on('click', 'body.mobile-menu-open .overlay-close-menu', function () {
                $('body').removeClass('mobile-menu-open');
            });

            $('header li.has-children >a, header li.has-children >span').after('<span class="icon-toggle"><i class="fa fa-caret-down"></i></span>');

            $('.mobile-menu-container .main-menu> li.has-children > span, .mobile-menu-container .main-menu> li.has-children > a').after('<span class="icon-toggle"><i class="fa fa-caret-down"></i></span>');

            $('.mobile-menu-container .main-menu >li.has-children .icon-toggle').on('click', function () {
                if ($(this).next('ul.sub-menu').is(':hidden')) {
                    $(this).next('ul.sub-menu').slideDown(200, 'linear');
                    $(this).html('<i class="fa fa-caret-up"></i>');
                } else {
                    $(this).next('ul.sub-menu').slideUp(200, 'linear');
                    $(this).html('<i class="fa fa-caret-down"></i>');
                }
            });
        },

        header_menu: function () {
            var $header = $('#masthead.sticky-header'),
                off_Top = ($('.content-pusher').length > 0) ? $('.content-pusher').offset().top : 0,
                $topbar = $('#thim-header-topbar'),
                latestScroll = 0,
                target = 2;


            $(window).scroll(function () {
                    var current = $(this).scrollTop();

                    if (current >= target) {
                        $header.removeClass('affix-top').addClass('affix');

                    } else {
                        $header.removeClass('affix').addClass('affix-top');
                        $('body').removeClass('sticky-affix')

                    }

                    if (current > latestScroll && current > off_Top) {
                        if (!$header.hasClass('menu-hidden')) {
                            $header.addClass('menu-hidden');
                            $('body').removeClass('sticky-affix').addClass('affix-top');
                        }
                    }
                    else {
                        if ($header.hasClass('menu-hidden')) {
                            $header.removeClass('menu-hidden');
                            $('body').addClass('sticky-affix');
                        }
                    }

                    latestScroll = current;
                }
            );

            $('#masthead .main-menu > .has-children, .main-menu > li ul li').on({
                mouseenter: function () {
                    $(this).children('.sub-menu').stop(true, false).slideDown(250);
                },
                mouseleave: function () {
                    $(this).children('.sub-menu').stop(true, false).slideUp(250);
                }
            });

        },

        back_to_top: function () {
            var $element = $('#back-to-top');

            $(window).scroll(function () {
                if ($(this).scrollTop() > 100) {
                    $element.addClass('scrolldown').removeClass('scrollup');
                } else {
                    $element.addClass('scrollup').removeClass('scrolldown');
                }
            });

            $element.on('click', function () {
                $('html,body').animate({scrollTop: '0px'}, 800);
                return false;
            });
        },

        sticky_sidebar: function () {
            var offsetTop = 20;

            if ($("#wpadminbar").length) {
                offsetTop += $("#wpadminbar").outerHeight();
            }
            if ($("#masthead.affix").length) {
                offsetTop += $("#masthead.affix").outerHeight();

            }

            if ($('.sticky-sidebar').length > 0) {

                $("aside.sticky-sidebar").theiaStickySidebar({
                    "containerSelector": "",
                    "additionalMarginTop": offsetTop,
                    "additionalMarginBottom": "0",
                    "updateSidebarHeight": false,
                    "minWidth": "768",
                    "sidebarBehavior": "modern"
                });
            }

        },

        filter_gallery: function () {
            $(document).on('click', '.filter-controls .filter', function (e) {
                e.preventDefault();
                var filter = $(this).data('filter'),
                    filter_wraper = $(this).parents('.sc-gallery').find('.wrapper-gallery');
                $('.filter-controls .filter').removeClass('active');
                $(this).addClass('active');
                filter_wraper.isotope({
                    filter: filter
                });
            });

            $('.wrapper-gallery').magnificPopup({
                delegate: 'a',
                type: 'image',
                gallery: {
                    enabled: true
                },
                zoom: {
                    enabled: true,
                    duration: 300,
                    opener: function(element) {
                        return element.find('img');
                    }
                }
            });
        },

        filter_project: function () {

            $(document).on('click', '.filter-controls .filter', function (e) {
                e.preventDefault();
                var filter = $(this).data('filter'),
                    filter_wraper = $(this).parents('.project-archive').find('.wrapper-project');
                $('.filter-controls .filter').removeClass('active');
                $(this).addClass('active');
                filter_wraper.isotope({filter: filter});
            });
        }

    };

})(jQuery);