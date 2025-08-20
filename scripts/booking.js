/* Booking page interactivity
   - Toggle weekdays selected state
   - Switch between half/full day rates
   - Recalculate and display total
*/

// ----- State -----
const WEEKDAY_IDS = ["monday", "tuesday", "wednesday", "thursday", "friday"];
const dayEls = WEEKDAY_IDS.map(id => document.getElementById(id));
const halfBtn = document.getElementById("half");
const fullBtn = document.getElementById("full");
const clearBtn = document.getElementById("clear-button");
const costEl = document.getElementById("calculated-cost");

// Rates (adjust if your instructor specified different values)
const HALF_RATE = 20;
const FULL_RATE = 35;

// Track which days are selected and the active rate
const selectedDays = new Set();
let dailyRate = FULL_RATE; // default is full (page starts with #full having .clicked)

// Initialize from existing DOM state
if (fullBtn && fullBtn.classList.contains("clicked")) {
  dailyRate = FULL_RATE;
}
if (halfBtn && halfBtn.classList.contains("clicked")) {
  dailyRate = HALF_RATE;
}

// ----- Helpers -----
function updateTotal() {
  const total = selectedDays.size * dailyRate;
  costEl.textContent = String(total);
}

function toggleDay(el) {
  const id = el.id;
  const wasSelected = el.classList.contains("clicked");
  if (wasSelected) {
    el.classList.remove("clicked");
    selectedDays.delete(id);
  } else {
    el.classList.add("clicked");
    selectedDays.add(id);
  }
  updateTotal();
}

function setRate(rate) {
  dailyRate = rate;
  if (rate === HALF_RATE) {
    halfBtn.classList.add("clicked");
    fullBtn.classList.remove("clicked");
  } else {
    fullBtn.classList.add("clicked");
    halfBtn.classList.remove("clicked");
  }
  updateTotal();
}

function clearDays() {
  selectedDays.clear();
  dayEls.forEach(el => el.classList.remove("clicked"));
  updateTotal();
}

// ----- Event listeners -----
dayEls.forEach(el => {
  el.addEventListener("click", () => toggleDay(el));
});

halfBtn.addEventListener("click", () => setRate(HALF_RATE));
fullBtn.addEventListener("click", () => setRate(FULL_RATE));
clearBtn.addEventListener("click", clearDays);

// First render
updateTotal();
