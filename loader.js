var logoContainer = document.createElement("div");
logoContainer.id = "logo-container";

var logo = document.createElement("div");
logo.id = "logo";

logoContainer.appendChild(logo);
document.body.appendChild(logoContainer);

setTimeout(function () {
  logoContainer.classList.add("fadeOut");
  setTimeout(function () {
    logoContainer.style.display = "none";
  }, 1000); // 1 saniye bekleyip elementi kaldır
}, 3000);
