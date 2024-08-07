const flecha = document.querySelector('.fa-solid.fa-chevron-left');

const checkbox = document.getElementById('dropdownMenu');

flecha.addEventListener('click', () => {
  checkbox.checked = false;
});
