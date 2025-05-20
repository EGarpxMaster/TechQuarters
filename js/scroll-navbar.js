// Funcionalidad para la navegación fija
document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.getElementById('mainNav');
  let lastScrollTop = 0;
  
  // Ocultar/mostrar navbar al hacer scroll
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 150) {
      // Scroll hacia abajo y lejos del tope
      navbar.style.transform = 'translateY(-100%)';
    } else {
      // Scroll hacia arriba o cerca del tope
      navbar.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
  });
});