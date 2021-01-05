export default (number) => {
  const container = document.createElement('div');
  container.className = 'slide-container';

  const titleElement = document.createElement('div');
  const bodyElement = document.createElement('div');
  const footerElement = document.createElement('div');

  titleElement.className = 'slide-title';
  bodyElement.className = 'slide-body';
  footerElement.className = 'slide-footer';

  footerElement.textContent = `Slide: ${number}`;

  const bodyTop = document.createElement('div');
  const bodyMiddle = document.createElement('div');
  const bodyFooter = document.createElement('div');
  const bodyFooterFooter = document.createElement('div');

  bodyTop.className = 'slide5-body-top';
  bodyMiddle.className = 'slide5-body-middle';
  bodyFooter.className = 'slide5-body-footer';
  bodyFooterFooter.className = 'slide5-body-footer-footer';

  bodyElement.appendChild(bodyTop);
  bodyElement.appendChild(bodyMiddle);
  bodyElement.appendChild(bodyFooter);
  bodyElement.appendChild(bodyFooterFooter);


  bodyTop.textContent = "What type of components should use state?";
  bodyMiddle.textContent = "...img of two types of components..."
  bodyFooter.textContent = "Conclusion:"
  bodyFooterFooter.innerText = "- Components can create and manage their own data with state;\n- state is for managing data;\n- State data can be modified by its own component, but is private (cannot be accessed from outside);\n- Modifying state should happen with the `setState()` method;";
  container.appendChild(titleElement);
  container.appendChild(bodyElement);
  container.appendChild(footerElement);

  return container;
}