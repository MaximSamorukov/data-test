import './style/categoryCard.css';

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