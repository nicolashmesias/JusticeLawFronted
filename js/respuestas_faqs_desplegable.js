document.querySelectorAll('.faq-item').forEach(function(faqItem) {
    faqItem.addEventListener('click', function() {
        const answer = this.nextElementSibling; // Selecciona el siguiente elemento, que es la respuesta
        const icon = this.querySelector('.plus-icon'); // Selecciona el ícono dentro de la pregunta
        
        // Alternar la visibilidad de la respuesta
        if (answer.style.display === 'block' || answer.style.display === '') {
            answer.style.display = 'none';  // Si está visible, ocúltala
            icon.src = "../../img/mas.png";  // Cambia el ícono a "+"
        } else {
            // Cerrar cualquier otro desplegable que esté abierto
            document.querySelectorAll('.faq-answer').forEach(function(ans) {
                ans.style.display = 'none';  // Ocultar todas las respuestas
            });
            document.querySelectorAll('.plus-icon').forEach(function(icon) {
                icon.src = "../../img/mas.png";  // Cambiar todos los íconos a "+"
            });
            
            answer.style.display = 'block'; // Si está oculta, muéstrala
            icon.src = "../../img/cerrarsecion.png";  // Cambia el ícono a "-"
        }
    });
});

