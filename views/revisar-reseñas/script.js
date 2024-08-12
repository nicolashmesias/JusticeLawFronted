
const button = document.querySelector("#boton-aceptar");
const toast = document.querySelector(".toast");
const progress = document.querySelector(".progress");

let timer1, timer2;



if (button && toast) {


button.addEventListener("click", () => {
    toast.classList.add("active");
    progress.classList.add("active");


    timer1 = setTimeout(() => {
        toast.classList.remove("active");
        
        window.location.href = '../revisar-reseñas/verificacionReseña.html';
    }, 5000); 

    timer2 = setTimeout(() => {
        progress.classList.remove("active");
    }, 5300); 
   
});}

const buttonC = document.querySelector("#boton-cancelar");
const toastC = document.querySelector(".toastC");
const progressC = document.querySelector(".progressC");

let timer1C, timer2C;



if (buttonC && toastC) {


buttonC.addEventListener("click", () => {
    toastC.classList.add("active");
    progressC.classList.add("active");


    timer1C = setTimeout(() => {
        toastC.classList.remove("active");
        
        window.location.href = '../revisar-reseñas/verificacionReseña.html';
    }, 5000); 

    timer2C = setTimeout(() => {
        progressC.classList.remove("active");
    }, 5300); 
   
});}