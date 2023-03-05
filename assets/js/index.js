var mySwiper = new Swiper ('.swiper-portifolio', {
    spaceBetween: 10,
    slidesPerView: 4,
    centeredSlides: true,

    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 4,
          spaceBetween: 40
        }
      }
});


var mySwiper = new Swiper ('.swiper-portifolio2', {
    spaceBetween: 10,
    slidesPerView: 4,
    centeredSlides: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 4,
          spaceBetween: 40
        }
      }
});

var mySwiper = new Swiper ('.swiper-servicos', {
    spaceBetween: 10,
    slidesPerView: 6,
    centeredSlides: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 4,
          spaceBetween: 40
        }
      }
});




const swiper = document.querySelector('.swiper-portifolio').swiper;
const swiper2 = document.querySelector('.swiper-portifolio2').swiper;
const swiper3 = document.querySelector('.swiper-servicos').swiper;

// Now you can use all slider methods like
swiper.slideNext();
swiper.slideNext();

swiper2.slideNext();
swiper2.slideNext();

swiper3.slideNext();
swiper3.slideNext();