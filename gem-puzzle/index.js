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
    const indexColumn = (index % length) === 0 ? 4 : (index % length);
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
    // console.log([top, botton, right, left]);
    const finalArray = [top, botton, right, left].filter((i) => validator(i, Math.pow(l, 0.5))).map((i) => getElement(i, children)).filter((i) => i === e.target);

    if (finalArray.length === 0) {
      return false;
    };
    return true;
  },

  move(e) {
    console.log(e.target);
    if ((this.canMove(e))) {
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
    const size = 60;
    const options = {
      '3': 'three-on-three',
      '4': 'four-on-four',
      '8': 'eight-on-eight',
    };

    const howManyItems = {
      '3': 9,
      '4': 16,
      '8': 64,
    }
    const root = document.body;
    const gameContainer = document.createElement('div');
    const gameArea = document.createElement('div');


    const items = (n) => {
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
        item.addEventListener('click', this.move.bind(this))

      })
    }
    items(4);

    gameContainer.appendChild(gameArea)
    gameContainer.className = `game-container ${options[`${n}`]}-container`;
    gameArea.className = `game-area ${options[`${n}`]}-game-area`;
    root.appendChild(gameContainer);
    // console.log(gameArea);
  },
  init() {
    this.gameAreaConstruct(4);
  },

}

window.addEventListener("DOMContentLoaded", function () {
  Gem.init();
});