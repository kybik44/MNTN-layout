$("#head__slider").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
});
$("#head__scroll").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
});

$( ".slider__item" ).hover(
    function() {
       
            $( this ).toggleClass( "slider__item-start" );
       
      
    }
    
  );