let target = $(".sec03").offset().top;
// console.log(con03);
let sc = false;
$(window).on("scroll", function () {
  pos = $(this).scrollTop();
  // console.log(pos);

  if (pos >= target - 300 && !sc) {
    sc = true;
    let num1 = 0; /*시작값*/
    let num2 = 0;

    let end1 = "11,047,565"; /*끝값*/
    let end2 = "5,951,808,926";

    let count = 0; /*증가횟수*/

    let timer = setInterval(function () {
      count++; /*횟수를 1씩증가 */
      num1++;
      num2 += 3;

      $(".num1").text(num1);
      $(".num2").text(num2);

      if (count >= 300) {
        $(".num1").text(end1);
        $(".num2").text(end2);
        clearInterval(timer);
      }
    }, 10);
  }
});
