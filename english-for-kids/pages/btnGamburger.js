import './style/btnGamburger.css';

export default function btnGamburger(context) {
  const { showMenu } = context;
  const btnContainer = document.createElement('div');
  btnContainer.className = 'btn-gamburger';
  const btn = document.createElement('div');
  btnContainer.appendChild(btn);
  btn.className = 'btn-gamburger-btn';
  btnContainer.addEventListener('click', (e) => {
    context.showMenu = !showMenu;
    context.init();
  });
  return btnContainer;
}