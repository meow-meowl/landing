const landing = document.getElementById('landing');
const startBtn = document.getElementById('start-btn');
const cardsSection = document.getElementById('cards-section');
const textButtonContainer = document.getElementById('text-button-container');
const nxtBtn = document.getElementById('nxt-btn');
const noteSection = document.getElementById('note-section');
const picRevealBtn = document.getElementById('pic-reveal');
const imageSection = document.getElementById('image-section');

for (let _ = 0; _ < 67; _++){
  const star = document.createElement('div');
  star.className = 'star';
  star.style.bottom = Math.random()*100 + '%';
  star.style.left = Math.random()*100 + '%';
  star.style.animationDuration = (1+ Math.random()*2) + 's';
  landing.append(star);
}

// StartBtn text/button container out,reveal cards-section
startBtn.addEventListener('click', () => {
  textButtonContainer.classList.add('fading');
  setTimeout(() => {
    textButtonContainer.classList.add('hidden');
    cardsSection.classList.add('show');}, 1500);
}
);

document.addEventListener('DOMContentLoaded',()=>{
  const cards = document.querySelectorAll('.card');
  for (const card of cards){
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  }
});

// document.addEventListener('DOMContentLoaded', () => {
//   const cards = document.querySelectorAll('.card');
//   cards.forEach(card => {
//     card.addEventListener('click', () => {
//       card.classList.toggle('flipped');
//     });
//   });
// });

nxtBtn.addEventListener('click', () => {
      landing.classList.add('fading');
      cardsSection.classList.remove('show');
  setTimeout(() => {
    cardsSection.classList.add('hidden');
    landing.classList.add('hidden');
    noteSection.classList.add('show');
  }, 1300);
});

picRevealBtn.addEventListener('click', () => {
  noteSection.classList.add('fading');
  noteSection.classList.remove('show');
  setTimeout(() => {
    noteSection.classList.add('hidden');
    imageSection.classList.add('show');
    confetti({
      particleCount: 200,
      spread: 360
    });
  }, 1300);
});
