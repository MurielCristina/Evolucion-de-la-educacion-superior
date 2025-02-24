/* Mostrar y ocultar detalles */
document.addEventListener("DOMContentLoaded", function () {
  buttons = document.querySelectorAll(".show-more");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const details = this.previousElementSibling;
      if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
        this.textContent = "Mostrar menos";
      } else {
        details.style.display = "none";
        this.textContent = "Mostrar más";
      }
    });
  });
});
