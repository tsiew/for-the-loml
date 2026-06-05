const correctPassword = "051225";

function checkPassword() {
  const input = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (input === correctPassword) {
    document.getElementById("password-screen").classList.remove("active");
    document.getElementById("main-content").classList.remove("hidden");
  } else {
    error.textContent = "Wrong password... try our special date ♡";
  }
}

function updateLoveCounter() {
  const startDate = new Date("2025-12-05T00:00:00");
  const now = new Date();

  const difference = now - startDate;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(difference / (1000 * 60 * 60));
  const minutes = Math.floor(difference / (1000 * 60));

document.getElementById("minutes-counter").textContent =
  minutes.toLocaleString();
  
  document.getElementById("days-counter").textContent = days;
  document.getElementById("hours-counter").textContent = hours;
}


updateLoveCounter();
setInterval(updateLoveCounter, 60000);

function showSecret() {
    document.getElementById("secret").style.display = "block";
}