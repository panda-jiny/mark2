$("li input").change("checked", function () {
  let i = $(this).parent().index();
  $(".img_card img").css({ opacity: "0" });
  $(".img_card img").eq(i).stop().animate({ opacity: "1" });
  $(".img_card")
    .stop()
    .animate({ rotate: "2deg" }, 100, function () {
      $(this)
        .stop()
        .animate({ top: i * 25 + "%" }, function () {
          $(this).stop().animate({ rotate: "0deg" }, 40);
        });
    });
});
