$(function(){
  $('.slider__list').slick({
    dots: true,
    arrows: false,
    fade: true,
    // autoplay: true,
  });

let t = document.querySelector(".design"),
  e = document.querySelector(".products"),
  n = {
    controls: {
      scope: "local"
    }
  };
mixitup(t, n), mixitup(e, n)


  // const product = mixitup('.products__content');
  // const design = mixitup('.design__content');
});