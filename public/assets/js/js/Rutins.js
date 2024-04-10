
document.addEventListener('DOMContentLoaded', function () {
  const calendar = document.getElementById('calendar');
  const currentMonthElement = document.getElementById('currentMonth');

  let currentMonth = new Date().getMonth();
  const selectedYear = 2024; 

  function updateCalendar() {
    calendar.innerHTML = '';
    const daysInMonth = new Date(selectedYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(selectedYear, currentMonth, 1).getDay();

    const daysOfWeek = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
    for (let i = 0; i < daysOfWeek.length; i++) {
      const dayHeader = document.createElement('div');
      dayHeader.classList.add('day', 'day-header');
      dayHeader.textContent = daysOfWeek[(i + 6) % 7]; 
      calendar.appendChild(dayHeader);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      const day = document.createElement('div');
      day.classList.add('day');
      day.textContent = i;
      day.addEventListener('click', handleDayClick);
      calendar.appendChild(day);
    }
    for (let i = 0; i < firstDayOfMonth; i++) {
      const emptyDay = document.createElement('div');
      emptyDay.classList.add('day', 'empty-day');
      calendar.appendChild(emptyDay);
    }

    currentMonthElement.textContent = getMonthName(currentMonth);
  }

  function handleDayClick(event) {
    const day = event.target;
    const eventName = prompt('Nombre del evento:');
    const eventDescription = prompt('Descripción del evento:');
    const eventTime = prompt('Hora del evento (formato HH:mm)');

    const eventInfo = `${eventName}\n${eventDescription}\nHora: ${eventTime}`;

    const eventDiv = document.createElement('div');
    eventDiv.classList.add('event');
    eventDiv.textContent = eventInfo;
    const removeButton = document.createElement('div');
    removeButton.classList.add('remove-event');
    removeButton.innerHTML = '&times;';
    removeButton.addEventListener('click', () => handleRemoveEvent(eventDiv));

    eventDiv.appendChild(removeButton);
    day.appendChild(eventDiv);
    const currentTime = new Date();
    const eventDate = new Date(selectedYear, currentMonth, day.textContent);
    eventDate.setHours(Number(eventTime.split(':')[0]), Number(eventTime.split(':')[1]));

    if (currentTime.getTime() >= eventDate.getTime()) {
      alert(`¡Es hora del evento!\n${eventInfo}`);
    }
  }
  function handleRemoveEvent(eventDiv) {
    if (confirm('¿Está seguro que desea eliminar este evento?')) {
      eventDiv.remove();
    }
  }
  function changeMonth(offset) {
    currentMonth = (currentMonth + offset + 12) % 12;
    updateCalendar();
  }
  function getMonthName(monthIndex) {
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    return months[monthIndex];
  }

  updateCalendar();
});

