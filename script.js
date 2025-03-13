$(function () {
    let headerElem = $('header');
    let logo = $('#logo');
    let navMenu = $('#nav-menu');
    let navToggle = $('#nav-toggle');

   
      
    // Initialize properties slider
    $('#properties-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<a href="#" class="slick-arrow slick-prev">previous</a>',
        nextArrow: '<a href="#" class="slick-arrow slick-next">next</a>',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    });

    // Mobile menu toggle
    navToggle.on('click', () => {
        navMenu.css('right', '0');
    });

    // Close mobile menu
    $('#close-flyout').on('click', () => {
        navMenu.css('right', '-100%');
    });

    // Close mobile menu when clicking outside
    $(document).on('click', (e) => {
        let target = $(e.target);
        if (!(target.closest('#nav-toggle').length > 0 || target.closest('#nav-menu').length > 0)) {
            navMenu.css('right', '-100%');
        }
    });

    // Handle scroll effects
    $(document).scroll(() => {
        let scrollTop = $(document).scrollTop();

        if (scrollTop > 0) {
            navMenu.addClass('is-sticky');
            logo.css('color', '#000');
            headerElem.css('background', '#fff');
            navToggle.css('border-color', '#000');
            navToggle.find('.strip').css('background-color', '#000');
        } else {
            navMenu.removeClass('is-sticky');
            logo.css('color', '#fff');
            headerElem.css('background', 'transparent');
            navToggle.css('bordre-color', '#fff');
            navToggle.find('.strip').css('background-color', '#fff');
        }

        headerElem.css(scrollTop >= 200 ? 
            {'padding': '0.5rem', 'box-shadow': '0 -4px 10px 1px #999'} : 
            {'padding': '1rem 0', 'box-shadow': 'none'}
        );
    });

   
    $(document).trigger('scroll');
});