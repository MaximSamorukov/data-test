import changeAnimation from ('./animation');

const Gem = {
  delta: 0,
  key: false,
  timeOrigin: 0,

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

  myFunc() {
    // console.log('i');
    // console.log(this);
    const timeZone = document.querySelector('.time-zone');
    // console.log(this.timeOrigin);
    this.timeOrigin = this.timeOrigin === 0 ? new Date() : this.timeOrigin;
    // console.log(this.timeOrigin);
    const now = new Date();
    // console.log(now.valueOf());
    // console.log(this.timeOrigin);
    // console.log(this.delta);
    let t = new Date(now.valueOf() - this.timeOrigin.valueOf() + this.delta);
    const h = t.getUTCHours() < 10 ? `0${t.getUTCHours()}` : `${t.getUTCHours()}`;
    const m = t.getMinutes() < 10 ? `0${t.getMinutes()}` : `${t.getMinutes()}`;
    const s = t.getSeconds() < 10 ? `0${t.getSeconds()}` : `${t.getSeconds()}`;
    const time = [h, m, s];
    timeZone.textContent = timeZone.textContent.split(':').map((i, index) => time[index]).join(':');
  },

  fnTime(e) {
    const gameArea = document.querySelector('.game-area');
    if (e.target.className.includes('item-zero')) {
      return;
    };
    this.myFunc();
    // console.log(this.timeOrigin)
    if (this.key === false) {
      let id = window.setInterval(this.myFunc.bind(this), 1000);
      this.key = id;
    }

    gameArea.removeEventListener('mousedown', this.fnTime);
    window.setTimeout(() => {
      window.clearInterval(this.key);
    }, 50000);
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

  items(n = 4, size) {
    const howManyItems = {
      '3': 9,
      '4': 16,
      '8': 64,
    };
    const gameArea = document.querySelector('.game-area');
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
      item.addEventListener('click', this.move.bind(this));
      item.addEventListener('mousedown', (e) => {
        const item = e.target;
        item.className = `item-${size} item-zero`;
      });
      item.addEventListener('mouseup', (e) => {
        if (e.target.className.includes('item-zero')) {
          return;
        };
        const item = e.target;
        item.className = `item-${size} blue`;
      });

    })
  },

  createItemsOnLoad(str) {
    const n = Math.pow(str.split(':').length, 0.5);
    const size = Math.floor(25 / n) * 10;
    const howManyItems = {
      '3': 9,
      '4': 16,
      '8': 64,
    };
    const gameArea = document.querySelector('.game-area');
    str.split(':').map((i) => {
      const item = document.createElement('div');
      item.className = `item-${size} blue`;
      // console.log(item);
      gameArea.appendChild(item);
      if (i === '') {
        item.className = `item-${size} item-zero`;
        item.textContent = ``;
      } else {
        item.textContent = `${i}`;
      }
      this.n = n;
      item.addEventListener('click', this.move.bind(this))
      item.addEventListener('mousedown', (e) => {
        const item = e.target;
        item.className = `item-${size} item-zero`;
      });
      item.addEventListener('mouseup', (e) => {
        if (e.target.className.includes('item-zero')) {
          return;
        };
        const item = e.target;
        item.className = `item-${size} blue`;
      });
    })
  },

  makeSelected(par, n) {
    const index = n === 3 ? 0 : n === 8 ? 2 : 1;
    par[index].selected = true;
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



    const root = document.body;
    const gameContainer = document.createElement('div');
    const gameArea = document.createElement('div');
    const menuContainer = document.createElement('div');
    const select = document.createElement('select');
    const option3on3 = document.createElement('option');
    const option4on4 = document.createElement('option');
    const option8on8 = document.createElement('option');
    const saveBtn = document.createElement('button');
    saveBtn.name = 'save-btn';
    saveBtn.textContent = "Save";
    saveBtn.className = 'save-btn';
    saveBtn.addEventListener('click', (e) => {
      console.log('save');
      const gameArea = document.querySelector('.game-area');
      const gameAreaChildren = gameArea.childNodes;
      const clicks = document.querySelector('.click-zone').textContent.split(':')[1].trim();
      const time = document.querySelector('.time-zone').textContent;
      let string = '';
      gameAreaChildren.forEach((item) => {
        string = `${string}:${item.textContent}`;
        return item;
      });
      string = string.slice(1);
      string = `${clicks};${time};${string}`;
      const storage = window.localStorage;
      storage.setItem('data', string);
      // console.log(string);
    });
    const loadBtn = document.createElement('button');
    loadBtn.name = 'load-btn';
    loadBtn.textContent = "Load";
    loadBtn.className = 'load-btn';

    loadBtn.addEventListener('click', (e) => {
      // console.log(window);
      window.clearInterval(this.key);
      this.key = false;
      const storage = window.localStorage;
      const data = storage.getItem('data');
      const [clicks, time, items] = data.split(';');
      // console.log(clicks);
      // console.log(time);
      // console.log(items);
      const date = new Date(time.split(':').map((i) => parseInt(i)).reduce((acc, i, index) => {
        if (index === 0) {
          const hValue = i * 60 * 60 * 1000;
          return acc + hValue;
        }
        else if (index === 1) {
          const mValue = i * 60 * 1000;
          return acc + mValue;
        }
        else if (index === 2) {
          const sValue = i * 1000;
          return acc + sValue;
        }
      }, 0));
      // console.log(date);
      this.delta = date.valueOf();
      // console.log(this.delta);
      this.timeOrigin = 0;
      const clickszone = document.querySelector('.click-zone');
      const timezone = document.querySelector('.time-zone');
      timezone.textContent = time;
      clickszone.textContent = `Clicks: ${clicks}`;
      const gameArea = document.querySelector('.game-area');
      gameArea.innerHTML = '';
      this.createItemsOnLoad(items);
      this.makeSelected(select, Math.pow(items.split(':').length, 0.5));
      gameArea.addEventListener('mousedown', this.fnTime.bind(this));

    });
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
    this.makeSelected(select, n);
    const clickZone = document.createElement('div');
    clickZone.textContent = 'Clicks: 0';
    clickZone.className = 'click-zone';
    const timeZone = document.createElement('div');
    timeZone.className = 'time-zone';
    timeZone.textContent = '00:00:00';
    gameContainer.appendChild(menuContainer);
    menuContainer.appendChild(select);
    menuContainer.appendChild(btn);
    menuContainer.appendChild(saveBtn);
    menuContainer.appendChild(loadBtn);
    menuContainer.appendChild(clickZone);
    menuContainer.appendChild(timeZone);
    menuContainer.className = 'menu-container';

    // const items = (n = 4) => {
    //   this.randomArray(howManyItems[`${n}`]).map((i) => {
    //     const item = document.createElement('div');
    //     item.className = `item-${size} blue`;
    //     gameArea.appendChild(item);
    //     if (i === 0) {
    //       item.className = `item-${size} item-zero`;
    //       item.textContent = ``;
    //     } else {
    //       item.textContent = `${i}`;
    //     }
    //     this.n = n;
    //     item.addEventListener('click', this.move.bind(this))

    //   })
    // };

    gameContainer.appendChild(gameArea)
    gameContainer.className = `game-container ${options[`${n}`]}-container`;
    gameArea.className = `game-area ${options[`${n}`]}-game-area`;
    root.appendChild(gameContainer);
    this.items(n, size);

    gameArea.addEventListener('mousedown', (e) => {
      if (e.target.className.includes('item-zero')) {
        return;
      };
      const clickZone = document.querySelector('.click-zone');
      const prevValue = parseInt(clickZone.textContent.split(':')[1].trim());
      const newValue = prevValue + 1;
      clickZone.textContent = `Clicks: ${newValue}`;
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
      // console.log(classListAr);
    })
  },

  init(arg) {

    if (this.key) {
      window.clearInterval(this.key);
    };
    this.key = false;
    this.delta = 0;
    this.timeOrigin = 0;
    this.gameAreaConstruct(arg);
    this.ifwin();
    const timeZone = document.querySelector('.time-zone');
    const gameArea = document.querySelector('.game-area');

    // const myFunc = () => {
    //   this.timeOrigin = this.timeOrigin === null ? new Date() : this.timeOrigin;
    //   const now = new Date();
    //   let t = new Date(now.valueOf() - this.timeOrigin.valueOf() + this.delta.valueOf());
    //   console.log(t);
    //   const h = t.getUTCHours() < 10 ? `0${t.getUTCHours()}` : `${t.getUTCHours()}`;
    //   const m = t.getMinutes() < 10 ? `0${t.getMinutes()}` : `${t.getMinutes()}`;
    //   const s = t.getSeconds() < 10 ? `0${t.getSeconds()}` : `${t.getSeconds()}`;
    //   const time = [h, m, s];
    //   timeZone.textContent = timeZone.textContent.split(':').map((i, index) => time[index]).join(':');
    // };

    // const fnTime = (e) => {
    //   if (e.target.className.includes('item-zero')) {
    //     return;
    //   };
    //   this.myFunc();
    //   console.log(this.timeOrigin)
    //   let id = window.setInterval(this.myFunc.bind(this), 1000);
    //   this.key = id;
    //   gameArea.removeEventListener('mousedown', fnTime);
    //   window.setTimeout(() => {
    //     window.clearInterval(id);
    //   }, 50000);
    // }

    gameArea.addEventListener('mousedown', this.fnTime.bind(this));

  },
}

window.addEventListener("DOMContentLoaded", function () {
  Gem.init(4);
});