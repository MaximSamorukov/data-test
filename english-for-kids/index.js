import game from './src/game.js';
import main from './pages/main.js';
import './pages/style/index.css'


const root = document.querySelector('.container');
const rootContainer = document.createElement('div');
const mainPage = main();
console.log('mainPage');
rootContainer.innerHTML = mainPage;
root.appendChild(rootContainer);
document.body.appendChild(root);
game();
