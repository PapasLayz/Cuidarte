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
        document.querySelector(".calendar h1").textContent = `Rutina de higiene del beneficiario - ${day}/${month}/${year}`;
        document.getElementById("dateForm").reset(); 
    });

    document.getElementById("eventForm").addEventListener("submit", function(event) {
        event.preventDefault();
        const eventInput = document.getElementById("eventInput");
        const selectedEvent = eventInput.value;
        const selectedHour = document.querySelector(".hour.selected");

        if (selectedHour) {
            const eventDiv = document.createElement("div");
            eventDiv.classList.add("event", selectedEvent);
            eventDiv.textContent = selectedEvent;
            selectedHour.appendChild(eventDiv);
        }

        document.getElementById("eventForm").style.display = "none";
        eventInput.value = "";
    });
    generateHours(0, 7, rows[0]); 
    generateHours(8, 15, rows[1]); 
    generateHours(16, 23, rows[2]); 


    document.querySelectorAll(".hour").forEach(hour => {
        hour.addEventListener("click", function() {
            document.querySelectorAll(".hour").forEach(hour => hour.classList.remove("selected"));
            this.classList.add("selected");
        });
    });
});