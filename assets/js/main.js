wow = new WOW({ offset:100, mobile:false, live:true }); wow.init();
jQuery(document).ready(function(){

	//Treeview
	jQuery(".treeview").treeview({
		collapsed: true,
		animated: "medium",
	});

	jQuery('.search-toggle').click(function(){
		jQuery(this).toggleClass('active');
	});

	//Moble Menu Script
	jQuery(".mobilemenuicon").click(function(){
		jQuery('.mobilemenuicon .icon-bar').toggleClass('active');
		jQuery("body").toggleClass("mobile-menu-open");
	});
	jQuery(".menu-open-overlay").click(function(){
		jQuery(".mobilemenuicon .icon-bar").removeClass('active');
		jQuery("body").removeClass("mobile-menu-open");
	});

	/* StickyHeader */
	if (jQuery(this).scrollTop() > 10) {
		jQuery('body').addClass("header-fixed");
	} else {
		jQuery('body').removeClass("header-fixed");
	}
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > 10) {
			jQuery('body').addClass("header-fixed");
		} else {
			jQuery('body').removeClass("header-fixed");
		}
	});

  /* scroll bottom to top */
  if (jQuery(this).scrollTop() > 600) {
    jQuery('.scrollup').addClass("active");
  } else {
    jQuery('.scrollup').removeClass("active");
  }
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 600) {
      jQuery('.scrollup').addClass("active");
    } else {
      jQuery('.scrollup').removeClass("active");
    }
  });
  jQuery('.scrollup').click(function () {
    jQuery("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });

	//Home Banner Slider
	jQuery('.hero-slider').slick({
	  arrows: true,
	  dots: true,
	  infinite: true,
	  speed: 500,
	  fade: true,
	  cssEase: 'linear'
	});

	//Testimonial Slider
	jQuery('.testi-slider').slick({
		infinite: true,
		arrows: false,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 12000,
		responsive: [
		  {
			breakpoint: 767,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  }
		]
	});

	//Boxes Slider
	jQuery('.box-slider').slick({
		infinite: true,
		arrows: true,
		dots: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 10000,
		responsive: [
		  {
			breakpoint: 991,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 1
			}
		  },
		  {
			breakpoint: 767,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  }
		]
	});
	

	jQuery(".slick-prev.slick-arrow").attr( "title", "Previous" );
	jQuery(".slick-next.slick-arrow").attr( "title", "Next" );


  jQuery('#teamTab').easyResponsiveTabs({
    tabidentify: 'hor_1',
    inactive_bg: '',
    activetab_bg: ''
  });
	

});//End