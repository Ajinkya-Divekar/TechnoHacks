let timer;
let timeInSeconds = 0;
let isTimerRunning = false;

function initializeTimer() {
  const defaultTime = 5 * 60;
  timeInSeconds = defaultTime;
  updateTimer(true);
}

function startTimer() {
  if (isTimerRunning) {
    stopTimer();
  } else {
    const userInput = document.getElementById("timer-input").value;
    timeInSeconds = userInput * 60;
    timer = setInterval(() => updateTimer(false), 1000);
    updateTimer(true);
  }
  isTimerRunning = !isTimerRunning;
}

function stopTimer() {
  if (isTimerRunning) {
    clearInterval(timer);
    document.getElementById("start-stop").innerText = "Continue";
  } else {
    // If the timer is paused, continue it
    timer = setInterval(() => updateTimer(false), 1000);
    document.getElementById("start-stop").innerText = "Pause";
  }
  isTimerRunning = !isTimerRunning; // Invert the running status
}

function resetTimer() {
  clearInterval(timer);
  const userInput = document.getElementById("timer-input").value;
  timeInSeconds = userInput * 60;
  updateTimer(true);
  isTimerRunning = false;
}
// Updates the timer every second
function updateTimer(reset) {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = timeInSeconds % 60;

  const formattedTime = `${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  document.getElementById("timer").innerText = formattedTime;

  if (timeInSeconds === 0) {
    stopTimer();
    if (!reset) {
      alert("Timer reached zero!");
      isTimerRunning = false;
    }
  } else {
    timeInSeconds--;
  }
}

window.onload = initializeTimer;
