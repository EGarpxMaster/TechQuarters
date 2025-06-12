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
  
  // --- Modo oscuro con animación ---
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
    }, 200); // Espera un poco para que la animación se note
  });
});


const { createApp } = Vue;
createApp({
    data() {
        return {
            isMenuOpen: false,
            isDarkMode: false,
            isScrolled: false,
            isHidden: false,
            activeSection: 'home',
            formData: {
                name: '',
                email: '',
                subject: '',
                message: ''
            }
        }
    },
    mounted() {
        this.isDarkMode = localStorage.getItem('darkMode') === 'true';
        this.applyDarkMode();
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        toggleDarkMode() {
            this.isDarkMode = !this.isDarkMode;
            localStorage.setItem('darkMode', this.isDarkMode);
            this.applyDarkMode();

            // Animación al ícono
            this.animateDarkIcon();
        },
        animateDarkIcon() {
            // Busca el ícono dentro del botón
            const btn = document.querySelector('.theme-toggle i');
            if (btn) {
                btn.classList.remove('fa-animate'); // Reinicia si ya tiene
                // Forzar reflow para reiniciar la animación
                void btn.offsetWidth;
                btn.classList.add('fa-animate');
            }
        },
        applyDarkMode() {
            if (this.isDarkMode) {
                document.body.classList.add('dark-mode');
            } else {
                document.body.classList.remove('dark-mode');
            }
        },
        setActiveSection(section) {
            this.activeSection = section;
        },
        submitForm() {
            alert('¡Mensaje enviado!');
            this.formData = { name: '', email: '', subject: '', message: '' };
        }
    }
}).mount('#app');