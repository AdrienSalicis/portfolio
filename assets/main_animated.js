
document.addEventListener("DOMContentLoaded", () => {
  // Fade-in on scroll
  const faders = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  faders.forEach(fader => {
    observer.observe(fader);
  });

  // Typing animation
  const text = "Adrien Salicis";
  const typingElement = document.getElementById("typing");
  if (typingElement) {
    typingElement.textContent = "";
    let index = 0;
    function typeLetter() {
      if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeLetter, 100);
      }
    }
    typeLetter();
  }
});
