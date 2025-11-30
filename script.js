// Récupération des éléments du DOM
const statusSpan = document.getElementById("status");
const sensorValueSpan = document.getElementById("sensor-value");
const logDiv = document.getElementById("log");

const btnOn = document.getElementById("btn-on");
const btnOff = document.getElementById("btn-off");

let systemOn = false;

// ---- Fonctions utilitaires ----

// Ajoute une ligne dans le journal
function addLog(message) {
  const time = new Date().toLocaleTimeString();
  const line = document.createElement("div");
  line.textContent = `[${time}] ${message}`;
  logDiv.prepend(line); // dernier événement en haut
}

// Met à jour l'affichage de l'état (badge)
function updateStatusDisplay() {
  if (systemOn) {
    statusSpan.textContent = "Activé";
    statusSpan.classList.remove("badge-off");
    statusSpan.classList.add("badge-on");
  } else {
    statusSpan.textContent = "Désactivé";
    statusSpan.classList.remove("badge-on");
    statusSpan.classList.add("badge-off");
    sensorValueSpan.textContent = "--";
  }
}

// Simule la "réponse" d'un capteur (comme si on appelait un backend)
function getFakeSensorValue() {
  // Simule une température entre 20 et 35°C
  const value = 20 + Math.random() * 15;
  return value.toFixed(1);
}

// ---- Gestion des boutons ----

btnOn.addEventListener("click", () => {
  if (!systemOn) {
    systemOn = true;
    updateStatusDisplay();
    addLog("Système activé.");
  }
});

btnOff.addEventListener("click", () => {
  if (systemOn) {
    systemOn = false;
    updateStatusDisplay();
    addLog("Système désactivé.");
  }
});

// ---- Mise à jour périodique du capteur ----

setInterval(() => {
  if (systemOn) {
    const value = getFakeSensorValue();
    sensorValueSpan.textContent = value + " °C";
    addLog(`Nouvelle valeur de capteur : ${value} °C`);
  }
}, 2000); // toutes les 2 secondes

// Initialisation
updateStatusDisplay();
addLog("Dashboard chargé.");
