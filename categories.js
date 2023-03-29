const filterButtons = document.querySelectorAll(".filter-button");
const galleryItems = document.querySelectorAll(".proje");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-category");

    // aktif filtre düğmesinin stilini güncelle
    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });
    button.classList.add("active");

    // galerideki öğeleri kategoriye göre filtrele
    galleryItems.forEach((item) => {
      if (
        category === "all" ||
        item.getAttribute("data-category") === category ||
        (category === "egitim" &&
          item.getAttribute("data-category") === "yarisma") ||
        (category === "yarisma" &&
          item.getAttribute("data-category") === "egitim")
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
