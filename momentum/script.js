// DOM Elements
const
  time = document.querySelector('.time'),
  greeting = document.querySelector('.greeting'),
  name = document.querySelector('.name'),
  focus = document.querySelector('.focus'),
  joke = document.querySelector('.joke'),
  change = document.querySelector('.changeImg'),
  weather = document.querySelector('.weather');

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

// Show Wheather
function getWeather() {
  const queryData = localStorage.getItem('weather');
  const options = {
    method: 'GET',
    url: 'http://api.weatherapi.com/v1/current.json?key=ed1d44b5c91c4c268ec191324201910',
    params: { q: queryData },
  };

  axios.request(options).then(function (response) {
    const { country, name } = response.data.location;
    const { temp_c, humidity, wind_kph } = response.data.current;
    const { status } = response;
    const tempString = String.fromCharCode(176) + 'C';
    const humString = `g/m<sup>3</sup>`;
    const windString = 'kph';
    if (status > 300) {
      throw new Error();
    }
    const apiResponse = `${country}, ${name}: ${temp_c} ${tempString}, ${humidity} ${humString}, ${wind_kph} ${windString}`;
    localStorage.setItem('apiResponse', apiResponse);
    showWeather(apiResponse);
  }).catch(function (error) {
    localStorage.setItem('apiResponse', '[data Unavailable]');
    localStorage.setItem('weather', '');
    showWeather('[data Unavailable]');
  });
  const key = setTimeout(getWeather, 50000);
  localStorage.setItem('keyToWeatherTimeout', key);
}


// show weather
function showWeather(str = '') {
  if (str !== '') {
    weather.innerHTML = str;
  } else {
    if (localStorage.getItem('weather') === null || localStorage.getItem('weather') === '') {
      weather.innerHTML = '[Input city name]';
    } else {
      let data = localStorage.getItem('weather');
      weather.innerHTML = data;
    }

  }
}
// set weather options
function setWeatherOptions(e) {
  const key = localStorage.getItem('key');
  if (e.target.textContent.trim() === '' && (e.type === 'keydown' && (e.which == 13 || e.keyCode == 13) || e.type === 'blur')) {
    e.target.innerText = '[Input city name]';
  }
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      if (e.target.innerText.trim() === '') {
        localStorage.setItem('weather', '');
        weather.innerText = '[Input city name]';
      } else {
        localStorage.setItem('weather', e.target.innerText);
        clearTimeout('keyToWeatherTimeout');
        getWeather();
      }
      weather.blur();
    }
  }
  if (e.type === 'blur' && e.target.textContent.trim() !== '') {
    localStorage.setItem('weather', e.target.innerText);
    clearTimeout('keyToWeatherTimeout');
    getWeather();
  }
  else {
    localStorage.setItem('weather', e.target.innerText);
  }
}
// Show Time
function showTime() {
  let today = new Date(),
    month = `${new Intl.DateTimeFormat('en-US', { month: 'short' }).format(today)}.`,
    day = new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(today),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();
  console.log(Intl.DateTimeFormat('en-US', { month: 'short' }).format(today));


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
    localStorage.setItem('currentImageBg', image);
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
    document.body.style.backgroundImage = imgPath(imgChange(localStorage.getItem('currentImageBg')));
    if (arg !== 'once') {
      let key = setTimeout(imgRotate, 10000);
      localStorage.setItem('keyToImageRotate', key);
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
  const text = e.target.innerText;
  e.target.innerText = '';
  if (e.target.className.includes('weather')) {
    clearTimeout(localStorage.getItem('key'));
  };
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
change.addEventListener('click', setBgGreet('once'));
weather.addEventListener('keypress', setWeatherOptions);
weather.addEventListener('keydown', setWeatherOptions);
weather.addEventListener('blur', setWeatherOptions);
weather.addEventListener('click', setOnClick);
// Run
getWeather();
showWeather();
getPhrase();
showTime();
setBgGreet()();
getName();
getFocus();