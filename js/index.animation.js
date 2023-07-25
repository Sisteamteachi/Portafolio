
// LIBRERIA GSAP ANIMATIONS 

gsap.from(".titulo", { duration: 2, fadein: true, y: 1250, scrollTrigger:".titulo"});

gsap.from(".card", {fadein: true, y: 1500, duration: 3.5, opacity: 0 });

gsap.from(".text", {fadein: true, y: 1250, duration: 2.5, opacity: 0 });

gsap.to(".text", {fadein: true, x: -5, duration: 2.5, opacity: 1 });

gsap.from(".img-banner", {fadein: true, y: 1250, duration: 2.5, opacity: 1 });

gsap.set(".service", { opacity: 1, x: 1600});

gsap.registerPlugin(ScrollTrigger);

gsap.to(".c",{
  scrollTrigger: {
    trigger: "#c",
    toggleActions: "play   reverse",
  },
  duration:3,
  background:"#000033",
})

ScrollTrigger.create({
  trigger: ".service",
  start: "top center",
  onEnter: () => gsap.to(".service", { opacity: 1, x: -4, duration: 6 }),
});

// LIBRERIA SWIPER PARA ANIMAR CARRUSEL

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});