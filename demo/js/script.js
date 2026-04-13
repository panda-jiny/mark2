gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero",

    start: "top top",

    end: "+=2000",

    scrub: 1,

    pin: true,
  },
});

tl.to(".card1", {
  x: -500,

  duration: 1,
})

  .to(".card2", {
    x: -500,

    duration: 1,
  });
