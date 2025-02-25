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
      "Durante la Antigüedad, en Panamá no existían instituciones formales de educación. La enseñanza era oral y se transmitía dentro de las comunidades indígenas, enfocada en habilidades prácticas, conocimientos ancestrales y valores culturales.",
    edadMedia:
      "Durante la Edad Media, las primeras formas de educación en Panamá fueron introducidas por órdenes religiosas como los agustinos y jesuitas en los siglos XVI y XVII. Se establecieron colegios religiosos que ofrecían enseñanza en gramática, filosofía y teología.",
    renacimiento:
      "En el siglo XVII, se fundaron colegios en Panamá, como el Colegio de San Agustín (1607) y el Colegio de San Ignacio de Loyola (1612), dirigidos por órdenes religiosas. Estas instituciones impartían educación humanística y religiosa, sentando las bases de la educación formal en el Istmo.",
    revolucionIndustrial:
      "Durante la Revolución Industrial, Panamá experimentó avances en la educación con la creación de instituciones clave. En 1909, se fundó el Instituto Nacional de Panamá, considerado el 'Nido de Águilas' y una de las instituciones educativas más prestigiosas del país.",
    sigloXX:
      "En el siglo XX, la educación superior en Panamá tuvo un crecimiento significativo. En 1935, se creó la Universidad de Panamá, la primera universidad estatal del país. Posteriormente, en 1981, se fundó la Universidad Tecnológica de Panamá, especializada en ingeniería y tecnología.",
    sigloXXI:
      "El siglo XXI trajo consigo la expansión de universidades privadas y el crecimiento de la educación en línea en Panamá. Desde 2005, varias instituciones comenzaron a ofrecer programas virtuales, facilitando el acceso a la educación superior en todo el país.",
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
