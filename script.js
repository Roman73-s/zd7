'use strict';

$(document).ready(function () {
  $('.artex-slider').slick({
    dots: true,             // Включает пейджер (точки внизу)
    infinite: true,         // Бесконечная прокрутка
    speed: 500,             // Скорость анимации
    slidesToShow: 3,        // Показывать 3 картинки одновременно
    slidesToScroll: 1,      // Пролистывать по 1
    responsive: [
      {
        breakpoint: 768,    // Если экран меньше 768px (смартфоны)
        settings: {
          slidesToShow: 1,  // Показывать только 1 картинку
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  });
});
