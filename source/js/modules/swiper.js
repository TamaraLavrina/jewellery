/* global Swiper */
/* Swiper 7.4.1 */
const initSlider = () => {
  return new Swiper('.swiper', {
    navigation: {
      nextEl: '.slider__btn--next',
      prevEl: '.slider__btn--prev',
    },
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      renderBullet: (index, className) => {
        return '<button class="slider__pagination-bullet ' + className + '">' + (index + 1) + '</button>';
      },
    },

    breakpoints: {
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,

      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      320: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        pagination: {
          type: 'fraction',
          renderFraction: (currentClass, totalClass) => {
            return '<span class="' + currentClass + '"></span>' +
              '&nbsp;&nbsp;of&nbsp;&nbsp;' +
              '<span class="' + totalClass + '"></span>';
          },
        },
      },
    },
  });
};

export {initSlider};
