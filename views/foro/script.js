// AGREGAR DUDA AL FORO
document.getElementById('publicarBtn').addEventListener('click', function() {
    const asunto = document.getElementById('asunto').value;
    const contenido = document.getElementById('contenido').value;
    const categoria = document.getElementById('categoria').value;

    if (asunto === "" || contenido === "" || categoria === "") {
        alert("Por favor, llena todos los campos antes de publicar.");
        return;
    }

    const newRow = `
        <tr>
            <td class="message-col">
                <h2>${asunto}</h2>
                <p>${contenido}</p>
                <div class="meta">
                    <span class="date">${new Date().toLocaleDateString()}</span>
                    <span class="category">Categoría: ${categoria}</span>
                </div>
            </td>
            <td class="responses-col"><a href="#">0</a></td>
            <td class="user-col">
                <div class="user-info">
                    <img src="../../img/fotoPerfil.png" class="fotoperfil" alt="Usuario Actual" />
                    <br>
                    <span class="name_user">Alfonso Juan</span>
                </div>
            </td>
        </tr>
    `;
    const table = document.querySelector('.forum table');
    table.insertAdjacentHTML('beforeend', newRow); 
    document.getElementById('asunto').value = "";
    document.getElementById('contenido').value = "";
    document.getElementById('categoria').value = "";
});

// REDIRECCION A RESPUESTAS PREGUNTAS FORO
document.addEventListener('DOMContentLoaded', function() {
    const responseLinks = document.querySelectorAll('.responses-col a');

    responseLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const url = this.getAttribute('href');
            console.log(`Navegando a: ${url}`);
            window.location.href = url;
        });
    });
});

// FUNCIÓN DE BÚSQUEDA AVANZADA CON RESALTADO
document.addEventListener('DOMContentLoaded', function() {
    const responseLinks = document.querySelectorAll('.responses-col a');

    responseLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const url = this.getAttribute('href');
            console.log(`Navegando a: ${url}`);
            window.location.href = url;
        });
    });

    document.getElementById("searchBtn").addEventListener("click", function() {
        const searchTerm = document.getElementById("searchBar").value.trim(); 
        if (searchTerm === "") {
            alert("Por favor, ingresa un término de búsqueda."); 
            return;
        }

        clearHighlights(); 

        const messages = document.querySelectorAll(".message-col h2, .message-col p"); 
        messages.forEach(message => {
            const regex = new RegExp(`(${searchTerm})`, "gi"); 
            if (regex.test(message.innerHTML)) { 
                message.innerHTML = message.innerHTML.replace(regex, '<span class="highlight">$1</span>'); 
            }
        });
    });

    function clearHighlights() {
        const highlightedElements = document.querySelectorAll(".highlight");
        highlightedElements.forEach(el => {
            el.outerHTML = el.innerHTML; 
        });
    }
});


