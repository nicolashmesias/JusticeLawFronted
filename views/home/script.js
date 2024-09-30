var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 2, 
    
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 110,
      modifier: 2,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

//cambiar a foro
  document.getElementById('forum-link').addEventListener('click', function(event) {
    event.preventDefault(); 
    window.location.href = '../foro/foro.html'; 
});
 
