$(document).ready(function() {
  $(".m-menu__item--submenu .m-menu__toggle").click(function() {
    if (
      $(this)
        .parent()
        .hasClass("m-menu__item--open")
    ) {
      $(this)
        .parent()
        .removeClass("m-menu__item--open");
    } else {
      $(this)
        .parent()
        .addClass("m-menu__item--open");
    }
  });

  $("#m_aside_left_minimize_toggle").click(function() {
    if ($("body").hasClass("m-brand--minimize")) {
      $("body").removeClass("m-brand--minimize m-aside-left--minimize");
      localStorage.setItem("isOpen", true);
    } else {
      $("body").addClass("m-brand--minimize m-aside-left--minimize");
      localStorage.setItem("isOpen", false);
    }
  });
});
