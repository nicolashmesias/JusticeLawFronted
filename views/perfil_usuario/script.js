var provincias_1=new Array("-","Andalucía","Asturias","Baleares","Canarias","Castilla y León","Castilla-La Mancha","...");
  var provincias_2=new Array("-","Salta","San Juan","San Luis","La Rioja","La Pampa","...");
  var provincias_3=new Array("-","Cali","Santamarta","Medellin","Cartagena","Popayan","...");
  var provincias_4=new Array("-","Aisne","Creuse","Dordogne","Essonne","Gironde ","...");

  var todasProvincias = [
    [],
    provincias_1,
    provincias_2,
    provincias_3,
    provincias_4,
  ];

  function cambia_provincia(){ 
   	var pais 
   	pais = document.infouser.pais[document.infouser.pais.selectedIndex].value 
   	if (pais != 0) { 
      	mis_provincias=todasProvincias[pais]
      	num_provincias = mis_provincias.length 
      	document.infouser.provincia.length = num_provincias 
      	for(i=0;i<num_provincias;i++){ 
         	document.infouser.provincia.options[i].value=mis_provincias[i] 
         	document.infouser.provincia.options[i].text=mis_provincias[i] 
      	}	
   	}else{ 
      	document.infouser.provincia.length = 1 
      	document.infouser.provincia.options[0].value = "-" 
      	document.infouser.provincia.options[0].text = "-" 
   	} 
   	document.infouser.provincia.options[0].selected = true 
}

const button = document.querySelector("#boton-guardar");
const toast = document.querySelector(".toast");
const progress = document.querySelector(".progress");

let timer1, timer2;



if (button && toast) {


button.addEventListener("click", () => {
    toast.classList.add("active");
    progress.classList.add("active");


    timer1 = setTimeout(() => {
        toast.classList.remove("active");
        
        window.location.href = '../perfil_usuario/perfil_creado.html';
    }, 5000); 

    timer2 = setTimeout(() => {
        progress.classList.remove("active");
    }, 5300); 
   
});}

const buttonMovil = document.querySelector("#boton-movil");
const toastMovil = document.querySelector(".toast");
const progressMovil = document.querySelector(".progress");

let timerM1, timerM2;



if (buttonMovil && toastMovil) {


  buttonMovil.addEventListener("click", () => {
  toastMovil.classList.add("active");
  progressMovil.classList.add("active");


  timerM1 = setTimeout(() => {
      toastMovil.classList.remove("active");
        
        window.location.href = '../perfil_usuario/perfil_creado.html';
    }, 5000); 

    timerM2 = setTimeout(() => {
      progressMovil.classList.remove("active");
    }, 5300); 
   
});}


function handleFileSelection() {

  document.getElementById("modal-foto").style.display = "none";

  const toast = document.querySelector('.toast');
  toast.classList.add('active');

  setTimeout(() => {
    toast.classList.remove('active');
    window.location.hash = '';
    window.location.reload();
  }, 3000);

}



function handleFileSelection() {

  document.getElementById("modal-movil").style.display = "none";

  const toast = document.querySelector('.toast');
  toast.classList.add('active');

  setTimeout(() => {
    toast.classList.remove('active');
    window.location.hash = '';
    window.location.reload();
  }, 3000);

}

