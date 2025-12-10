/* ===========================================================
   THEME TOGGLE 🌞 / 🌙
   =========================================================== */
const themeBtn = document.getElementById("theme-toggle");

if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("light");

        // Change icon based on theme
        if (document.body.classList.contains("light")) {
            themeBtn.textContent = "🌙"; // switch to dark
        } else {
            themeBtn.textContent = "🌞"; // switch to light
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
        alert("Veuillez remplir tous les champs.");
        return;
    }

    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);

    alert("Compte créé avec succès !");
    showLogin();
}

function login() {
    const user = document.getElementById("login-username").value;
    const pass = document.getElementById("login-password").value;

    if (
        user === localStorage.getItem("username") &&
        pass === localStorage.getItem("password")
    ) {
        alert("Connexion réussie !");
        window.location.href = "index.html";
    } else {
        alert("Nom d'utilisateur ou mot de passe incorrect.");
    }
}
