'use strict';

$(document).ready(function () {
  $('.artex-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true, /* Позволяет свайпать пальцем на телефоне */
    touchMove: true,
    responsive: [
      {
        breakpoint: 992, /* На планшетах показываем 2 картинки */
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768, /* На телефонах показываем 1 картинку */
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});
