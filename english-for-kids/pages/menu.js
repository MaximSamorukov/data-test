import './style/menu.css';
import { menuItem } from './service';

export default function menu(context) {
  const { showMenu, pages, currentCategory, categories } = context;
  console.log(showMenu);
  const container = document.createElement('div');
  const textContainer = document.createElement('div');

  const pageContainer = document.createElement('div');
  const categoriesContainer = document.createElement('div');

  container.className = showMenu ? 'menu-container' : 'menu-container display-none';
  textContainer.className = showMenu ? 'menu-text-container' : 'menu-text-container display-none';

  pages.map((i) => {
    textContainer.append(menuItem(i));
    return i;
  });
  categories.map((element) => {
    textContainer.append(menuItem(element));
    return element;
  });
  container.appendChild(textContainer);
  container.addEventListener('click', () => {
    context.showMenu = !showMenu;
    context.init();
  });
  textContainer.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target.textContent);
    const word = e.target.textContent;
    const chosen = context.currentCategory === word;
    context.currentCategory = chosen ? false : word;
    context.currentPage = 'category';
    context.init();
  })
  return container;
}
