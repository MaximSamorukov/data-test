document.querySelector('.burger-wrapper').onclick = function () {
    document.querySelector('.burger').classList.toggle('burger-active');
    document.querySelector('.nav-mobile').classList.toggle('nav-mobile-active');
};

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
function onWindowLoad(e) {
    const wSize = window.screen.width;
    console.log(window.screen.width);
    const activeCards = getActiveCards(wSize);
    // console.log(activeCards);
    setCurrentSizeGroup(wSize);
}


function screenResize(e) {
    let sGr = 3;
    const wSize = e.target.screen.width;
    sGr = wSize < 1280 ? wSize < 768 ? 1 : 2 : sGr;
    if (sGr !== sizeGroup) {
        setCurrentSizeGroup(e.target.screen.width);
        const activeCards = getActiveCards(wSize);
        console.log(activeCards);
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

window.onresize = screenResize;
window.onload = onWindowLoad;