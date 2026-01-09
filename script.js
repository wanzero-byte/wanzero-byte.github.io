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
