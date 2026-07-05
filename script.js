// gentle falling petals in the hero section
const petalContainer = document.getElementById('petals');
const petalChars = ['🌸', '🤍', '✨'];
const petalCount = 18;

for (let i = 0; i < petalCount; i++) {
  const petal = document.createElement('span');
  petal.className = 'petal';
  petal.textContent = petalChars[Math.floor(Math.random() * petalChars.length)];
  petal.style.left = Math.random() * 100 + '%';
  petal.style.animationDuration = 8 + Math.random() * 10 + 's';
  petal.style.animationDelay = Math.random() * 10 + 's';
  petal.style.fontSize = 0.9 + Math.random() * 0.9 + 'rem';
  petalContainer.appendChild(petal);
}

// reveal the letter on click
const revealBtn = document.getElementById('revealBtn');
const letterCard = document.getElementById('letterCard');

revealBtn.addEventListener('click', () => {
  letterCard.classList.add('open');
  revealBtn.classList.add('hidden');
  letterCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
});
