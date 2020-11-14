const Gem = {

  randomArray(n) {
    let array = [];
    for (let i = 0; i < n; i += 1) {
      array.push(i);
    };
    const returnArray = [];
    for (let ii = 0; ii < n; ii += 1) {
      const value = array[Math.floor(Math.random() * array.length)];
      array = array.filter((i) => i !== value);
      returnArray.push(value);

    };

    return returnArray;
  },

  canMove(e, l = 16) {

    const current = e.target;
    const children = e.target.parentNode.children;
    const numArray = Array.from(children);
    let index = 0;
    const numArrayA = numArray.map((element, ind) => {
      if (element.textContent === '') {
        index = ind + 1;
      }
      return (element.textContent);
    });
    const length = Math.pow(l, 0.5);
    const indexRow = Math.ceil((index) / length);
    const indexColumn = (index % length) === 0 ? length : (index % length);
    // console.log(numArrayA);

    const getElement = ({ row, column }, array) => {
      const size = Math.pow(array.length, 0.5);
      const index = ((row - 1) * size) + (column - 1);
      const element = array[index];
      return element;
    }

    const validator = (point, size) => {
      let values = Object.values(point);
      const returnValue = '';
      values = values.filter((i) => i < (size + 1) && i > 0);
      if (values.length !== 2) {
        return false;
      }
      return point;
    };

    index = {
      row: indexRow,
      column: indexColumn,
    };
    const topColumn = indexColumn;
    const topRow = indexRow - 1;

    const bottonColumn = indexColumn;
    const bottonRow = indexRow + 1;

    const rightColumn = indexColumn + 1;
    const rightRow = indexRow;

    const leftColumn = indexColumn - 1;
    const leftRow = indexRow;

    const top = {
      row: topRow,
      column: topColumn,
    };

    const botton = {
      row: bottonRow,
      column: bottonColumn,
    };

    const right = {
      row: rightRow,
      column: rightColumn,
    };

    const left = {
      row: leftRow,
      column: leftColumn,
    };
    const finalArray = [top, botton, right, left].filter((i) => validator(i, Math.pow(l, 0.5))).map((i) => getElement(i, children)).filter((i) => i === e.target);
    if (finalArray.length === 0) {
      return false;
    };
    return true;
  },

  move(e) {
    if ((this.canMove(e, Math.pow(this.n, 2)))) {
      const element = e.target;
      const children = e.target.parentNode.children;
      const emptyItem = Array.from(children).filter((i) => i.textContent === '')[0];
      const text = element.textContent;
      element.textContent = '';
      emptyItem.textContent = text;
      element.classList.add('item-zero');
      emptyItem.classList.remove('item-zero');
      element.classList.remove('blue');
      emptyItem.classList.add('blue');

      // console.log(emptyItem);
      // this.canMove(e);

    }

  },


  gameAreaConstruct(n) {
    const size = Math.floor(25 / n) * 10;
    const options = {
      '3': 'three-on-three',
      '4': 'four-on-four',
      '8': 'eight-on-eight',
    };

    const howManyItems = {
      '3': 9,
      '4': 16,
      '8': 64,
    };

    const makeSelected = (par, n) => {
      const index = n === 3 ? 0 : n === 8 ? 2 : 1;
      par[index].selected = true;
    };

    const root = document.body;
    const gameContainer = document.createElement('div');
    const gameArea = document.createElement('div');
    const menuContainer = document.createElement('div');
    const select = document.createElement('select');
    const option3on3 = document.createElement('option');
    const option4on4 = document.createElement('option');
    const option8on8 = document.createElement('option');
    const btn = document.createElement('button');
    btn.type = 'submit';
    btn.name = 'select-btn';
    btn.textContent = 'Apply';
    btn.className = 'select-btn';
    btn.addEventListener('click', (e) => {
      const value = parseInt(e.target.parentNode.children[0].value[0]);
      // console.log(root);
      root.removeChild(gameContainer);
      this.init(value)
    })
    option3on3.textContent = '3 x 3';
    option4on4.textContent = '4 x 4';
    option8on8.textContent = '8 x 8';
    select.name = 'gameOptions';
    option3on3.value = '3 x 3';
    option4on4.value = '4 x 4';
    option8on8.value = '8 x 8';
    select.appendChild(option3on3);
    select.appendChild(option4on4);
    select.appendChild(option8on8);
    makeSelected(select, n);
    const clickZone = document.createElement('div');
    clickZone.textContent = 'Clicks: 0';
    clickZone.className = 'click-zone';
    const timeZone = document.createElement('div');
    timeZone.className = 'time-zone';
    timeZone.textContent = '00:00:00';
    gameContainer.appendChild(menuContainer);
    menuContainer.appendChild(select);
    menuContainer.appendChild(btn);
    menuContainer.appendChild(clickZone);
    menuContainer.appendChild(timeZone);
    menuContainer.className = 'menu-container';
    const items = (n = 4) => {
      this.randomArray(howManyItems[`${n}`]).map((i) => {
        const item = document.createElement('div');
        item.className = `item-${size} blue`;
        gameArea.appendChild(item);
        if (i === 0) {
          item.className = `item-${size} item-zero`;
          item.textContent = ``;
        } else {
          item.textContent = `${i}`;
        }
        this.n = n;
        item.addEventListener('click', this.move.bind(this))

      })
    }
    items(n);

    gameContainer.appendChild(gameArea)
    gameContainer.className = `game-container ${options[`${n}`]}-container`;
    gameArea.className = `game-area ${options[`${n}`]}-game-area`;
    root.appendChild(gameContainer);

    gameArea.addEventListener('mousedown', (e) => {
      if (e.target.className.includes('item-zero')) {
        return;
      };
      const clickZone = document.querySelector('.click-zone');
      const prevValue = parseInt(clickZone.textContent.split(':')[1].trim());
      const newValue = prevValue + 1;
      clickZone.textContent = `Clicks: ${newValue}`
    })
    // console.log(gameArea);
  },

  ifwin() {
    console.log('ifwin');
    const gameArea = document.querySelector('.game-area');
    const children = gameArea.childNodes;
    gameArea.addEventListener('click', (e) => {
      const classListAr = [];
      children.forEach((element) => classListAr.push(parseInt(element.textContent)));
      console.log(classListAr);
    })
  },

  init(arg) {
    this.gameAreaConstruct(arg);
    this.ifwin();
    const timeZone = document.querySelector('.time-zone');
    const gameArea = document.querySelector('.game-area');
    const timeOrigin = new Date();
    const myFunc = () => {
      const now = new Date();
      let t = new Date(now - timeOrigin);

      const h = t.getUTCHours() < 10 ? `0${t.getUTCHours()}` : `${t.getUTCHours()}`;
      const m = t.getMinutes() < 10 ? `0${t.getMinutes()}` : `${t.getMinutes()}`;
      const s = t.getSeconds() < 10 ? `0${t.getSeconds()}` : `${t.getSeconds()}`;
      const time = [h, m, s];
      timeZone.textContent = timeZone.textContent.split(':').map((i, index) => time[index]).join(':');
    }
    const fnTime = (e) => {
      if (e.target.className.includes('item-zero')) {
        return;
      };
      let id = window.setInterval(myFunc, 1000);
      gameArea.removeEventListener('mousedown', fnTime);
      window.setTimeout(() => {
        window.clearInterval(id);
      }, 10000);
    }
    gameArea.addEventListener('mousedown', fnTime);
  },
}

window.addEventListener("DOMContentLoaded", function () {
  Gem.init(4);
});