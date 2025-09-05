const slider = document.querySelector('.slider');
const images = Array.from(slider.children);

slider.addEventListener('animationiteration', () => {
  // first image ko end me move kar de
  slider.appendChild(slider.firstElementChild);
});


document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('.read-more-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const fullText = this.previousElementSibling; // about-full paragraph
      if (fullText.style.display === "block") {
        fullText.style.display = "none";
        this.textContent = "Read Full Story";
      } else {
        fullText.style.display = "block";
        this.textContent = "Read Less";
      }
    });
  });
});
