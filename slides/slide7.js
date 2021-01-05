export default (number) => {
  const container = document.createElement('div');
  container.className = 'slide-container';

  const titleElement = document.createElement('div');
  const bodyElement = document.createElement('div');
  const footerElement = document.createElement('div');

  titleElement.className = 'slide-title slide7-title';
  bodyElement.className = 'slide-body';
  footerElement.className = 'slide-footer';

  titleElement.textContent = 'Flux';
  footerElement.textContent = `Slide: ${number}`;

  const bodyTop = document.createElement('div');
  const bodyMiddle = document.createElement('div');
  const bodyFooterFooter = document.createElement('div');

  bodyTop.className = 'slide7-body-top';
  bodyMiddle.className = 'slide7-body-middle';
  bodyFooterFooter.className = 'slide6-body-footer-footer';

  bodyElement.appendChild(bodyTop);
  bodyElement.appendChild(bodyMiddle);
  bodyElement.appendChild(bodyFooterFooter);


  bodyTop.textContent = "View update in Flux - unidirectional data flow";
  bodyFooterFooter.innerText = "Views do not modify the data they received. They listen for changes of this data, create actions with new values, but do not update the data. Stores, views and any other action can’t change the state in (other) stores directly. They must send an action through the dispatcher.";
  container.appendChild(titleElement);
  container.appendChild(bodyElement);
  container.appendChild(footerElement);

  return container;
}