// Asegurar que el tema se aplique correctamente al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    // Aplicar el tema guardado inmediatamente
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        // Actualizar icono
        const themeIcon = document.querySelector('#theme-toggle i');
        if (themeIcon) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
        // Actualizar logo
        const logoImg = document.getElementById('logo-img');
        if (logoImg) {
            logoImg.src = "images/logos/logo_Blanco_nt.png";
        }
    }
    
    // Marcar la página como cargada
    setTimeout(function() {
        document.body.classList.add('loaded');
    }, 100);
});