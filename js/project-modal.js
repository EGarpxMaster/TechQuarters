// JavaScript para los modales de proyectos
document.addEventListener("DOMContentLoaded", function() {
    // Función para abrir el modal correspondiente al hacer clic en un proyecto
    function setupProjectModals() {
        // Seleccionar todos los proyectos
        const projects = document.querySelectorAll(".project");
        
        projects.forEach(project => {
            project.addEventListener("click", function(event) {
                // Verificar si el clic fue en el enlace "Ver proyecto"
                const isLink = event.target.classList.contains("project-link") || 
                              event.target.closest(".project-link");
                
                // Si el clic fue en el enlace y el enlace tiene un href definido distinto de "#"
                // permitir la navegación normal
                if (isLink && event.target.closest(".project-link").getAttribute("href") !== "#") {
                    return; // Permitir la navegación normal
                }
                
                // Prevenir comportamiento predeterminado para los enlaces "#"
                if (isLink) {
                    event.preventDefault();
                }
                
                // Obtener el ID del modal asociado
                const modalId = project.getAttribute("data-modal");
                if (!modalId) return;
                
                // Abrir el modal correspondiente
                const modal = document.getElementById(modalId);
                if (modal) {
                    modal.showModal();
                }
            });
        });
    }
    
    // Función para cerrar el modal al hacer clic en el botón de cierre
    function setupCloseButtons() {
        const closeButtons = document.querySelectorAll(".btn-cerrar-modal");
        
        closeButtons.forEach(button => {
            button.addEventListener("click", (event) => {
                event.stopPropagation(); // Evitar propagación del evento
                const modal = button.closest("dialog");
                if (modal) {
                    modal.close();
                }
            });
        });
    }
    
    // Función para cerrar el modal al hacer clic fuera de él
    function setupOutsideClickClose() {
        const modals = document.querySelectorAll("dialog.modal");
        
        modals.forEach(modal => {
            modal.addEventListener("click", (event) => {
                // Si se hace clic directamente en el modal (no en su contenido)
                if (event.target === modal) {
                    modal.close();
                }
            });
        });
    }
    
    // Función para cerrar modales con la tecla ESC
    function setupEscKeyClose() {
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                document.querySelectorAll("dialog[open]").forEach(modal => {
                    modal.close();
                });
            }
        });
    }
    
    // Configurar enlaces de detalles específicos
    function setupDetailLinks() {
        document.querySelectorAll(".project-details-link").forEach(link => {
            link.addEventListener("click", (event) => {
                event.preventDefault();
                event.stopPropagation();
                
                // Obtener el proyecto padre
                const project = link.closest(".project");
                if (!project) return;
                
                // Obtener y abrir el modal
                const modalId = project.getAttribute("data-modal");
                if (!modalId) return;
                
                const modal = document.getElementById(modalId);
                if (modal) {
                    modal.showModal();
                }
            });
        });
    }
    
    // Inicializar todas las funcionalidades
    function initModals() {
        setupProjectModals();
        setupCloseButtons();
        setupOutsideClickClose();
        setupEscKeyClose();
        setupDetailLinks();
    }
    
    // Ejecutar inicialización cuando el DOM esté completamente cargado
    initModals();
});