document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const productCards = document.querySelectorAll(".product-card");

  filterButtons.forEach(button => {
    button.addEventListener("click", function () {
      const category = this.getAttribute("data-category");
      const subcategory = this.getAttribute("data-subcategory");

      // Mostrar/Ocultar productos según la categoría y subcategoría
      productCards.forEach(card => {
        const matchesCategory = category === "all" || card.classList.contains(category);
        const matchesSubcategory = !subcategory || card.classList.contains(subcategory);

        if (matchesCategory && matchesSubcategory) {
          card.style.display = "block"; // Mostrar producto
        } else {
          card.style.display = "none"; // Ocultar producto
        }
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const rangeInput = document.getElementById("customRange2");
  const priceLabel = document.getElementById("price-label");
  const productCards = document.querySelectorAll(".product-card");
  const noProductsMessage = document.getElementById("no-products-message");

  // Inicializar etiqueta de precio
  priceLabel.textContent = `Precio máximo: $${parseInt(rangeInput.value).toLocaleString()}`;

  rangeInput.addEventListener("input", function () {
    const maxPrice = parseInt(this.value, 10);
    priceLabel.textContent = `Precio máximo: $${maxPrice.toLocaleString()}`;

    let hasVisibleProducts = false;

    // Filtrar productos por precio
    productCards.forEach(card => {
      const productPrice = parseInt(card.getAttribute("data-price"), 10);
      if (productPrice <= maxPrice) {
        card.style.display = "block";
        hasVisibleProducts = true;
      } else {
        card.style.display = "none";
      }
    });

    // Mostrar mensaje si no hay productos visibles
    noProductsMessage.style.display = hasVisibleProducts ? "none" : "block";
  });
});


(function () {
  'use strict'
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl)
  })
})()


let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Función para abrir el modal con los detalles del producto
document.querySelectorAll('.btn-primary').forEach(button => {
  button.addEventListener('click', function() {
    const productCard = this.closest('.product-card');
    const image = productCard.querySelector('img').src;
    const title = productCard.querySelector('.card-title').textContent;
    const description = productCard.querySelector('.card-text').textContent;
    const price = productCard.querySelector('.card-text').textContent.replace('$', '').replace('.', '');
    
    document.getElementById('modal-product-image').src = image;
    document.getElementById('modal-product-title').textContent = title;
    document.getElementById('modal-product-description').textContent = description;
    document.getElementById('modal-product-price').textContent = price;
    
    const myModal = new bootstrap.Modal(document.getElementById('productModal'));
    myModal.show();
    
    document.getElementById('modal-form').addEventListener('submit', function(e) {
      e.preventDefault();
      
      const quantity = document.getElementById('modal-quantity').value;
      const size = document.getElementById('modal-size').value;
      
      const product = {
        image,
        title,
        description,
        price,
        quantity,
        size
      };
      
      // Agregar al carrito
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart)); // Guardar en el almacenamiento local
      
      // Cerrar el modal
      myModal.hide();
    });
  });
});

const products = document.querySelectorAll('.product-card');
const productsPerPage = 12;
let currentPage = 1;

function showPage(pageNumber) {
  const startIndex = (pageNumber - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  products.forEach((product, index) => {
    if (index >= startIndex && index < endIndex) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}

function showPreviousPage() {
  if (currentPage > 1) {
    currentPage--;
    showPage(currentPage);
  }
}

function showNextPage() {
  const totalPages = Math.ceil(products.length / productsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    showPage(currentPage);
  }
}

document.getElementById('prevPage').addEventListener('click', showPreviousPage);
document.getElementById('nextPage').addEventListener('click', showNextPage);

showPage(currentPage);



  document.getElementById('modal-form').addEventListener('submit', function(event) {
    event.preventDefault(); 


    var successMessage = document.getElementById('success-message');
    successMessage.style.display = 'block';

    setTimeout(function() {
      successMessage.style.display = 'none';
    }, 3000);
  });

