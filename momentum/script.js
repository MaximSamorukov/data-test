// DOM Elements
const
  time = document.querySelector('.time'),
  greeting = document.querySelector('.greeting'),
  name = document.querySelector('.name'),
  focus = document.querySelector('.focus'),
  joke = document.querySelector('.joke'),
  change = document.querySelector('.changeImg'),
  weather = document.querySelector('.weather'),
  icon = document.querySelector('.weather-icon');

localStorage.setItem('currentImageBg', '01.jpg');

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
// click on weather icon

function clickOnicon() {
  getWeather();
}
// Get weather from OpenWeather
function getWeather() {
  const queryData = localStorage.getItem('weather');
  const options = {
    method: 'GET',
    url: 'https://api.openweathermap.org/data/2.5/weather',
    params: {
      q: queryData,
      appid: 'c789ee24c4cf31d66f1c1551735f9ab3',
      units: 'metric',
    },
  };

  axios.request(options).then(function (response) {
    const { name, wind, main, } = response.data;
    const { country } = response.data.sys;
    const { humidity, temp } = main;
    const { speed } = wind;
    const { status } = response;
    const tempString = String.fromCharCode(176) + 'C';
    const humString = `g/m<sup>3</sup>`;
    const windString = 'kph';
    if (status > 300) {
      throw new Error();
    }
    const apiResponse = `${country}, ${name}: ${temp} ${tempString}, ${humidity} ${humString}, ${speed} ${windString}`;
    localStorage.setItem('apiResponse', apiResponse);
    showWeather();
  }).catch(function (error) {
    localStorage.setItem('apiResponse', '[data Unavailable]');
    localStorage.setItem('weather', '');
    weather.textContent = '[data Unavailable]';
    const key = setTimeout(() => {
      showWeather();
    }, 2000);
    localStorage.setItem('keyToWeatherTimeout', key);
  });
}
//

// show weather
function showWeather() {
  if (localStorage.getItem('apiResponse') === null || localStorage.getItem('apiResponse') === '' || localStorage.getItem('apiResponse') === '[data Unavailable]') {
    weather.textContent = '[Input city name]';
  } else {
    let data = localStorage.getItem('apiResponse');
    weather.innerHTML = data;
  }
}

// set weather options
function setWeatherOptions(e) {
  const key = localStorage.getItem('keyToWeatherTimeout');
  if (e.which === 13 || e.keyCode === 13) {
    weather.blur();
  }
  if ((e.type === 'keypress' && (e.which !== 13 || e.keyCode !== 13))) {
    clearTimeout(key);
  };
  if ((e.type === 'keypress' && (e.which === 13 || e.keyCode === 13)) && (localStorage.getItem('apiResponse') !== null && localStorage.getItem('apiResponse') !== '[data Unavailable]')) {
    e.preventDefault();
    return;

  };
  if ((e.type === 'keypress' && (e.which === 13 || e.keyCode === 13)) || e.type === 'blur') {
    if (e.target.innerText.trim() === '') {
      if (localStorage.getItem('apiResponse') === null || localStorage.getItem('apiResponse') === '[data Unavailable]') {
        weather.textContent = '[Input city name]';
      } else {
        weather.innerHTML = localStorage.getItem('apiResponse');
      }
    } else {
      localStorage.setItem('weather', e.target.innerText.trim());
      getWeather();
    }
  }
}

// Show Time
function showTime() {
  let today = new Date(),
    month = `${new Intl.DateTimeFormat('en-US', { month: 'short' }).format(today)}.`,
    day = new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(today),
    date = today.getDate(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // Output Time
  time.innerHTML = `${date},<span> </span>${month}<span> </span>${day}.<br>${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
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
    localStorage.setItem('currentImageBg', image);
    return image;
  }

  const phrases = {
    morning: 'Good Morning, ',
    day: 'Good Afternoon, ',
    evening: 'Good Evening, ',
    night: 'Good Night, '
  };

  let phaseOfTheDay = 'night';
  let today = new Date(),
    hour = today.getHours();
  phaseOfTheDay = hour >= 6 ? hour >= 12 ? hour >= 18 ? 'evening' : 'day' : 'morning' : phaseOfTheDay;
  localStorage.setItem('phase', phaseOfTheDay);
  let greetingAccordingToThephase = phrases[phaseOfTheDay];
  greeting.textContent = greetingAccordingToThephase;

  const imgPath = (path) => `url(./assets/images/${phaseOfTheDay}/${path})`;

  function imgRotate() {
    document.body.style.backgroundImage = imgPath(imgChange(localStorage.getItem('currentImageBg')));
    if (arg !== 'once') {
      let key = setTimeout(imgRotate, 10000);
      localStorage.setItem('keyToImageRotate', key);
    }
  }
  imgRotate();
}

// image rotate on click
function imageRotateOnClick() {
  const keyOnClick = localStorage.getItem('keyOnClick');
  if (keyOnClick !== null) {
    clearTimeout(keyOnClick);
  }
  const key = localStorage.getItem('keyToImageRotate');
  clearTimeout(key);
  const paths = localStorage.getItem('imgPathsObj').split(',');
  const phase = localStorage.getItem('phase');
  const pathsLength = paths.length;
  const current = localStorage.getItem('current') === null ? localStorage.getItem('currentImageBg') : localStorage.getItem('current');
  const currentIndex = paths.indexOf(`${phase}-${current}`);
  const nextIndex = currentIndex === (pathsLength - 1) ? 0 : currentIndex + 1;
  const nextPath = paths[nextIndex];
  const nextFullPath = `url(./assets/images/${nextPath.split('-')[0]}/${nextPath.split('-')[1]}`
  document.body.style.backgroundImage = nextFullPath;
  localStorage.setItem('current', nextPath.split('-')[1]);
  const keyToChangeImageOnClick = setTimeout(() => {
    localStorage.removeItem('current')
    setBgGreet()();
  }, 5000)
  localStorage.setItem('keyOnClick', keyToChangeImageOnClick)
}
// get all img paths
function getImgPaths() {
  const array = ['night', 'morning', 'day', 'evening'];
  let imgPathsObj = [];
  array.map((item) => {
    for (let i = 1; i <= 20; i += 1) {
      const y = i < 10 ? `0${i}` : i;
      imgPathsObj.push(`${item}-${y}.jpg`);
    }
  });
  localStorage.setItem('imgPathsObj', imgPathsObj);
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
  if (e.target.textContent === '' && ((e.type === 'keydown' && (e.which == 13 || e.keyCode == 13)) || e.type === 'blur')) {
    if (localStorage.getItem('name') === null || localStorage.getItem('name').trim() === '') {
      e.target.innerText = '[Enter Name]';
    } else {
      e.target.innerText = localStorage.getItem('name').trim();
    }

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

// setNameOnClick
function setOnClick(e) {
  const text = e.target.textContent;
  e.target.textContent = '';
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
  if (e.target.textContent.trim() === '' && (e.type === 'keydown' && (e.which == 13 || e.keyCode == 13) || e.type === 'blur')) {
    if (localStorage.getItem('focus') === null || localStorage.getItem('focus').trim() === '') {
      e.target.innerText = '[Enter Focus]';
    } else {
      e.target.innerText = localStorage.getItem('focus').trim();
    }
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
name.addEventListener('click', setOnClick);
name.addEventListener('keydown', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('keydown', setFocus);
focus.addEventListener('blur', setFocus);
focus.addEventListener('click', setOnClick);
joke.addEventListener('click', getPhrase);
change.addEventListener('click', imageRotateOnClick);
weather.addEventListener('keypress', setWeatherOptions);
weather.addEventListener('blur', setWeatherOptions);
weather.addEventListener('click', setOnClick);
icon.addEventListener('click', clickOnicon);

// Run

showWeather();
getPhrase();
showTime();
setBgGreet()();
getName();
getFocus();
getImgPaths();