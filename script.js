const swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 3, //сколько слайдов будет видно сразу
    spaceBetween: 18,
    centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });