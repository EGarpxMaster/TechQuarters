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
  
  // ==============================================
  // =========== MANEJO DEL TEMA OSCURO ===========
  // ==============================================

  // Mejorar el manejo del tema oscuro
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
    icon.classList.remove('fa-animate'); // Reinicia si ya tiene
    void icon.offsetWidth; // Forzar reflow
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
            themeIcon.classList.remove('fade-out');
      setTimeout(() => {
        document.documentElement.classList.remove('theme-transition');
      }, 300);  
    }, 200); // Espera un poco para que la animación se note
  });
  // Funcionalidad del botón de tema
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Aplicar tema guardado al cargar
    if (localStorage.getItem('darkMode') === 'enabled') {
        enableDarkMode();
    }
    
    themeToggle.addEventListener('click', function() {
        if (document.body.classList.contains('dark-mode')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });
    
    function enableDarkMode() {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }
    
    function disableDarkMode() {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    }
});
});
