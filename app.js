(function () {
  const servicesSwiper = new Swiper('.services__slider ', {


    // количество слайдов на просмотр (слайды, видимые одновременно в контейнере слайдера).
    slidesPerView: 1, // 4


    //скорость переключения слайдов
    speed: 800,

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