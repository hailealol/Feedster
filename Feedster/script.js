$(document).ready(() => {
  $(".menu")
    .on("mouseenter", () => {
      $(".nav-menu").show(500);
    })
    .on("mouseleave", () => {
      $(".nav-menu").hide(500);
    });

  $(".btn")
    .on("mouseenter", () => {
      $(event.currentTarget).addClass("btn-hover");
    })
    .on("mouseleave", () => {
      $(event.currentTarget).removeClass("btn-hover");
    });

  $(".postText").on("keyup", (event) => {
    $(".postText").focus();
    let post = $(event.currentTarget).val();
    let remaining = 140 - post.length;
    $(".characters").html(remaining);
    if (remaining <= 0) {
      $(".wordcount").addClass("red");
    } else {
      $(".wordcount").removeClass("red");
    }
  });
});