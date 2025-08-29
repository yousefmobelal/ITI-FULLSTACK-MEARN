$(document).ready(function () {
  //1
  $(".container1")
    .append('<div class="black"></div>')
    .prepend('<div class="white"></div>');
  $(".container1 .pink").before('<p class="yellow"></p>');

  //2
  $(".container2 p").each(function () {
    var text = $(this).text();
    $(this).replaceWith("<a href=http://" + text + ">" + text + "</>");
  });

  //3
  $(".container3 img")
    .wrap("<figure></figure>")
    .after("<figcaption>Coffee</figcaption>");

  //4
  $(".container4 td.col-age").empty();
  $(".container4 tr.row1 td").attr("class", "man");
  $(".container4 td").each(function () {
    $(this).toggleClass("your-email");
  });
  //5
  $(".container5 li").each(function (index) {
    if (index % 3 !== 0) {
      $(this).remove();
    }
  });

  //6
  $("#my-form input[name='username']").attr("value", "Yousef Mohamed");
  $("#my-form input[type='checkbox']").attr("checked", true);
});
