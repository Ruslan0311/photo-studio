$( function() {
  $( "#tabs" ).tabs();
  $( "#tabs-portfolio" ).tabs();
  $('.slider').slick({
    dots: true,
  });
  $('.section-open').on('click', function(e){
    e.preventDefault();
    $('.section-open').parents('.section-background').addClass('open');
  });

});
