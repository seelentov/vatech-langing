import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', ()=>{
  const swiper = new Swiper('.js-video-carousel__carousel', {
    slidesPerView: 1,
    navigation: {
      nextEl: '.js-video-carousel__controls-next',
      prevEl: '.js-video-carousel__controls-prev',
    },
    modules: [Navigation],
  });
  
  const count = document.querySelector('.js-video-carousel__count') 
  
  swiper.on("slideChange", function () {
    if(count){
      count.innerHTML = '0' + (swiper.activeIndex + 1)
    }
  })
})