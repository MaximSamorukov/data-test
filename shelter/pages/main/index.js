document.querySelector('.burger-wrapper').onclick = function () {
    document.querySelector('.burger').classList.toggle('burger-active');
    document.querySelector('.nav-mobile').classList.toggle('nav-mobile-active');
};
const rightArrow = document.querySelector('.right-arrow');
const leftArrow = document.querySelector('.left-arrow');

const cardsArray = document.querySelectorAll('.card-wrapper');
// console.log(cardsArray);
// console.log(window.screen.width);
let sizeGroup = 3;
const setCurrentSizeGroup = (width) => {
    if (width >= 1280) {
        sizeGroup = 3;
    }
    if (width < 1280) {
        sizeGroup = 2;
    }
    if (width < 768) {
        sizeGroup = 1;
    }
}
const getActiveCards = (width) => {
    const arr = document.querySelectorAll('.card-wrapper');

    let returnValue = arr;
    if (width < 1280) {
        returnValue = [arr[0], arr[1]];
    }
    if (width < 768) {
        returnValue = [arr[0]];
    }

    return returnValue;

}

function createRoot() {
    const arr = [];
    let ii = 0;
    let newArr = Array.from('01234567').map((i, index) => index);
    // console.log(newArr);
    const num = (number) => (Math.floor(Math.random() * number));
    for (let r = 0; r < 50; r += 1) {
        let n = num(newArr.length);
        if (!arr.includes(n)) {
            arr.push(n);
            newArr.filter((i) => i !== n);
        }
    }

    localStorage.setItem('root', arr);
}
// createRoot();
function showCards() {
    const wSize = window.screen.width;
    // console.log(window.screen.width);
    const activeCardsOld = getActiveCards(wSize);
    // console.log(activeCards);
    // console.log(activeCards instanceof Object);
    const activeCards = Object.keys(activeCardsOld).map((i) => activeCardsOld[i]);
    setCurrentSizeGroup(wSize);
    let now = localStorage.getItem('now').split(',').filter((i) => i !== '');
    let left = localStorage.getItem('left').split(',').filter((i) => i !== '');
    let right = localStorage.getItem('right').split(',').filter((i) => i !== '');
    activeCards.map(({ children }, index) => {
        // console.log(children);
        const image = children[0];
        const name = children[1];
        name.innerText = petsArray[[now[index]]].name;
        image.innerHTML = `<img src=${petsArray[now[index]].img} alt=${petsArray[now[index]].name}>`
        // console.log(petsArray[arrayOfPets[index]]);
        // if (!image.classList.value.includes('jennifer')) {
        //     image.classList += ' jennifer';
        // }
    })

    // if (sizeGroup !== now.length) {
    //     console.log('Error')
    // } else {
    //     console.log('Bonito Flakes!!')
    // }
}

function onWindowLoad(e) {
    createRoot();
    makeOrder('onload');
    const wSize = window.screen.width;
    // console.log(window.screen.width);
    const activeCardsOld = getActiveCards(wSize);
    // console.log(activeCards);
    // console.log(activeCards instanceof Object);
    const activeCards = Object.keys(activeCardsOld).map((i) => activeCardsOld[i]);
    setCurrentSizeGroup(wSize);
    const arrayOfPets = localStorage.getItem('root').split(',').map((i) => parseInt(i, 10));
    // console.log(arrayOfPets);
    activeCards.map(({ children }, index) => {
        // console.log(children);
        const image = children[0];
        const name = children[1];
        name.innerText = petsArray[[arrayOfPets[index]]].name;
        image.innerHTML = `<img src=${petsArray[arrayOfPets[index]].img} alt=${petsArray[arrayOfPets[index]].name}>`
        // console.log(petsArray[arrayOfPets[index]]);
        // if (!image.classList.value.includes('jennifer')) {
        //     image.classList += ' jennifer';
        // }
    })


}

function makeOrder(type, number) {
    const pets = localStorage.getItem('root').split(',');
    if (type = 'onload') {
        const now = pets.slice(0, sizeGroup);
        const left = [];
        const right = pets.slice(sizeGroup, pets.length);
        localStorage.setItem('now', now);
        localStorage.setItem('left', left);
        localStorage.setItem('right', right);
    }
}

function screenResize(e) {
    let sGr = 3;
    const wSize = e.target.screen.width;
    sGr = wSize < 1280 ? wSize < 768 ? 1 : 2 : sGr;
    if (sGr !== sizeGroup) {
        setCurrentSizeGroup(e.target.screen.width);
        const activeCards = getActiveCards(wSize);
        // console.log(activeCards);
        activeCards.map(({ children }) => {
            // console.log(children);
            const image = children[0];
            const name = children[1];
            // console.log(image.classList);
            if (!image.classList.value.includes('jennifer')) {
                image.classList += ' jennifer';
            }
        })
    }
    // console.log(e.target.screen.width);
}

function rightArrowClick(e) {
    console.log(`right ${e.type}`);
    const root = localStorage.getItem('root');
    let now = localStorage.getItem('now').split(',').filter((i) => i !== '');
    let left = localStorage.getItem('left').split(',').filter((i) => i !== '');
    let right = localStorage.getItem('right').split(',').filter((i) => i !== '');
    if (right.length <= sizeGroup) {
        right.push(left.reverse());
        right = right.flat();
        left = [];
        // right = right.reduce((acc, i, arr) => {
        //     if (!acc.includes(i)) {
        //         acc.push(i);
        //     }
        // }, right || []);
    }
    console.log('====');
    console.log(left);
    console.log(now);
    console.log(right);
    console.log('====');
    right = right.filter((i) => !now.includes(i));
    left.unshift(now);
    left = left.flat();
    now = right.slice(0, sizeGroup);
    right = right.slice(sizeGroup, right.length)
    console.log('====');
    console.log(left);
    console.log(now);
    console.log(right);
    console.log('====');
    // console.log(sizeGroup);
    localStorage.setItem('now', now);
    localStorage.setItem('left', left);
    localStorage.setItem('right', right);
    showCards();
}

function leftArrowClick(e) {
    console.log(`left ${e.type}`);
    const root = localStorage.getItem('root');
    let now = localStorage.getItem('now').split(',').filter((i) => i !== '');
    let left = localStorage.getItem('left').split(',').filter((i) => i !== '');
    let right = localStorage.getItem('right').split(',').filter((i) => i !== '');
    if (left.length < sizeGroup) {
        left.push(right.reverse());
        left = left.flat();
        right = [];
    }
    // console.log('====');
    // console.log(left);
    // console.log(now);
    // console.log(right);
    // console.log('====');
    left = left.filter((i) => !now.includes(i));
    right.unshift(now);
    right = right.flat();
    now = left.slice(0, sizeGroup);
    left = left.slice(sizeGroup, left.length)
    // console.log('====');
    // console.log(left);
    // console.log(now);
    // console.log(right);
    // console.log('====');
    // console.log(sizeGroup);
    localStorage.setItem('now', now);
    localStorage.setItem('left', left);
    localStorage.setItem('right', right);
    showCards();
}


// window.onload = createRoot;
window.onresize = screenResize;
window.onload = onWindowLoad;
rightArrow.addEventListener('click', rightArrowClick);
leftArrow.addEventListener('click', leftArrowClick);