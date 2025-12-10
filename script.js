// ===== YEAR FOOTER =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== THEME SWITCH =====
const toggleBtn = document.getElementById("toggle-theme");
if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("light");
    });
}

// ===== LOGIN / REGISTER FRONTEND =====

// Show register form
function showRegister() {
    document.querySelector(".login-box").classList.add("hidden");
    document.querySelector(".register-box").classList.remove("hidden");
}

// Show login form
function showLogin() {
    document.querySelector(".register-box").classList.add("hidden");
    document.querySelector(".login-box").classList.remove("hidden");
}

// Fake local storage login
function register() {
    const user = document.getElementById("reg-username").value;
    const pass = document.getElementById("reg-password").value;

    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);

    alert("Account created! You can now login.");
    showLogin();
}

function login() {
    const user = document.getElementById("login-username").value;
    const pass = document.getElementById("login-password").value;

    if (
        user === localStorage.getItem("username") &&
        pass === localStorage.getItem("password")
    ) {
        alert("Logged in successfully!");
        window.location.href = "index.html";
    } else {
        alert("Incorrect username or password.");
    }
}
