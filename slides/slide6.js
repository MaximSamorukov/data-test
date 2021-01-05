export default (number) => {
  const container = document.createElement('div');
  container.className = 'slide-container';

  const titleElement = document.createElement('div');
  const bodyElement = document.createElement('div');
  const footerElement = document.createElement('div');

  titleElement.className = 'slide-title slide6-title';
  bodyElement.className = 'slide-body';
  footerElement.className = 'slide-footer';

  titleElement.innerText = 'Flux';
  footerElement.textContent = `Slide: ${number}`;

  const bodyTop = document.createElement('div');
  const bodyMiddle = document.createElement('div');
  const bodyFooter = document.createElement('div');
  const bodyFooterFooter = document.createElement('div');

  bodyTop.className = 'slide6-body-top';
  bodyMiddle.className = 'slide6-body-middle';
  bodyFooter.className = 'slide6-body-footer';
  bodyFooterFooter.className = 'slide6-body-footer-footer';

  bodyElement.appendChild(bodyTop);
  bodyElement.appendChild(bodyMiddle);
  bodyElement.appendChild(bodyFooter);
  bodyElement.appendChild(bodyFooterFooter);


  bodyTop.textContent = "State management in FLUX.";
  bodyMiddle.textContent = "Flux is an architectural pattern proposed by Facebook for building SPAs. It suggests to split the application into the following parts:"
  bodyFooter.innerText = "- Stores;\n- Dispatcher;\n- Views;\n- Action / Action Creators.";
  container.appendChild(titleElement);
  container.appendChild(bodyElement);
  container.appendChild(footerElement);

  return container;
}