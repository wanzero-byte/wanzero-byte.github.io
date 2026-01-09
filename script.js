// =====================
// COUNTDOWN SETUP
// =====================
const targetDate = new Date("2032-02-14T00:00:00").getTime();
const countdownEl = document.getElementById("countdown");

function updateCountdown() {
  const now = Date.now();
  const diff = targetDate - now;

  if (diff <= 0) {
    countdownEl.textContent = "Time is up!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Call immediately, then every second
updateCountdown();
setInterval(updateCountdown, 1000);


// =====================
// JOURNAL SETUP
// =====================

// Add journal entries here.
// Always use format:
// {
//   date: "YYYY-MM-DD",
//   type: "achievement" or "unlucky",
//   title: "Short title",
//   notes: "Longer notes about what happened"
// }

const journal = [
  {
    date: "2026-01-09",
    type: "achievement",
    title: "Started the countdown journal",
    notes: "Decided to track progress and setbacks toward my goal."
  }
];

// Render journal
const journalEl = document.getElementById("journal");
function renderJournal() {
  // Clear old content
  journalEl.innerHTML = "";

  // Sort entries newest first
  const sorted = journal.sort((a, b) => new Date(b.date) - new Date(a.date));

  sorted.forEach(entry => {
    const div = document.createElement("div");
    div.className = "entry";
    div.innerHTML = `
      <strong>${entry.date}</strong> — <em>${entry.type.toUpperCase()}</em><br>
      <strong>${entry.title}</strong><br>
      ${entry.notes}
    `;
    journalEl.appendChild(div);
  });
}

// Initial render
renderJournal();

