const importanceButton = document.querySelector(".importance-button");
const importanceValue = document.querySelector(".importance-value");

importanceButton.addEventListener("click", function() {
    const currentValue = parseInt(importanceValue.innerHTML, 10);
    importanceValue.innerHTML = currentValue + 1;
});