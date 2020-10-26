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
const cardsArray = Object.keys(cards).map((i) => cards[i]);


cardsArray.map((i, index) => {
    const image = i.children[0].children[0];
    const name = i.children[0].children[1];
    name.textContent = petsArray[index].name;
    image.innerHTML = `<img src=${petsArray[index].img} alt=${petsArray[index].name}>`


})



function func(e) {
    const name = (e.path[2].children[0].children[1].textContent);
    const info = petsArray.filter((i) => i.name === name)[0];
    let popUpDivClass = popup.classList;
    const popupChildren = Object.keys(popup.children).map((i) => popup.children[i]);
    popupChildren.map((i) => {
        i.textContent = info[i.classList.value];
        // console.log(i.classList.value);
    })
    popUpDivClass.toggle(`popup`);
    console.log(popupChildren);
}

Object.keys(btn).map((i) => btn[i]).map((ii) => {
    ii.addEventListener('click', func);
    // console.log(ii);
})

