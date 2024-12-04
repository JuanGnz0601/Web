
  document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const productCards = document.querySelectorAll(".product-card");

    filterButtons.forEach(button => {
      button.addEventListener("click", function () {
        const category = this.getAttribute("data-category");

        // Mostrar/Ocultar productos según la categoría
        productCards.forEach(card => {
          if (category === "all" || card.classList.contains(category)) {
            card.style.display = "block"; // Mostrar producto
          } else {
            card.style.display = "none"; // Ocultar producto
          }
        });
      });
    });
  });

  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("searchInput");
  const productCards = document.querySelectorAll(".product-card");

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita que el formulario recargue la página
    const query = searchInput.value.toLowerCase().trim();

    // Filtrar productos por categoría
    // Mostrar/Ocultar productos según la categoría
    productCards.forEach(card => {
      if (category === "all" || card.classList.contains(category)) {
        card.style.display = "block"; // Mostrar producto
      } else {
        card.style.display = "none"; // Ocultar producto
      }
    });
  });