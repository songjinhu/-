;(function (){
$(document).ready(function () {
	 var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal', 
    loop:true,
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
  
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    speed:1000,    
    autoplay : {
    delay:1000,
     disableOnInteraction: false ,   
    },
	})	
	})
})();