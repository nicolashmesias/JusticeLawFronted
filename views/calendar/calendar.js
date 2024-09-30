
const modal = document.getElementById("myModal");
const closeModal = document.getElementsByClassName("close")[0];
const events = document.querySelectorAll(".event");


events.forEach((event) => {
    event.addEventListener("click", () => {
        modal.style.display = "block";
    });
});


closeModal.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Selección de elementos
const prevMonth = document.getElementById('prev-month');
const nextMonth = document.getElementById('next-month');
const prevDay = document.getElementById('prev-day');
const nextDay = document.getElementById('next-day');
const monthsContainer = document.querySelector('.months');
const daysContainer = document.querySelector('.days');

// Lista de los meses y días de la semana
const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const daysOfWeek = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

// Variables para almacenar el mes y el día actuales
let currentMonth = 0; // Enero
let visibleMonthsStart = 0; // Para mostrar solo 7 meses visibles
let visibleDaysStart = 1; // Para mostrar solo 16 días visibles

// Función para actualizar los días del mes
function updateCalendar() {
    // Limpiar los días existentes
    daysContainer.innerHTML = '';

    // Obtener el número de días en el mes actual
    const daysInMonth = new Date(2024, currentMonth + 1, 0).getDate(); // Año 2024 como ejemplo

    // Obtener el día de la semana del primer día del mes
    const firstDay = new Date(2024, currentMonth, 1).getDay();

    // Mostrar solo 16 días
    let daysToShow = Math.min(16, daysInMonth - visibleDaysStart + 1);

    for (let day = visibleDaysStart; day < visibleDaysStart + daysToShow; day++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.innerHTML = `
            <span class="date">${day}</span>
            <span class="day-name">${daysOfWeek[(firstDay + day - 1) % 7]}</span>
        `;
        
        // Evento click para seleccionar un día
        dayElement.addEventListener('click', function () {
            // Remover selección anterior
            document.querySelectorAll('.day').forEach(d => d.classList.remove('selected'));
            // Añadir selección al día actual
            this.classList.add('selected');
        });
        daysContainer.appendChild(dayElement);
    }
}

// Función para actualizar los meses
function updateMonths() {
    monthsContainer.innerHTML = ''; // Limpiar meses

    // Mostrar solo 7 meses
    for (let i = visibleMonthsStart; i < visibleMonthsStart + 7; i++) {
        const monthIndex = i % months.length; // Permitir ciclos a través de los meses
        const monthElement = document.createElement('span');
        monthElement.textContent = months[monthIndex];

        if (monthIndex === currentMonth) {
            monthElement.classList.add('selected'); // Añadir selección al mes actual
        }

        // Evento click para seleccionar un mes
        monthElement.addEventListener('click', () => {
            currentMonth = monthIndex;
            visibleDaysStart = 1; // Restablecer los días cuando se selecciona un nuevo mes
            // Remover selección anterior de los meses
            document.querySelectorAll('.months span').forEach(m => m.classList.remove('selected'));
            // Añadir selección al mes actual
            monthElement.classList.add('selected');
            updateMonths(); // Actualizar meses visualmente
            updateCalendar(); // Actualizar días correspondientes
        });

        monthsContainer.appendChild(monthElement);
    }
}

// Eventos de click para cambiar la vista de meses
prevMonth.addEventListener('click', () => {
    visibleMonthsStart = (visibleMonthsStart - 1 + months.length) % months.length;
    updateMonths();
});

nextMonth.addEventListener('click', () => {
    visibleMonthsStart = (visibleMonthsStart + 1) % months.length;
    updateMonths();
});

// Eventos de click para cambiar la vista de días
prevDay.addEventListener('click', () => {
    visibleDaysStart = Math.max(1, visibleDaysStart - 16); // Retroceder 16 días si es posible
    updateCalendar();
});

nextDay.addEventListener('click', () => {
    const daysInMonth = new Date(2024, currentMonth + 1, 0).getDate(); // Número de días en el mes actual
    visibleDaysStart = Math.min(daysInMonth - 15, visibleDaysStart + 16); // Avanzar 16 días
    updateCalendar();
});

// Inicializar el calendario y los meses
updateMonths();
updateCalendar();
