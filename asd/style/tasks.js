'use strict';
// All the delete buttons and add event listeners to them
const deleteButtons = document.querySelectorAll(".btn-danger");
deleteButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const card = button.parentElement.parentElement.parentElement;
        card.style.display = "none";
    });
});

// All the increment buttons and add event listeners to them
const incrementButtons = document.querySelectorAll(".btn-success");
incrementButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        let priorityLevel = parseInt(button.innerHTML);
        priorityLevel++;
        if (priorityLevel > 5) {
            priorityLevel = 0;
        }
        button.innerHTML = priorityLevel;
        if (priorityLevel >= 0 && priorityLevel <= 1) {
            button.classList.remove("bg-warning");
            button.classList.remove("bg-danger");
            button.classList.add("bg-success");
        } else if (priorityLevel >= 2 && priorityLevel <= 3) {
            button.classList.remove("bg-success");
            button.classList.remove("bg-danger");
            button.classList.add("bg-warning");
        } else if (priorityLevel >= 4 && priorityLevel <= 5) {
            button.classList.remove("bg-success");
            button.classList.remove("bg-warning");
            button.classList.add("bg-danger");
        }
    });
});

// All the done buttons and add event listeners to them
const doneButtons = document.querySelectorAll(".btn-success");
doneButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const cardBody = button.parentElement.parentElement;
        cardBody.parentElement.classList.add("transparent");
    });
});

// Set the deadline date and time (YYYY-MM-DD hh:mm:ss)
const deadline = "2023-04-01 15:00:00";

// Calculate the remaining time and update the countdown element every second
setInterval(function() {
    // Calculate the remaining time in seconds
    let remainingTime = Math.floor((new Date(deadline).getTime() - new Date().getTime()) / 1000);

    // Calculate the remaining days, hours, minutes, and seconds
    let days = Math.floor(remainingTime / (24 * 60 * 60));
    remainingTime -= days * 24 * 60 * 60;
    let hours = Math.floor(remainingTime / (60 * 60));
    remainingTime -= hours * 60 * 60;
    let minutes = Math.floor(remainingTime / 60);
    remainingTime -= minutes * 60;
    let seconds = remainingTime;

    // Update the countdown element with the remaining time
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
}, 1000);