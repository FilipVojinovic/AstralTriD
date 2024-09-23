import Icons from './utils/Icons';
import Swiper from 'swiper/bundle';


class Main {
  constructor() {
    this.init();
  }

  init() {
    Icons.load();
    this.initSwiperPagination();
    this.initSwiperNavigation()
  }

  initSwiperPagination(){
    const target = document.querySelector('.js-swiper-pagination');
    if(target) {
      const swiper = new Swiper(target, {
        loop: true,
        pagination: {
          el: target.querySelector('.swiper-pagination'),
          clickable: true,
        },
      });
    }      
  }

  initSwiperNavigation(){
    const target = document.querySelector('.js-pagination-swiper');
    if(target) {
      const swiper = new Swiper(target, {
        loop: true,
        pagination: {
          el: target.querySelector('.swiper-navigation'),
          clickable: true,
        },
        slidesPerView : 1,
        spaceBetween: 30,
        breakpoints: {
          907: {
            slidesPerView :2,
          }
        }
      });
    }   
  }
}




const boutonsModale = document.querySelectorAll('.header_menu');
const modale = document.querySelector('.modale');
const boutonX = document.querySelectorAll('.xicon');

for (let i = 0; i < boutonsModale.length; i++){
    boutonsModale[i].addEventListener("click", afficherModale)
}

for (let i = 0; i < boutonX.length; i++){
      boutonX[i].addEventListener("click", fermerModale);
}

function afficherModale(){
    modale.classList.add("visible");
    
}

function fermerModale(){
    modale.classList.remove("visible");
}
new Main();