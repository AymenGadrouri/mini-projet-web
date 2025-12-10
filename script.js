/* ===========================================================
   THEME TOGGLE (🌞 / 🌙)
   =========================================================== */
const themeBtn = document.getElementById("theme-toggle");

if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("light");

        // Change icon depending on mode
        if (document.body.classList.contains("light")) {
            themeBtn.textContent = "🌙"; // dark mode icon
        } else {
            themeBtn.textContent = "🌞"; // light mode icon
        }
    });
}

/* ===========================================================
   YEAR AUTO UPDATE
   =========================================================== */
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

/* ===========================================================
   LOGIN / REGISTER SYSTEM
   =========================================================== */
function showRegister() {
    document.querySelector(".login-box").classList.add("hidden");
    document.querySelector(".register-box").classList.remove("hidden");
}

function showLogin() {
    document.querySelector(".register-box").classList.add("hidden");
    document.querySelector(".login-box").classList.remove("hidden");
}

function register() {
    const user = document.getElementById("reg-username").value;
    const pass = document.getElementById("reg-password").value;

    if (!user || !pass) {
        alert("Please fill all fields.");
        return;
    }

    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);

    alert("Account created successfully!");
    showLogin();
}

function login() {
    const user = document.getElementById("login-username").value;
    const pass = document.getElementById("login-password").value;

    if (
        user === localStorage.getItem("username") &&
        pass === localStorage.getItem("password")
    ) {
        alert("Logged in!");
        window.location.href = "index.html";
    } else {
        alert("Wrong username or password.");
    }
}
