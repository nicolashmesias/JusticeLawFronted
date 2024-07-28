document.addEventListener('DOMContentLoaded', function() {
    var imagenes = document.querySelectorAll('.corazon');
    imagenes.forEach(function(imagen) {
        imagen.addEventListener('click', function() {
            var temp = imagen.src;
            imagen.src = imagen.getAttribute('data-alt-src');
            imagen.setAttribute('data-alt-src', temp);
        });
    });
});