import { Game } from './src/game.js';
import './pages/style/index.css'

function render() {
  // document.body.remove();
  const root = document.querySelector('.container');
  root.innerHTML = null;
  const rootContainer = document.createElement('div');
  rootContainer.className = 'root-container';
  const view = Game.game();
  rootContainer.appendChild(view);
  root.appendChild(rootContainer);
  document.body.appendChild(root);
}

window.addEventListener('DOMContentLoaded', () => {
  render();
})

export { render }