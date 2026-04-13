gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#visual",

    start: "top top",

    end: "+=3000",

    scrub: 1,

    pin: true,
  },
});

tl.to(".card01", {
  x: -150 + "%",

  duration: 1,
})

  .to(".card02", {
    x: -150 + "%",

    duration: 1,
  });
