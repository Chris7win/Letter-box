const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const letterContainer = document.querySelector(".letter-container");

// ✅ Apply global normal font when page loads
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.fontStyle = "normal";
document.body.style.fontWeight = "normal";

// Show the letter when clicking "Open"
openBtn.addEventListener("click", () => {
  letterContainer.classList.remove("hidden");
});

// Hide the letter when clicking "Close"
closeBtn.addEventListener("click", () => {
  letterContainer.classList.add("hidden");
});
