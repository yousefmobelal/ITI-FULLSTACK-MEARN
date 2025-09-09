function* tipGenerator() {
  const tips = [
    "Stay hydrated.",
    "Take regular breaks.",
    "Use keyboard shortcuts.",
    "Write clean code.",
    "Comment your functions.",
    "Keep learning new things.",
    "Backup your data.",
    "Practice problem-solving.",
    "Organize your workspace.",
    "Review your work.",
  ];

  for (let i = 0; i < tips.length; i++) {
    yield tips[i];
    //[ {}, , , , , , ]
  }
}
//{value:, done:}

const tipBox = document.getElementById("tip-box");

document.getElementById("loop-all").addEventListener("click", () => {
  clearInterval(intervalId);
  const gen = tipGenerator();
  let tips = "";
  for (const tip of gen) {
    tips += `${tip}<br>`;
  }
  tipBox.innerHTML = tips;
});

let intervalId = null;
document.getElementById("start-interval").addEventListener("click", () => {
  const gen = tipGenerator();
  if (intervalId) {
    clearInterval(intervalId);
  }
  intervalId = setInterval(() => {
    const value = gen.next().value;
    tipBox.textContent = value;
  }, 3000);
});
