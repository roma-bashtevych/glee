$(function () {
  $('.slider__list').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
  });

  $('.sponsors__items').slick({
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.menu__btn, .menu__list').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
    $('body').toggleClass('overflow-hidden');
    $('.menu__btn').toggleClass('active');
  });

  const mixitup1 = document.querySelector('.design'),
    mixitup2 = document.querySelector('.products'),
    control = {
      controls: {
        scope: 'local'
      }
    };
  mixitup(mixitup1, control), mixitup(mixitup2, control);

});