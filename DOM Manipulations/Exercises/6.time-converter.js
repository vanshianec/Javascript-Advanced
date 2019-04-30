function attachEventsListeners() {
    let dayButton = document.getElementById("daysBtn");
    let hoursButton = document.getElementById("hoursBtn");
    let minutesButton = document.getElementById("minutesBtn");
    let secondsBtn = document.getElementById("secondsBtn");

    dayButton.addEventListener('click', () => {
        let days = document.getElementById("days").value;
        document.getElementById("hours").value = days * 24;
        document.getElementById("minutes").value = days * 1440;
        document.getElementById("seconds").value = days * 86400;
    });

    hoursButton.addEventListener('click', () => {
        let hours = document.getElementById("hours").value;
        document.getElementById("days").value = hours / 24;
        document.getElementById("minutes").value = hours * 60;
        document.getElementById("seconds").value = hours * 3600;
    });

    minutesButton.addEventListener('click', () => {
        let minutes = document.getElementById("minutes").value;
        document.getElementById("days").value = minutes / 1440;
        document.getElementById("hours").value = minutes / 60;
        document.getElementById("seconds").value = minutes * 60;
    });

    secondsBtn.addEventListener('click', () => {
        let seconds = document.getElementById("seconds").value;
        document.getElementById("days").value = seconds / 86400;
        document.getElementById("hours").value = seconds / 3600;
        document.getElementById("minutes").value = seconds / 60;
    });
}