function resizeNavbar() {
  var navbarElements = document.getElementById("navbarScroll");
  var navbarElements2 = document.getElementById("navbarScrollMargin");

  if (window.pageYOffset >= window.innerHeight / 2) {
    navbarElements.classList.add("navbar-scroll");
    navbarElements2.classList.add("navbar-scroll-margin");
  } else {
    navbarElements.classList.remove("navbar-scroll");
    navbarElements2.classList.remove("navbar-scroll-margin");
  }
}

window.addEventListener("scroll", resizeNavbar);
window.addEventListener("resize", resizeNavbar);

// **************************************


document.querySelectorAll(".carousel").forEach(function (carousel) {
  carousel.addEventListener("mouseover", function () {
    this.querySelector(".carousel-control-prev").click();
    this.querySelector(".carousel-control-next").click();
  });
});
