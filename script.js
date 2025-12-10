/* ===========================================================
   THEME TOGGLE 🌞 / 🌙
   =========================================================== */
const themeBtn = document.getElementById("theme-toggle");

if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("light");

        // Change icon depending on the theme
        if (document.body.classList.contains("light")) {
            themeBtn.textContent = "🌙"; // Switch to dark mode icon
        } else {
            themeBtn.textContent = "🌞"; // Switch to light mode icon
        }
    });
}

/* ===========================================================
   UPDATE YEAR IN FOOTER
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

/* ===========================================================
   SMOOTH SCROLL FOR NAVIGATION LINKS
   (Fixe le problème du "snap" instantané)
   =========================================================== */
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: "smooth"
            });
        }
    });
});
