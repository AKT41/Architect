var images = document.querySelectorAll(".column-xs-12 img");

var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modalImg");
var closeBtn = document.getElementsByClassName("close")[0];
var prevBtn = document.getElementsByClassName("prev")[0];
var nextBtn = document.getElementsByClassName("next")[0];

var xDown = null;
var yDown = null;

function handleTouchStart(event) {
  xDown = event.touches[0].clientX;
  yDown = event.touches[0].clientY;
}

function handleTouchMove(event) {
  if (!xDown || !yDown) {
    return;
  }

  var xUp = event.touches[0].clientX;
  var yUp = event.touches[0].clientY;

  var xDiff = xDown - xUp;
  var yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff > 0) {
      nextBtn.click();
    } else {
      prevBtn.click();
    }
  }

  // sıfırlama
  xDown = null;
  yDown = null;
}

for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    modalImg.title = this.title;
  });
}

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

prevBtn.addEventListener("click", function () {
  var currentImg = modalImg.src;
  for (var i = 0; i < images.length; i++) {
    if (images[i].src === currentImg) {
      if (i === 0) {
        modalImg.src = images[images.length - 1].src;
        modalImg.alt = images[images.length - 1].alt;
        modalImg.title = images[images.length - 1].title;
      } else {
        modalImg.src = images[i - 1].src;
        modalImg.alt = images[i - 1].alt;
        modalImg.title = images[i - 1].title;
      }
      break;
    }
  }
});

nextBtn.addEventListener("click", function () {
  var currentImg = modalImg.src;
  for (var i = 0; i < images.length; i++) {
    if (images[i].src === currentImg) {
      if (i === images.length - 1) {
        modalImg.src = images[0].src;
        modalImg.alt = images[0].alt;
        modalImg.title = images[0].title;
      } else {
        modalImg.src = images[i + 1].src;
        modalImg.alt = images[i + 1].alt;
        modalImg.title = images[i + 1].title;
      }
      break;
    }
  }
});

modal.addEventListener("touchstart", handleTouchStart, false);
modal.addEventListener("touchmove", handleTouchMove, false);

document.addEventListener("keydown", function (event) {
  if (modal.style.display === "block") {
    if (event.key === "Escape") {
      modal.style.display = "none";
    } else if (event.key === "ArrowLeft") {
      prevBtn.click();
    } else if (event.key === "ArrowRight") {
      nextBtn.click();
    }
  }
});
