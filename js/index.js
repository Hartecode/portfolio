let $header    = $('.banner'),
    $nav       = $('nav');



$('.bio').click( () => {
  $('html, body').animate({ scrollTop: $("#bioBox").offset().top}, 1000);
  $nav.removeClass('fullWidth');
});

$('#project').click( () => {
  $('html, body').animate({ scrollTop: $("#projectBox").offset().top}, 1000);
  $nav.removeClass('fullWidth');
});

$('#opennav').on('click', () => {
	$nav.toggleClass('fullWidth');
});

function navSlide() {
  
  let greeting_height = $('.greeting').outerHeight();
  let scroll_top = $(window).scrollTop();

  if (scroll_top) {
    $nav.removeClass('fullWidth');
  }

  if (scroll_top >= greeting_height) { // the detection!
    $header.addClass('is-sticky');
    $nav.addClass('is-nav-stircky');
  } else {
    $header.removeClass('is-sticky');
    $nav.removeClass('is-nav-stircky');
  }
}

$(window).scroll(navSlide);