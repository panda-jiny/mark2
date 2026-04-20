// $("li input").change("checked", function () {
//   let i = $(this).parent().index();
//   $(".img_card img").css({ opacity: "0" });
//   $(".img_card img").eq(i).stop().animate({ opacity: "1" });
//   $(".img_card")
//     .stop()
//     .animate({ rotate: "2deg" }, 100, function () {
//       $(this)
//         .stop()
//         .animate({ top: i * 25 + "%" }, function () {
//           $(this).stop().animate({ rotate: "0deg" }, 40);
//         });
//     });
// });

gsap.registerPlugin(ScrollTrigger);

const items = gsap.utils.toArray(".sec01_box > li:not(.img_card)");
const radios = document.querySelectorAll("input[name='doing']");
const img = document.querySelectorAll(".img_card img");

function setChecked(i) {
  radios.forEach((r, idx) => (r.checked = idx === i));
}

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#sec01",
    start: "top top",
    end: () => "+=" + items.length * window.innerHeight,
    scrub: 1,
    pin: true,

    onUpdate: (self) => {
      let index = Math.round(self.progress * (items.length - 1));
      setChecked(index);
    },
  },
});

items.forEach((item, i) => {
  tl2
    .to(".img_card", {
      y: item.offsetTop,
      duration: 1,
      ease: "power.out",
    })
    .to(
      img,
      {
        opacity: 0,
        duration: 0.2,
      },
      "<",
    )
    .to(
      img[i],
      {
        opacity: 1,
        duration: 0.3,
      },
      "<",
    )
    .call(() => setChecked(i), null, "<");
});
