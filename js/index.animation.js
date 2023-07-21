
gsap.to(".titulo", { duration: 2.5, ease: "elastic.out(2, 0.4)", y: 25 });
gsap.from(".card", {fadein: true, x: 1500, duration: 4, opacity: 0 });
gsap.to(".card", {fadein: true, x: -5, duration: 4, opacity: 1 });

gsap.from(".text", {fadein: true, x: -800, duration: 4, opacity: 0 });
gsap.to(".text", {fadein: true, x: -5, duration: 4, opacity: 1 });

gsap.from(".service", {fadein: true, x: 1500, duration: 4, opacity: 0 });
gsap.to(".service", {fadein: true, x: -5, duration: 4, opacity: 1 });


const portfolioSection = document.getElementById("portfolio");

gsap.registerPlugin(ScrollTrigger);

const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".portfolio-section",
    start: "top center",
    end: "bottom center",
    toggleActions: "play none none reverse",
  },
});

timeline.fromTo(
  portfolioSection,
  { backgroundColor: "transparent" },
  { backgroundColor: "#000033", duration: 1 }
);