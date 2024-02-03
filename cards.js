document.getElementById("cards").addEventListener("mousemove", handleMouseMove);
document.getElementById("cards").addEventListener("touchmove", handleTouchMove);

function handleMouseMove(e) {
  for (const card of document.getElementsByClassName("card")) {
    updateCardPosition(card, e.clientX, e.clientY);
  }
}

function handleTouchMove(e) {
  for (const card of document.getElementsByClassName("card")) {
    updateCardPosition(card, e.touches[0].clientX, e.touches[0].clientY);
  }
}

function updateCardPosition(card, clientX, clientY) {
  const rect = card.getBoundingClientRect();
  const x = clientX - rect.left;
  const y = clientY - rect.top;

  card.style.setProperty("--mouse-x", `${x}px`);
  card.style.setProperty("--mouse-y", `${y}px`);
}

// const cards = document.getElementById('cards');

// function showCardsOnScroll() {
//   const cardsTop = cards.getBoundingClientRect().top;
//   const windowHeight = window.innerHeight;

//   if (cardsTop > windowHeight * 0.9) {
//     cards.classList.add('show');
//     window.removeEventListener('scroll', showCardsOnScroll);
//   }
// }

// window.addEventListener('scroll', showCardsOnScroll);