const arrowBounce = setInterval(bounce, 3000);
let $nav_header    = $('.banner'),
    header_height  = $('.banner').height(),
    bio_height    = $('#bioBox').height() - 150,
    offset_val     = bio_height  - header_height;


function bounce(){
  $( ".downBtn" ).effect("bounce", {times:3}, 800);
}


$('.bio').click(function(){
  $('html, body').animate({ scrollTop: $("#bioBox").offset().top}, 1000);
  $('nav').removeClass('fullWidth');
});

$('#project').click(function(){
  $('html, body').animate({ scrollTop: $("#projectBox").offset().top}, 1000);
  $('nav').removeClass('fullWidth');
});

$('#opennav').on('click', function(){
	$('nav').toggleClass('fullWidth');
});

function navSlide() {
  let scroll_top = $(window).scrollTop();

  if (scroll_top > offset_val) { // the detection!
    $nav_header.addClass('is-sticky');
  } else {
    $nav_header.removeClass('is-sticky');
  }
}

$(window).scroll(navSlide);