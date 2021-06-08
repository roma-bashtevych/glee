$(function () {

  $('.shop-content__filter-btn').on('click', function () {
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
    $(this).addClass('shop-content__filter-btn--active')
  });

  $('.button-list').on('click', function () {
    $('.products-card').addClass('products-card--list')
  });

  $('.button-grid').on('click', function () {
    $('.products-card').removeClass('products-card--list')
  });

  $('.products-card__star').rateYo({
    starWidth: "17px",
    spacing: "12px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00"
  });

  $('.star').rateYo({
    starWidth: "13px",
    spacing: "5px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00"
  });

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onChange: function (data) {
      $('.irs-from').text("$" + data.from);
      $('.irs-to').text("$" + data.to);
    },
  });

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

  $('.filters__btn').on('click', function () {
    $('.filters__inner').toggleClass('filters__inner--active')
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