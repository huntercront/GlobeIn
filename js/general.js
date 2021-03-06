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
		// $('.curent-slide-text').text($('[data-slick-index ='+ nextSlide +'] > div > .hero-slide').attr('data-text'));
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

$('.box-slider').slick({
	infinite: true,
	lazyLoad: 'ondemand',
	slidesToShow: 3,
	arrows: true,
	slidesToScroll: 1,
	dots: false,
	responsive: [
	{
		breakpoint: 1100,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
		}
	},
	{
		breakpoint: 769,
		settings: {
			slidesToShow: 1,
			arrows: true,
			infinite: true,
			slidesToScroll: 1
		}
	},
	{
		breakpoint: 998,
		settings: {
			slidesToShow: 2,
			arrows: true,
			infinite: true,
			slidesToScroll: 1
		}
	}
	]
}); 





function getScrollBarWidth () {
	var $outer = $('<div>').css({visibility: 'hidden', width: 100, overflow: 'scroll'}).appendTo('body'),
			widthWithScroll = $('<div>').css({width: '100%'}).appendTo($outer).outerWidth();
	$outer.remove();
	return 100 - widthWithScroll;
};

// $('#scroll-check').remove();



$('.box-slide-item').on('click','.box-slide-img-container,.box-slide-link',function(event){
event.preventDefault();

$('[data-modal='+ $(this).parent('.box-slide-item').attr('data-open-modal') +']').addClass('open-box-modal');
$('[data-modal='+ $(this).parent('.box-slide-item').attr('data-open-modal') +']').css({
	"display":"block"
})
$('body').css({
	"overflow":"hidden",
	"padding-right":getScrollBarWidth() + "px"
})
$('body').append('<div class="overlay"></div>');
$('.header').css('padding-right',getScrollBarWidth()+'px')



	var img = $(this).parent('.box-slide-item').attr('data-slides').split(',');
	$('.box-modal-title').text($(this).parent('.box-slide-item').attr("data-title"));
	$('.box-modal-descr-container').html($(this).parent('.box-slide-item').attr("data-descr"));
	var index;
	for (index = 0; index < img.length; ++index) {
		if(index==0){
			$('.box-modal-slider').append('<div class="box-slide-wrapper"><div class="box-slider-img d-f-c-c"><img src="'+img[index]+'"></div></div>');
		}
		else{
			$('.box-modal-slider').append('<div class="box-slide-wrapper"><div class="box-slider-img d-f-c-c"><img data-lazy="'+img[index]+'"></div></div>');
		}

	}

	$('.box-modal-slider').slick({
	infinite: true,
	slidesToShow: 1,
	arrows: true,
	dots: true,
	lazyLoad: 'ondemand',
	slidesToScroll: 1
	});

})


$('.box-modal').on('click',function(event){
event.stopPropagation();
$('.box-modal').removeClass('open-box-modal')
$('.box-modal').css({
	"display":"none"
})
$('body').css({
	"overflow":"auto",
	"padding-right":0 + "px"
})
$('.header').css('padding-right',0+'px');

$('.box-modal-descr-container').html('');
$('.box-modal-slider').html('');
$('.box-modal-title').html('');
$('.box-modal-slider').removeClass('slick-initialized');
$('.box-modal-slider').removeClass('slick-slider');


$('.overlay').remove();
}).children()
	.click(function(e){ 
			e.stopPropagation();
})

$('.box-modal-close').on('click',function(event){
event.stopPropagation();
$('.box-modal').removeClass('open-box-modal')
$('.box-modal').css({
	"display":"none"
})
$('body').css({
	"overflow":"auto",
	"padding-right":0 + "px"
})

$('.box-modal-descr-container').html('');
$('.box-modal-slider').html('');
$('.box-modal-title').html('');
$('.box-modal-slider').removeClass('slick-initialized');
$('.box-modal-slider').removeClass('slick-slider');
$('.header').css('padding-right',0+'px')
$('.overlay').remove();
})

jQuery(document).on('keyup',function(evt) {
if (evt.keyCode == 27) {
	 if($('.box-modal').has('onen-box-modal')){
		$('.box-modal').removeClass('open-box-modal')
		$('.box-modal').css({
			"display":"none"
		})
		$('body').css({
			"overflow":"auto",
			"padding-right":0 + "px"
		})
		$('.box-modal-descr-container').html('');
$('.box-modal-slider').html('');
$('.box-modal-title').html('');
$('.box-modal-slider').removeClass('slick-initialized');
$('.box-modal-slider').removeClass('slick-slider');
		$('.header').css('padding-right',0+'px')
		$('.overlay').remove();
	 }
}
});

$(".accordion").on('click',function(event){
	var answer = $(this).next(".answer");
	if (answer.css('max-height')=='0px'){
		$(this).toggleClass('accordion-active')
		answer.css('max-height',answer.prop('scrollHeight') + "px");
	} else {
		answer.css('max-height','0px');

		$(this).toggleClass('accordion-active')
	} 
	answer.toggleClass('accordion-desct-hide')
})

$('.menu-button').on('click',function(event){
	$(this).toggleClass('menu-button-press')
	$('.mobile-nav').toggleClass('mobile-nav-show');
	$('.m-nemu-overley').toggleClass('active-show')
	
})
$('body').on('click','.m-nemu-overley',function(event){
	$('.menu-button').removeClass('menu-button-press')
	$('.mobile-nav').removeClass('mobile-nav-show')
	$('.m-nemu-overley').removeClass('active-show')
})
window.onresize = function() {
	if (window.innerWidth > 768) { 	$('.menu-button').removeClass('menu-button-press')
	$('.mobile-nav').removeClass('mobile-nav-show')
	$('.m-nemu-overley').removeClass('active-show')
}
}
