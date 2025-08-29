$(document).ready(function () {
  //1
  $(".container1 div").each(function () {
    var className = $(this).attr("class");
    $(this).css("background-color", className);
    var paragraph = $(this).find("p");
    var paragraphClassName = paragraph.attr("class");
    paragraph.css("color", paragraphClassName);
  });

  //2
  $("section.container2 a[href*=google]").text("Google");
  $("section.container2 a[href$=org]").text("IEEE");
  $("section.container2 a[href^=https]").text("Facebook");
  $("section.container2 a[href^=http]").text(function (_, oldText) {
    return oldText + " Official Website";
  });

  //3
  $("section.container3 figure")
    .eq(2)
    .find("img")
    .attr("src", "img/orange.png")
    .end()
    .find("figcaption")
    .text("fig.3 - Orange Juice");

  //4
  $("section.container4 td[class*=my-name]").css("color", "blue");
  $("section.container4 td:nth-child(odd)").css("background-color", "pink");
  $("section.container4 table tr:last td").eq(1).css("font-weight", "bold");

  //5
  $("section.container5 ul li").eq(1).css("font-style", "italic");
  $("section.container5 ol li").eq(1).next().css("color", "red");
});
