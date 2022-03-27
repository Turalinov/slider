(function () {
  const servicesSwiper = new Swiper('.services__slider ', {

    // Стрелки
       navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    // количество слайдов на просмотр (слайды, видимые одновременно в контейнере слайдера).
    slidesPerView: 1, // 4

    
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,

    //скорость переключения слайдов
    speed: 800,
        //оступ между слайдами
        spaceBetween: 0,

  });



  const btns = document.querySelectorAll('.services__btn');


  for (let i = 0; i < btns.length; i++) {
    
    const btn = btns[i];


    btn.addEventListener('click', function (e) {

      e.preventDefault();
      servicesSwiper.slideTo(i);


    });


  }

})();