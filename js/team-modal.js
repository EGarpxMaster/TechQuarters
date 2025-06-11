// JavaScript para los modales del equipo
document.addEventListener("DOMContentLoaded", function() {
    // Función para abrir el modal correspondiente al hacer clic en un miembro del equipo
    function setupTeamModals() {
        // Seleccionar todos los miembros del equipo
        const teamMembers = document.querySelectorAll(".team-member");
        
        teamMembers.forEach(member => {
            member.addEventListener("click", function(event) {
                // Verificar si el clic fue en un enlace social
                const isSocialLink = event.target.closest(".social-icon");
                
                // Si el clic fue en un enlace social, permitir la navegación normal
                if (isSocialLink) {
                    return; // Permite que el enlace funcione normalmente
                }
                
                // Obtener el ID del modal asociado
                const modalId = member.getAttribute("data-modal");
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
    
    // Inicializar todas las funcionalidades de los modales
    function initTeamModals() {
        setupTeamModals();
        setupCloseButtons();
        setupOutsideClickClose();
        setupEscKeyClose();
    }
    
    // Ejecutar inicialización cuando el DOM esté completamente cargado
    initTeamModals();
    
    // Si también están presentes los modales de proyectos, asegurarse de no duplicar listeners
    // especialmente para eventos globales como las teclas ESC
    const projectModalsInitialized = window.projectModalsInitialized || false;
    
    if (!projectModalsInitialized) {
        // Solo añadir el listener de ESC una vez
        setupEscKeyClose();
        // Marcar como inicializado
        window.projectModalsInitialized = true;
    }
});