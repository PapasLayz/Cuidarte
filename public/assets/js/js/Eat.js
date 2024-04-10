function toggleEventCalendar(cellId) {
    var cell = document.getElementById(cellId);
    if (cell.innerHTML === "") {
      cell.innerHTML = "X";
    } else {
      cell.innerHTML = "";
    }
  }
  
  function toggleEventSchedule(cellId) {
    var cell = document.getElementById(cellId);
    if (!cell.classList.contains('red')) {
      cell.classList.add('red');
      cell.style.color = 'red'; 
    } else {
      cell.classList.remove('red');
      cell.style.color = 'black'; 
    }
  }

  document.getElementById('input-progress').addEventListener('input', function() {
    var progress = this.value;
    document.querySelector('.progress').style.width = progress + '%';
});
 
// Reutilizable



document.addEventListener("DOMContentLoaded", function() {
  const rows = document.querySelectorAll(".row");
          function generateHours(rowStart, rowEnd, row) {
              for (let i = rowStart; i <= rowEnd; i++) {
                  const hourDiv = document.createElement("div");
                  hourDiv.classList.add("hour");
                  hourDiv.innerHTML = `<strong>${i < 10 ? '0' : ''}${i}:00</strong>`;
                  row.appendChild(hourDiv);
          hourDiv.addEventListener("click", function() {
              const eventForm = document.getElementById("eventForm");
              eventForm.style.display = "block";
          });
          hourDiv.addEventListener("click", function(event) {
              if (event.target.classList.contains("event")) {
                  event.target.remove();
              }
          });
      }
  }
  document.getElementById("dateForm").addEventListener("submit", function(event) {
      event.preventDefault();
      const day = document.getElementById("day").value;
      const month = document.getElementById("month").value;
      const year = document.getElementById("year").value;
      document.querySelector(".calendar h1").textContent = `Rutina de Alimentación de beneficiario - ${day}/${month}/${year}`;
      document.getElementById("dateForm").reset(); 
  });

  

  document.querySelectorAll(".hour").forEach(hour => {
      hour.addEventListener("click", function() {
          document.querySelectorAll(".hour").forEach(hour => hour.classList.remove("selected"));
          this.classList.add("selected");
      });
  });
});