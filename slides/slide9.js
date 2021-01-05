export default (number) => {
  const container = document.createElement('div');
  container.className = 'slide-container';

  const titleElement = document.createElement('div');
  const bodyElement = document.createElement('div');
  const footerElement = document.createElement('div');

  titleElement.className = 'slide-title slide9-title';
  bodyElement.className = 'slide-body';
  footerElement.className = 'slide-footer';

  titleElement.innerText = 'Flux. Conclusion.';
  footerElement.textContent = `Slide: ${number}`;

  const bodyTop = document.createElement('div');
  const bodyMiddle = document.createElement('div');
  const bodyFooter = document.createElement('div');
  const bodyFooterFooter = document.createElement('div');

  bodyTop.className = 'slide9-body-top';
  bodyMiddle.className = 'slide9-body-middle';
  bodyFooter.className = 'slide9-body-footer';
  bodyFooterFooter.className = 'slide9-body-footer-footer';

  bodyElement.appendChild(bodyTop);
  bodyElement.appendChild(bodyMiddle);
  bodyElement.appendChild(bodyFooter);
  bodyElement.appendChild(bodyFooterFooter);


  bodyTop.textContent = "Pros";
  bodyMiddle.textContent = "Flux architecture is better in an application where views don’t map directly to domain stores. To put in a different way, when views can create actions that will update many stores and stores can trigger changes that will update many views. Actions can be persisted and then replayed.";
  bodyFooter.innerText = "Cons";
  bodyFooterFooter.innerText = "Flux can add unnecessary complexity to an application where each view maps to one store. In this kind of application a separation between view and store is enough.";
  container.appendChild(titleElement);
  container.appendChild(bodyElement);
  container.appendChild(footerElement);

  return container;
}