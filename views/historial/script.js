const button = document.querySelector("#confirmar-eliminar");
const confirmado = document.querySelector(".confirmado");


let timer1;

button.addEventListener("click", () => {

    confirmado.classList.add("active");

    timer1 = setTimeout(() => {
        confirmado.classList.remove("active");
        
        window.location.href = '../historial/historialEliminado.html';
    }, 5000); 


});
