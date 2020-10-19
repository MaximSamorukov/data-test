// DOM Elements
const
  time = document.querySelector('.time'),
  greeting = document.querySelector('.greeting'),
  name = document.querySelector('.name'),
  focus = document.querySelector('.focus'),
  joke = document.querySelector('.joke'),
  change = document.querySelector('.changeImg');
let currentImage = '01.jpg';
// Show Phrase
function getPhrase() {
  axios.get('https://geek-jokes.sameerkumar.website/api')
    .then(({ data }) => {
      joke.innerHTML = data;
    })
    .catch(() => {
      joke.innerHTML = "I'll get it as soon as possible.";
    })
  setTimeout(getPhrase, 100000);
}

// Show Time
function showTime() {
  let today = new Date(),
    month = `${new Intl.DateTimeFormat('en-US', { month: 'short' }).format(today.getMonth())}.`,
    day = new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(today.getDay()),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();



  // Output Time
  time.innerHTML = `${month}<span> </span>${day}.<br>${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )}`;

  setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
const setBgGreet = (arg = 'notOnce') => () => {

  const imgChange = (cur) => {
    let curImage = cur.split('.')[0];
    let array = new Array(20).fill(0).map((i, index) => {
      return (index + 1) < 10 ? `0${index + 1}` : `${index + 1}`;
    });
    const nextIndex = array.indexOf(curImage) === 19 ? 0 : array.indexOf(curImage) + 1;
    image = `${array[nextIndex]}.jpg`;
    currentImage = image;
    return image;
  }

  const phrases = {
    morning: 'Good Morning, ',
    day: 'Good Afternoon, ',
    evening: 'Good Evening, ',
    night: 'Good Night, '
  };

  let phaseOfTheDay = 'nigth';
  let today = new Date(),
    hour = today.getHours();
  phaseOfTheDay = hour >= 6 ? hour >= 12 ? hour >= 18 ? 'evening' : 'day' : 'morning' : phaseOfTheDay;
  let greetingAccordingToThephase = phrases[phaseOfTheDay];
  greeting.textContent = greetingAccordingToThephase;

  const imgPath = (path) => `url(./assets/images/${phaseOfTheDay}/${path})`;

  function imgRotate() {
    document.body.style.backgroundImage = imgPath(imgChange(currentImage));
    if (arg !== 'once') {
      setTimeout(imgRotate, 5000);
    }
  }
  imgRotate();
}

// Get Name
function getName() {
  if (localStorage.getItem('name') === null || localStorage.getItem('name') === '') {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// Set Name
function setName(e) {
  // console.log(e);
  if (e.target.textContent === '' && (e.type === 'keydown' || e.type === 'blur')) {
    e.target.innerText = '[Enter Name]';
  }
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      if (e.target.innerText.trim() === '') {
        localStorage.setItem('name', '[Enter Name]');
      } else {
        localStorage.setItem('name', e.target.innerText);
      }
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

// Set Focus
function setFocus(e) {
  if (e.target.textContent === '' && (e.type === 'keydown' || e.type === 'blur')) {
    e.target.innerText = '[Enter Focus]';
  }
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      if (e.target.innerText.trim() === '') {
        localStorage.setItem('focus', '[Enter Focus]');
      } else {
        localStorage.setItem('focus', e.target.innerText);
      }
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('keydown', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('keydown', setFocus);
focus.addEventListener('blur', setFocus);
joke.addEventListener('click', getPhrase);
change.addEventListener('click', setBgGreet('once'));




// Run
getPhrase();
showTime();
setBgGreet()();
getName();
getFocus();