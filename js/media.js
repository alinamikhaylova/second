VANTA.NET({
    el: "#intro",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 520.00,
    minWidth: 300.00,
    scale: 1.05,
    scaleMobile: 1.00,
    color: 0xfff,
    backgroundColor: 0x181818,
    points: 10.00,
    maxDistance: 20.00,
    spacing: 17.00
  })
  var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });
  