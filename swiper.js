import Swiper from "./node_modules/swiper-master/dist/swiper-bundle.min.mjs";

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: { delay: 2800 },

  pagination: {
    el: '.swiper-pagination',
    bulletClass: 'swiper-pagination-bullet',
    bulletActiveClass: 'swiper-pagination-bullet-active',
    clickable: true,
  },
});
