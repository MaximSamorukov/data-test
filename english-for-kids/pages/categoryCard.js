import './style/categoryCard.css';
// Function returns DOM element of the directory card. The card is shown
// on the main page and used to get to the exact category page with play cards.
// The name of the derictory is shown on this category card.
// The argument is 'this' from './src/game.js' and the name of the category.
export default function categoryCard(context, word) {
  const chosen = context.currentCategory === word;
  const container = document.createElement('div');
  const card = document.createElement('div');
  const innerWord = document.createElement('b');
  innerWord.innerText = word;
  card.appendChild(innerWord);
  container.className = chosen ? 'category-card-container chosen' : 'category-card-container not-chosen';
  card.className = 'category-card';
  container.appendChild(card);
  container.addEventListener('click', (e) => {
    e.stopImmediatePropagation();
    context.currentCategory = chosen ? false : word;
    context.currentPage = 'category';
    context.init();
  })
  return container;

}