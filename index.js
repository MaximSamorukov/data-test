import Reveal from './node_modules/reveal.js';
import Markdown from "./node_modules/reveal.js/plugin/markdown/markdown.esm.js";
import './style.css';
import slide1 from './slides/slide1';
import slide2 from './slides/slide2';
import slide3 from './slides/slide3';
import slide4 from './slides/slide4';
import slide5 from './slides/slide5';
import slide6 from './slides/slide6';
import slide7 from './slides/slide7';
import slide8 from './slides/slide8';
import slide9 from './slides/slide9';
import slide10 from './slides/slide10';
import slide11 from './slides/slide11';
import slide12 from './slides/slide12';

let deck = new Reveal({
  plugins: [Markdown]
})
deck.initialize();

const slidesContainer = document.querySelector('.slides');
const slides = slidesContainer.children;

const section1 = document.querySelector('.slide_1');
const section2 = document.querySelector('.slide_2');
const section3 = document.querySelector('.slide_3');
const section4 = document.querySelector('.slide_4');
const section5 = document.querySelector('.slide_5');
const section6 = document.querySelector('.slide_6');
const section7 = document.querySelector('.slide_7');
const section8 = document.querySelector('.slide_8');
const section9 = document.querySelector('.slide_9');
const section10 = document.querySelector('.slide_10');
const section11 = document.querySelector('.slide_11');
const section12 = document.querySelector('.slide_12');


section1.appendChild(slide1(1));
section2.appendChild(slide2(2));
section3.appendChild(slide3(3));
section4.appendChild(slide4(4));
section5.appendChild(slide5(5));
section6.appendChild(slide6(6));
section7.appendChild(slide7(7));
section8.appendChild(slide8(8));
section9.appendChild(slide9(9));
section10.appendChild(slide10(10));
section11.appendChild(slide11(11));
section12.appendChild(slide12(12));

