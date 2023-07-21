
gsap.to(".titulo", { duration: 2.5, ease: "elastic.out(2, 0.4)", y: 25 });
gsap.from(".card", {fadein: true, x: 1500, duration: 4, opacity: 0 });
gsap.to(".card", {fadein: true, x: -5, duration: 4, opacity: 1 });

gsap.from(".text", {fadein: true, x: -800, duration: 4, opacity: 0 });
gsap.to(".text", {fadein: true, x: -5, duration: 4, opacity: 1 });

gsap.from(".service", {fadein: true, x: 1500, duration: 4, opacity: 0 });
gsap.to(".service", {fadein: true, x: -5, duration: 4, opacity: 1 });


const portfolioSection = document.getElementById("portafolio");

gsap.registerPlugin(ScrollTrigger);





gsap.to(".c",{
  scrollTrigger: {
    trigger: "#c",
    toggleActions: "play   reverse",
  },
  duration:4,
  background:"#000033",
  color:"#000000"
})
