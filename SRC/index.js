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

document.addEventListener("DOMContentLoaded", function () {
  const panamaButtons = document.querySelectorAll(".show-panama");
  const modal = document.getElementById("panama-modal");
  const modalContent = document.getElementById("panama-info");
  const closeModal = document.querySelector(".close-btn");

  const panamaData = {
    antiguedad:
      "En este período no se registran instituciones formales en Panamá, ya que la educación indígena se transmitía de manera oral y práctica dentro de las comunidades.",
    edadMedia:
      "Las primeras formas de educación en Panamá fueron establecidas por órdenes religiosas como los agustinos y jesuitas en los siglos XVI y XVII.",
    renacimiento:
      "Se fundaron colegios en Panamá, como el Colegio de San Agustín (1607) y el Colegio de San Ignacio de Loyola (1612), que ofrecían educación religiosa y humanística.",
    revolucionIndustrial:
      "En 1909 se fundó el Instituto Nacional de Panamá, considerado un hito en la educación del país.",
    sigloXX:
      "En 1935 se creó la Universidad de Panamá, la primera universidad estatal del país, marcando un avance en la educación superior.",
    sigloXXI:
      "Se expandieron las universidades privadas y creció la educación en línea en Panamá.",
  };

  // Asegurar que el modal esté oculto al cargar la página
  modal.style.display = "none";

  panamaButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault(); // Evita el comportamiento por defecto

      const period = this.getAttribute("data-period");
      modalContent.textContent =
        panamaData[period] || "Información no disponible.";
      modal.style.display = "flex";
    });
  });

  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
