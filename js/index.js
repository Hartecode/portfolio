
const arrowBounce = setInterval(bounce, 3000);

function bounce(){
  $( ".downBtn" ).effect("bounce", {times:3}, 800);
}


$('.bio').click(function(){
  $('html, body').animate({ scrollTop: $("#bioBox").offset().top}, 1000);
});

$('#project').click(function(){
  $('html, body').animate({ scrollTop: $("#projectBox").offset().top}, 1000);
});

$('#opennav').on('click', function(){
	$('nav').toggleClass('fullWidth');
});