$(document).ready(function(){
    $(".list").slick({
        slidesToShow: 3,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    });
  });
  $(document).ready(function(){
    $('.slideshow').slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        cssEase: 'linear'
    });
  });
  