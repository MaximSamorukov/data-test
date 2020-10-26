document.querySelector('.burger-wrapper').onclick = function () {
    document.querySelector('.burger').classList.toggle('burger-active');
    document.querySelector('.nav-mobile').classList.toggle('nav-mobile-active');
}

const cardsWrapper = document.querySelector('.cards-wrapper');
const cards = document.querySelector('.cards').children;
const next = document.querySelector('.page-next');
const nextNext = document.querySelector('.page-next-next');
const back = document.querySelector('.page-back');
const backBack = document.querySelector('.page-back-back');
const currentNumber = document.querySelector('.page-current');
const btn = document.querySelectorAll('.card-btn');
const popup = document.querySelector('.pap');
const popupContainer = document.querySelector('.pap-container');
const cardsArray = Object.keys(cards).map((i) => cards[i]);


cardsArray.map((i, index) => {
    const image = i.children[0].children[0];
    const name = i.children[0].children[1];
    name.textContent = petsArray[index].name;
    image.innerHTML = `<img src=${petsArray[index].img} alt=${petsArray[index].name}>`;


})
function firstLetterUpperCase(str) {
    return str.split('').map((i, index) => {
        if (index === 0) {
            return i.toUpperCase();
        }
        return i;
    }).join('');
}


function func(e) {
    let popUpDivClass = popup.classList;
    if (e.target.classList.value.includes('pap-container') || e.target.classList.value.includes('pap')) {
        popupContainer.classList.toggle('popup-container-active');
        popUpDivClass.toggle(`popup`);
        return;
    }
    const name = (e.path[2].children[0].children[1].textContent);
    const info = petsArray.filter((i) => i.name === name)[0];
    const popupChildren = Object.keys(popup.children[1].children).map((i) => popup.children[1].children[i]);
    popupChildren.map((i) => {
        console.log(info.breed);
        if (i.classList.value === 'type') {
            const s = `${info[i.classList.value]} - ${info.breed}`;
            console.log(s);
            i.textContent = s;
        }
        else if (i.classList.value === 'age' || i.classList.value === 'inoculations' || i.classList.value === 'diseases' || i.classList.value === 'parasites') {
            i.innerHTML = `<b>${firstLetterUpperCase(i.classList.value)}:</b> ${info[i.classList.value]}`;
        } else {
            i.textContent = info[i.classList.value];
        }
        // console.log(i.classList.value);
    })
    popup.children[0].innerHTML = `<img src=${info.img} alt=${info.name}>`
    popupContainer.classList.toggle('popup-container-active');
    popUpDivClass.toggle(`popup`);
    // console.log(popupChildren);
}

popupContainer.addEventListener('click', func);

Object.keys(btn).map((i) => btn[i]).map((ii) => {
    ii.addEventListener('click', func);
    // console.log(ii);
})

