import './style.css';
import sound from './sound.wav';

const changeAnimation = require('./animation');
const getBestResults = require('./bestResults');

const Gem = {
  iftime: false,
  delta: 0,
  key: false,
  timeOrigin: 0,
  verdict: false,
  steps: 0,
  soundfile: '',
  sound: false,

  randomArray(n) {
    let array = [];
    for (let i = 0; i < n; i += 1) {
      array.push(i);
    }
    const returnArray = [];
    for (let ii = 0; ii < n; ii += 1) {
      const value = array[Math.floor(Math.random() * array.length)];
      array = array.filter((i) => i !== value);
      returnArray.push(value);
    }
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
    const t = new Date(now.valueOf() - this.timeOrigin.valueOf() + this.delta);
    const h = t.getUTCHours() < 10 ? `0${t.getUTCHours()}` : `${t.getUTCHours()}`;
    const m = t.getMinutes() < 10 ? `0${t.getMinutes()}` : `${t.getMinutes()}`;
    const s = t.getSeconds() < 10 ? `0${t.getSeconds()}` : `${t.getSeconds()}`;
    const time = [h, m, s];
    // console.log(time);
    timeZone.textContent = timeZone.textContent.split(':').map((i, index) => time[index]).join(':');
  },

  fnTime() {
    const gameArea = document.querySelector('.game-area');
    if (this.iftime === false) {
      return;
    }
    this.iftime = false;
    this.myFunc();
    // console.log(this.timeOrigin)
    if (this.key === false) {
      const id = window.setInterval(this.myFunc.bind(this), 1000);
      this.key = id;
    }

    gameArea.removeEventListener('mousedown', this.fnTime);
    // window.setTimeout(() => {
    //   window.clearInterval(this.key);
    // }, 50000);
  },

  canMove(e, l = 16) {
    // const current = e.target;
    const { children } = e.target.parentNode;
    const numArray = Array.from(children);
    let index = 0;
    // numArrayA
    numArray.map((element, ind) => {
      if (element.textContent === '') {
        index = ind + 1;
      }
      return (element.textContent);
    });
    const length = l ** 0.5;
    const indexRow = Math.ceil((index) / length);
    const indexColumn = (index % length) === 0 ? length : (index % length);
    // console.log(numArrayA);

    const getElement = ({ row, column }, array) => {
      const size = array.length ** 0.5;
      const ind = ((row - 1) * size) + (column - 1);
      const element = array[ind];
      return element;
    };

    const validator = (point, size) => {
      let values = Object.values(point);
      // const returnValue = '';
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
    const finalArray = [top, botton, right, left]
      .filter((i) => validator(i, l ** 0.5))
      .map((i) => getElement(i, children))
      .filter((i) => i === e.target);
    if (finalArray.length === 0) {
      return false;
    }
    return true;
  },

  move(e) {
    this.verdict = false;
    // console.log((this.canMove(e, this.n ** 2)));
    if ((this.canMove(e, this.n ** 2))) {
      this.steps += 1;
      this.iftime = true;
      // console.log(this.sound);
      if (this.sound) {
        this.soundfile.play();
      }
      const clickZoneNew = document.querySelector('.click-zone');
      clickZoneNew.textContent = `Clicks: ${this.steps}`;
      const element = e.target;
      const { children } = e.target.parentNode;
      const emptyItem = Array.from(children).filter((i) => i.textContent === '')[0];
      changeAnimation(e, emptyItem);
      // const text = element.textContent;
      element.textContent = '';
      // emptyItem.textContent = text;
      // element.classList.add('item-zero');
      // emptyItem.classList.remove('item-zero');
      // element.classList.remove('blue');
      // emptyItem.classList.add('blue');
      // console.log(emptyItem);
      // this.canMove(e);
    }
  },

  items(n = 4, size) {
    const howManyItems = {
      3: 9,
      4: 16,
      5: 25,
      6: 36,
      7: 49,
      8: 64,
    };
    const gameArea = document.querySelector('.game-area');
    this.randomArray(howManyItems[`${n}`]).map((i) => {
      const item = document.createElement('div');
      item.className = `item-${size} blue`;
      gameArea.appendChild(item);
      if (i === 0) {
        item.className = `item-${size} item-zero`;
        item.textContent = '';
      } else {
        item.textContent = `${i}`;
      }
      this.n = n;
      // item.addEventListener('click', this.move.bind(this));
      item.addEventListener('mousedown', (e) => {
        // console.log(e);
        this.move(e);
        if (this.verdict === false) {
          // return;
        }
        // const itemM = e.target;
        // itemM.className = `item-${size} item-zero`;
      });
      item.addEventListener('mouseup', () => {
        if (this.verdict === false) {
          // return;
        }
        this.verdict = false;
        // const itemN = e.target;
        // itemN.className = `item-${size} blue`;
      });
      return i;
    });
  },

  createItemsOnLoad(str) {
    const n = str.split(':').length ** 0.5;
    const size = Math.floor((25 / n) * 10);
    // const howManyItems = {
    //   3: 9,
    //   4: 16,
    //   8: 64,
    // };
    const gameArea = document.querySelector('.game-area');
    str.split(':').map((i) => {
      const item = document.createElement('div');
      item.className = `item-${size} blue`;
      // console.log(item);
      gameArea.appendChild(item);
      if (i === '') {
        item.className = `item-${size} item-zero`;
        item.textContent = '';
      } else {
        item.textContent = `${i}`;
      }
      this.n = n;
      // item.addEventListener('click', this.move.bind(this));
      item.addEventListener('mousedown', (e) => {
        this.move(e);
        // if (this.verdict === false) {
        //   return;
        // }
        // const itemN = e.target;
        // itemN.className = `item-${size} item-zero`;
      });
      item.addEventListener('mouseup', () => {
        // console.log(this.verdict);
        // if (this.verdict === false) {
        //   return;
        // }
        // this.verdict = false;
        // const itemNew = e.target;
        // itemNew.className = `item-${size} blue`;
      });
      return i;
    });
  },

  makeSelected(par, n) {
    const a = par;
    const ob = {
      3: 0,
      4: 1,
      5: 2,
      6: 3,
      7: 4,
      8: 5,
    };

    // let index = 1;
    // if (n === 3) {
    //   index = 0;
    // }
    // if (n === 8) {
    //   index = 2;
    // }
    // // const index = n === 3 ? 0 : n === 8 ? 2 : 1;
    a[ob[n]].selected = true;
  },

  gameAreaConstruct(n) {
    const size = Math.floor((25 / n) * 10);
    const options = {
      3: 'three-on-three',
      4: 'four-on-four',
      5: 'five-on-five',
      6: 'six-on-six',
      7: 'seven-on-seven',
      8: 'eight-on-eight',
    };

    // const howManyItems = {
    //   3: 9,
    //   4: 16,
    //   8: 64,
    // };

    const root = document.body;
    const gameContainer = document.createElement('div');
    const gameArea = document.createElement('div');
    const menuContainer = document.createElement('div');
    const firstLineMenu = document.createElement('div');
    const secondLineMenu = document.createElement('div');
    const thirdLineMenu = document.createElement('div');
    firstLineMenu.className = 'fst-line-menu line-menu';
    secondLineMenu.className = 'scnd-line-menu line-menu';
    thirdLineMenu.className = 'thrd-line-menu line-menu';
    const select = document.createElement('select');
    const option3on3 = document.createElement('option');
    const option4on4 = document.createElement('option');
    const option5on5 = document.createElement('option');
    const option6on6 = document.createElement('option');
    const option7on7 = document.createElement('option');
    const option8on8 = document.createElement('option');
    const saveBtn = document.createElement('button');
    saveBtn.name = 'save-btn';
    saveBtn.textContent = 'Save';
    saveBtn.className = 'save-btn';
    saveBtn.addEventListener('click', () => {
      const gameAreaNew = document.querySelector('.game-area');
      const gameAreaChildren = gameAreaNew.childNodes;
      const clicks = this.steps;
      // const clicks = document.querySelector('.click-zone').textContent.split(':')[1].trim();
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
    loadBtn.textContent = 'Load';
    loadBtn.className = 'load-btn';

    loadBtn.addEventListener('click', () => {
      // console.log(window);
      this.steps = 0;
      window.clearInterval(this.key);
      this.key = false;
      const storage = window.localStorage;
      const data = storage.getItem('data');
      const [clicks, time, items] = data.split(';');
      // console.log(clicks);
      // console.log(time);
      // console.log(items);
      function fn(acc, i, index) {
        if (index === 0) {
          const hValue = i * 60 * 60 * 1000;
          return acc + hValue;
        }
        if (index === 1) {
          const mValue = i * 60 * 1000;
          return acc + mValue;
        }
        if (index === 2) {
          const sValue = i * 1000;
          return acc + sValue;
        }
        return i;
      }
      const date = new Date(time.split(':').map((i) => parseInt(i, 10)).reduce(fn, 0));
      // console.log(date);
      this.delta = date.valueOf();
      // console.log(this.delta);
      this.steps = parseInt(clicks, 10);
      this.timeOrigin = 0;
      const clickszone = document.querySelector('.click-zone');
      const timezone = document.querySelector('.time-zone');
      timezone.textContent = time;
      clickszone.textContent = `Clicks: ${clicks}`;
      const gameAreaNew = document.querySelector('.game-area');
      gameAreaNew.innerHTML = '';
      this.createItemsOnLoad(items);
      this.makeSelected(select, items.split(':').length ** 0.5);
      gameAreaNew.addEventListener('mousedown', this.fnTime.bind(this));
    });
    const btn = document.createElement('button');
    btn.type = 'submit';
    btn.name = 'select-btn';
    btn.textContent = 'New game';
    btn.className = 'select-btn';
    btn.addEventListener('click', (e) => {
      const value = parseInt(e.target.parentNode.children[0].value[0], 10);
      // console.log(root);
      root.removeChild(gameContainer);
      this.init(value);
    });

    const soundOnOff = document.createElement('button');
    soundOnOff.type = 'submit';
    soundOnOff.name = 'sound-btn';
    soundOnOff.textContent = 'sound on / off';
    soundOnOff.className = 'sound-btn-off';
    soundOnOff.addEventListener('click', () => {
      this.sound = !this.sound;
      // console.log(this.sound);
      const str = this.sound ? 'on' : 'off';
      soundOnOff.className = `sound-btn-${str}`;
    });

    const autoEnd = document.createElement('button');
    autoEnd.type = 'submit';
    autoEnd.name = 'end-btn';
    autoEnd.textContent = 'Accomplished';
    autoEnd.className = 'auto-end';
    autoEnd.addEventListener('click', (e) => {
      console.log(e);
    });

    option3on3.textContent = '3 x 3';
    option4on4.textContent = '4 x 4';
    option5on5.textContent = '5 x 5';
    option6on6.textContent = '6 x 6';
    option7on7.textContent = '7 x 7';
    option8on8.textContent = '8 x 8';
    select.name = 'gameOptions';
    option3on3.value = '3 x 3';
    option4on4.value = '4 x 4';
    option5on5.value = '5 x 5';
    option6on6.value = '6 x 6';
    option7on7.value = '7 x 7';
    option8on8.value = '8 x 8';
    select.appendChild(option3on3);
    select.appendChild(option4on4);
    select.appendChild(option5on5);
    select.appendChild(option6on6);
    select.appendChild(option7on7);
    select.appendChild(option8on8);
    this.makeSelected(select, n);
    const clickZone = document.createElement('div');
    clickZone.textContent = 'Clicks: 0';
    clickZone.className = 'click-zone';
    const timeZone = document.createElement('div');
    timeZone.className = 'time-zone';
    timeZone.textContent = '00:00:00';

    const bestBtn = document.createElement('div');
    bestBtn.className = 'best';
    bestBtn.addEventListener('click', this.getBest.bind(this));
    bestBtn.textContent = 'Show best results';

    const winBtn = document.createElement('div');
    winBtn.className = 'win';
    winBtn.addEventListener('click', this.ifwin.bind(this));
    winBtn.textContent = 'Win';

    gameContainer.appendChild(menuContainer);

    firstLineMenu.appendChild(select);
    firstLineMenu.appendChild(btn);
    firstLineMenu.appendChild(saveBtn);
    firstLineMenu.appendChild(loadBtn);

    thirdLineMenu.appendChild(clickZone);
    thirdLineMenu.appendChild(timeZone);
    thirdLineMenu.appendChild(bestBtn);

    secondLineMenu.appendChild(soundOnOff);
    secondLineMenu.appendChild(autoEnd);

    menuContainer.appendChild(firstLineMenu);
    menuContainer.appendChild(secondLineMenu);
    menuContainer.appendChild(thirdLineMenu);
    // menuContainer.appendChild(select);
    // menuContainer.appendChild(btn);
    // menuContainer.appendChild(saveBtn);
    // menuContainer.appendChild(loadBtn);
    // menuContainer.appendChild(clickZone);
    // menuContainer.appendChild(timeZone);
    // menuContainer.appendChild(winBtn);
    // menuContainer.appendChild(bestBtn);
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

    gameContainer.appendChild(gameArea);
    gameContainer.className = `game-container ${options[`${n}`]}-container`;
    gameArea.className = `game-area ${options[`${n}`]}-game-area`;
    root.appendChild(gameContainer);
    this.items(n, size);

  //   gameArea.addEventListener('mousedown', (e) => {
  //     // if (e.target.className.includes('item-zero')) {
  //     //   return;
  //     // }
  //     // console.log(this.steps);
  //     // const clickZoneNew = document.querySelector('.click-zone');
  //     // clickZoneNew.textContent = `Clicks: ${this.steps}`;
  //     // const prevValue = parseInt(clickZoneNew.textContent.split(':')[1].trim(), 10);
  //     // const newValue = prevValue + 1;
  //   // });
  //   // console.log(gameArea);
  },
  getBest() {
    getBestResults();
  },

  ifwin() {
    const clicks = this.steps;
    const time = document.querySelector('.time-zone').textContent;
    const obj = { time, clicks };
    const storage = window.localStorage;
    let results = JSON.parse(storage.getItem('results'));
    results.push(obj);
    results.sort((a, b) => a.clicks - b.clicks);
    results = results.slice(0, 10);
    const objj = JSON.stringify(results);
    storage.setItem('results', objj);
  },

  init(arg) {
    if (this.key) {
      window.clearInterval(this.key);
    }
    this.key = false;
    this.soundfile = new Audio(sound);
    this.delta = 0;
    this.timeOrigin = 0;
    this.steps = 0;
    this.gameAreaConstruct(arg);
    const st = window.localStorage;
    if (!st.getItem('results')) {
      st.setItem('results', JSON.stringify([]));
    }
    // this.ifwin();
    // const timeZone = document.querySelector('.time-zone');
    const gameArea = document.querySelector('.game-area');
    gameArea.addEventListener('mousedown', this.fnTime.bind(this));
  },
};

window.addEventListener('DOMContentLoaded', () => {
  Gem.init(4);
});
