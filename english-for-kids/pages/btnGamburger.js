import './style/btnGamburger.css';

// Function constructs and returns button "Humburger" that is used in all pages to turn on / off left side menu. Argument is "this" from "./src/game.js"

export default function btnGamburger(context) {
  const { showMenu } = context;
  const btnContainer = document.createElement('div');
  btnContainer.className = 'btn-gamburger';
  const btn = document.createElement('div');
  btnContainer.appendChild(btn);
  btn.className = 'btn-gamburger-btn';
  btnContainer.addEventListener('click', (e) => {
    e.stopImmediatePropagation();
    e.preventDefault();
    context.showMenu = true;
    if (context.showMenu) {
      context.init();
      const elem = document.querySelector('.menu-container');
      elem.classList.add('show');
    };
  });
  return btnContainer;
}