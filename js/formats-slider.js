const swiper = new Swiper('.swiper-container', {
  slideClass: 'swiper-slide-center',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: '.pagination',
    clickable: true,
    bulletClass: 'pagination__button',
    bulletActiveClass: 'pagination__button--active',
  },

  navigation: {
    nextEl: '.carousel-button.prev',
    prevEl: '.carousel-button.next',
  },
});
