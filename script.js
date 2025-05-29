const targetDate = new Date(2025, 5, 19, 10, 0, 0); // 19. Juni 2025, 10:00

function updateTime() {
  const now = new Date();
  const timeLeft = targetDate - now;

  if (timeLeft <= 0) {
    document.querySelector('.flip-clock').innerHTML = "<h2>Der Countdown ist abgelaufen!</h2>";
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  flip('days', days);
  flip('hours', hours);
  flip('minutes', minutes);
  flip('seconds', seconds);
}

function flip(id, newValue) {
  const flipUnit = document.getElementById(id);
  const card = flipUnit.querySelector('.card');
  const front = card.querySelector('.front');
  const back = card.querySelector('.back');
  const currentValue = front.textContent;
  const newValueStr = newValue.toString().padStart(2, '0');

  if (currentValue !== newValueStr) {
    back.textContent = newValueStr;
    card.style.transform = 'rotateX(-180deg)';
    setTimeout(() => {
      front.textContent = newValueStr;
      card.style.transform = 'rotateX(0deg)';
    }, 600);
  }
}

setInterval(updateTime, 1000);
updateTime();
