// Typing effect
const text = "We Protect. We Defend. We Secure.";
const typingElement = document.querySelector(".typing-text");
let index = 0;

function typeText() {
    typingElement.innerHTML = text.slice(0, index);
    index++;
    if (index <= text.length) {
        setTimeout(typeText, 80);
    }
}
typeText();

// Theme toggle
const toggleBtn = document.getElementById("toggle-theme");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
});

// Auto year
document.getElementById("year").textContent = new Date().getFullYear();
