document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".show-more");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const details = this.previousElementSibling;
      const image = this.parentElement.querySelector(".timeline-image");

      if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
        this.textContent = "Mostrar menos";
        if (image) {
          image.style.display = "none"; // Oculta la imagen
        }
      } else {
        details.style.display = "none";
        this.textContent = "Mostrar más";
        if (image) {
          image.style.display = "block"; // Vuelve a mostrar la imagen
        }
      }
    });
  });
});
