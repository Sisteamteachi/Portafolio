
gsap.from(".titulo", { duration: 2, fadein: true, y: 1250});
gsap.from(".card", {fadein: true, y: 1500, duration: 3.5, opacity: 0 });

gsap.from(".text", {fadein: true, y: 1250, duration: 2.5, opacity: 0 });
gsap.to(".text", {fadein: true, x: -5, duration: 2.5, opacity: 1 });
gsap.from(".img-banner", {fadein: true, y: 1250, duration: 2.5, opacity: 1 });

gsap.from(".service", {fadein: true, x: 1500, duration: 4, opacity: 0 });
gsap.to(".service", {fadein: true, x: -5, duration: 4, opacity: 1 });


const portfolioSection = document.getElementById("portafolio");

gsap.registerPlugin(ScrollTrigger);


gsap.to(".c",{
  scrollTrigger: {
    trigger: "#c",
    toggleActions: "play   reverse",
  },
  duration:3,
  background:"#000033",
})
