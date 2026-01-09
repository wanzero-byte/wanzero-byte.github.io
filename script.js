// COUNTDOWN
const targetDate = new Date("2032-02-14T00:00:00").getTime();
const countdownEl = document.getElementById("countdown");

setInterval(() => {
  const now = Date.now();
  const diff = targetDate - now;

  if (diff <= 0) {
    countdownEl.textContent = "Time is up.";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  countdownEl.textContent = `${days} days remaining`;
}, 1000);

// JOURNAL (static for now)
const journal = [
  {
    date: "2026-01-09",
    title: "Started the countdown",
    notes: "Decided to stop drifting and actually track progress."
  }
];

const journalEl = document.getElementById("journal");

journal.forEach(entry => {
  const div = document.createElement("div");
  div.className = "entry";
  div.innerHTML = `<strong>${entry.date}</strong><br>
                   <em>${entry.title}</em><br>
                   ${entry.notes}`;
  journalEl.appendChild(div);
});

// TARGET TIME
const targetDate = new Date("2032-02-14T00:00:00").getTime();

// ELEMENT WHERE COUNTDOWN APPEARS
const countdownEl = document.getElementById("countdown");

// FUNCTION TO UPDATE COUNTDOWN
function updateCountdown() {
  const now = Date.now();                   // current time
  const diff = targetDate - now;            // milliseconds remaining

  if (diff <= 0) {                          // past the date
    countdownEl.textContent = "Time is up!";
    return;
  }

  // convert milliseconds into days, hours, minutes, seconds
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// UPDATE EVERY SECOND
setInterval(updateCountdown, 1000);

// INITIAL CALL (so it shows immediately)
updateCountdown();
