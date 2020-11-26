const game = require('./src/game');
const main = require('./pages/main');


const root = document.querySelector('body');
const rootContainer = document.createElement('div');
const mainPage = main();
rootContainer.innerHTML = mainPage;
root.appendChild(rootContainer);
game();