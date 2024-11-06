let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.slides');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(${-currentSlide * 100}%)`;
}


  document.querySelectorAll('.dropdown-submenu').forEach(function(element) {
    element.addEventListener('mouseover', function(e) {
      let submenu = this.querySelector('.dropdown-menu');
      if (submenu) {
        submenu.style.display = 'block';
      }
    });
    element.addEventListener('mouseout', function(e) {
      let submenu = this.querySelector('.dropdown-menu');
      if (submenu) {
        submenu.style.display = 'none';
      }
    });
  });

