// Ziel-Datum für den Countdown
const targetDate = new Date('2025-06-19T10:00:00');

// Sätze, die alle 30 Sekunden wechseln
const sentences = [
  "Der Countdown läuft.",
  "Bereite dich vor.",
  "Noch ein bisschen Geduld.",
  "Fast geschafft.",
  "Es dauert nicht mehr lange.",
  "Die Spannung steigt.",
  "Bleib dran.",
  "Bald ist es soweit.",
  "Die Zeit vergeht.",
  "Halte durch.",
  "Es nähert sich.",
  "Nicht mehr lange.",
  "Schon bald.",
  "Die Uhr tickt.",
  "Es kommt näher.",
  "Bereit machen.",
  "Endspurt.",
  "Letzte Vorbereitungen.",
  "Gleich ist es soweit.",
  "Der Moment naht."
];

// Initialisierung des Flip-Countdowns
const flipClock = new Flip({
  element: document.querySelector('#flip-clock'),
  theme: 'dark',
  value: 0,
  countdown: true
});

// Funktion zur Aktualisierung des Countdowns
function updateCountdown() {
  const now = new Date();
  const timeLeft = targetDate - now;

  if (timeLeft <= 0) {
    flipClock.setValue(0);
    document.getElementById('sentence').textContent = "Der Countdown ist abgelaufen!";
    clearInterval(countdownInterval);
    clearInterval(sentenceInterval);
    return;
  }

  const seconds = Math.floor(timeLeft / 1000);
  flipClock.setValue(seconds);
}

// Funktion zum Wechseln der Sätze
let sentenceIndex = 0;
function updateSentence() {
  document.getElementById('sentence').textContent = sentences[sentenceIndex];
  sentenceIndex = (sentenceIndex + 1) % sentences.length;
}

// Intervalle für Countdown und Satzwechsel
updateCountdown();
updateSentence();
const countdownInterval = setInterval(updateCountdown, 1000);
const sentenceInterval = setInterval(updateSentence, 30000);
