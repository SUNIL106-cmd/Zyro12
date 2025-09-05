const slider = document.querySelector('.slider');
const images = Array.from(slider.children);

slider.addEventListener('animationiteration', () => {
  // first image ko end me move kar de
  slider.appendChild(slider.firstElementChild);
});
