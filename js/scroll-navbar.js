// Funcionalidad para la navegación fija y tema oscuro
document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.getElementById('mainNav');
  let lastScrollTop = 0;
  
  // Ocultar/mostrar navbar al hacer scroll
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 150) {
      navbar.style.transform = 'translateY(-100%)';
    } else {
      navbar.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
  });
  
  // =========== MANEJO DEL TEMA OSCURO ===========
  const toggleBtn = document.getElementById('theme-toggle');
  const icon = toggleBtn.querySelector('i');

  // Cargar el estado guardado
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    icon.classList.replace('fa-moon', 'fa-sun');
  }

  toggleBtn.addEventListener('click', () => {
    const isDark = document.body.classList.contains('dark-mode');

    // Animación
    icon.classList.remove('fa-animate');
    void icon.offsetWidth;
    icon.classList.add('fa-animate');

    setTimeout(() => {
      if (isDark) {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        icon.classList.replace('fa-sun', 'fa-moon');
      } else {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        icon.classList.replace('fa-moon', 'fa-sun');
      }
    }, 200);
  });

  

});