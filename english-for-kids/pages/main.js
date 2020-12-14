import './style/main.css';
import categoryCard from './categoryCard';
// Function returns container to constract Main Page.

export default function main(context) {
  const container = document.createElement('div');
  context.categories.map((i) => container.appendChild(categoryCard(context, i)))
  container.className = 'main-container';
  return container;
}
