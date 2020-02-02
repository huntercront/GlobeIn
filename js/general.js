$('.question > .title').click( function() {
	var b = $(this).parent().toggleClass('active');
});

$(document).ready(function(){
	var time = 10;
	var $bar,
	$slick,
	isPause,
	tick,
	percentTime;

	$slick = $('.hero-slides');
	$slick.slick({
		draggable: true,
		useTransform: true,
autoplay:false,
		autoplaySpeed: time,
		dots: true,
		mobileFirst: true,
		pauseOnDotsHover: false,
		fade: true,
		arrows: false,

		cssEase: 'linear',
		appendDots: $('.counter-element')

	});
	$('.curent-slide-text').text($('.slick-active > div > .hero-slide').attr('data-text'));
	$('.hero-slides').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$('.curent-slide-text').text($('[data-slick-index ='+ nextSlide +'] > div > .hero-slide').attr('data-text'));
		resetProgressbar();
		startProgressbar();
	});
	$bar = $('.hs-circle--bar');

  $('.counter-element, .hs-link').on({
    mouseenter: function() {
      isPause = true;
    },
    mouseleave: function() {
      isPause = false;
    }
  })
  
  function startProgressbar() {
    resetProgressbar();
    percentTime = 0;
    isPause = false;
    tick = setInterval(interval, 10);
  }
  
  function interval() {
    if(isPause === false) {
      percentTime += 1 / (time+0.1);
      $bar.css({
        'stroke-dashoffset':100 - percentTime/1.8
      });
      if(percentTime >= 100)
        {
          $slick.slick('slickNext');
          startProgressbar();
        }
    }
  }
  
  
  function resetProgressbar() {
		
    $bar.css({
     'stroke-dashoffset': 100 
    });
		clearTimeout(tick);
		
  }
  
  startProgressbar();

});

$(window).scroll(function() { 
	var the_top = $(document).scrollTop();
	if($(window).width() > 768){
	if (the_top > 100) {
		$('.header').addClass('header-solid');
	}
	else {
		$('.header').removeClass('header-solid');
		}
	}
});

 

