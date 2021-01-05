export default (number) => {
  const container = document.createElement('div');
  container.className = 'slide-container';

  const titleElement = document.createElement('div');
  const bodyElement = document.createElement('div');
  const footerElement = document.createElement('div');

  titleElement.className = 'slide-title slide4-title';
  bodyElement.className = 'slide-body';
  footerElement.className = 'slide-footer';

  footerElement.textContent = `Slide: ${number}`;

  const bodyTop = document.createElement('div');
  const bodyFooter = document.createElement('div');
  const bodyFooterFooter = document.createElement('div');

  bodyTop.className = 'slide4-body-top';
  bodyFooter.className = 'slide4-body-footer';
  bodyFooterFooter.className = 'slide4-body-footer-footer';

  bodyElement.appendChild(bodyTop);
  bodyElement.appendChild(bodyFooter);
  bodyElement.appendChild(bodyFooterFooter);

  titleElement.textContent = "What happens when state changes?"
  bodyTop.textContent = "...img of how state change triggers local DOM rerender...";
  bodyFooter.textContent = "2 Important points in state management in pure React";
  bodyFooterFooter.innerText = "- State shouldn’t be modified directly – the `setState()` should be used;\n  - State affects the performance of the app, and therefore it shouldn’t be used unnecessarily.";
  container.appendChild(titleElement);
  container.appendChild(bodyElement);
  container.appendChild(footerElement);

  return container;
}