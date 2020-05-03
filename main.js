$(document).ready(function () {

    $('.header__burger').click(function (event) {
        $('.header__burger,.header_top_menu').toggleClass('active');
        $('body').toggleClass('lock');
      });
      
      // $('#about,#price,#we,#portfolio,#reviews,#contacts').click(function (event) {
      //   $('.top__mehu').removeClass('active');
      // });
      
      $('.header_top_menu').click(function (event) {
        $('.header__burger,.header_top_menu').toggleClass('active');
        $('body').toggleClass('lock');
      });

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    });

    /*$('.partners_content').magnificPopup({
        delegate: 'a', 
        type: 'image'
    });*/

    $('.partners_content').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},		
	});

});