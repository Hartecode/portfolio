let $nav_header    = $('.banner'),
    greeting_height = $('.greeting').outerHeight();
 

$('.bio').click( () => {
  $('html, body').animate({ scrollTop: $("#bioBox").offset().top}, 1000);
  $('nav').removeClass('fullWidth');
});

$('#project').click( () => {
  $('html, body').animate({ scrollTop: $("#projectBox").offset().top}, 1000);
  $('nav').removeClass('fullWidth');
});

$('#opennav').on('click', () => {
	$('nav').toggleClass('fullWidth');
});

function navSlide() {
  let scroll_top = $(window).scrollTop();

  if (scroll_top >= greeting_height) { // the detection!
    $nav_header.addClass('is-sticky');
  } else {
    $nav_header.removeClass('is-sticky');
  }
}

$(window).scroll(navSlide);