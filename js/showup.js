let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#sec04",
    start: "top 20%",
  },
});
tl3.from(".sec04_contents ul", {
  y: 180,
  opacity: 0,
  stagger: 0.5,
});
tl3.from(".mail_box", {
  y: 180,
  opacity: 0,
});
