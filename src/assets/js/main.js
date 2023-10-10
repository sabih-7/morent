// Popular Swiper
const buggySwiper = new Swiper('.popularSwiper', {
    speed: 600,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    slidesPerView: 4,
    breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 10 },
        768: { slidesPerView: 2, spaceBetween: 35 },
        1024: { slidesPerView: 3, spaceBetween: 35 },
        1200: { slidesPerView: 4, spaceBetween: 35 }
    }
});