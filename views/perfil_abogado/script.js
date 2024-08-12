document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.profile-nav ul li a');
    const indicator = document.querySelector('.profile-nav .indicator');
    const sections = document.querySelectorAll('.section');
  
    function setIndicatorPosition(link) {
      const rect = link.getBoundingClientRect();
      const navRect = link.closest('.profile-nav').getBoundingClientRect();
      indicator.style.left = `${rect.left - navRect.left}px`;
      indicator.style.width = `${rect.width}px`;
    }
  
    function showSection(targetId) {
      sections.forEach(section => {
        if (section.id === targetId) {
          section.classList.add('active');
        } else {
          section.classList.remove('active');
        }
      });
    }
  
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        navLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
        setIndicatorPosition(link);
        const targetId = link.getAttribute('data-target');
        showSection(targetId);
      });
    });
  
    const activeLink = document.querySelector('.profile-nav ul li a.active');
    if (activeLink) {
      setIndicatorPosition(activeLink);
      const targetId = activeLink.getAttribute('data-target');
      showSection(targetId);
    }
  });
  
  
  document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', () => {
        const value = parseInt(star.getAttribute('data-value'));
        document.querySelectorAll('.star').forEach(s => {
            s.classList.remove('filled');
            if (parseInt(s.getAttribute('data-value')) <= value) {
                s.classList.add('filled');
            }
        });
    });
  });
  
  
  document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.profile-nav-sm ul li a');
    const indicator = document.querySelector('.profile-nav-sm .indicator');
    const sections = document.querySelectorAll('.section-mov');
  
    function setIndicatorPosition(link) {
      const rect = link.getBoundingClientRect();
      const navRect = link.closest('.profile-nav-sm').getBoundingClientRect();
      indicator.style.left = `${rect.left - navRect.left}px`;
      indicator.style.width = `${rect.width}px`;
    }
  
    function showSection(targetId) {
      sections.forEach(section => {
        if (section.id === targetId) {
          section.classList.add('active');
        } else {
          section.classList.remove('active');
        }
      });
    }
  
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        navLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
        setIndicatorPosition(link);
        const targetId = link.getAttribute('data-target');
        showSection(targetId);
      });
    });
  
    const activeLink = document.querySelector('.profile-nav-sm ul li a.active');
    if (activeLink) {
      setIndicatorPosition(activeLink);
      const targetId = activeLink.getAttribute('data-target');
      showSection(targetId);
    }
  });
  
  
  
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

