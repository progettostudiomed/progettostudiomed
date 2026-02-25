// Inserimento dinamico header e footer
fetch('header.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('header-placeholder').innerHTML = data;
    initHamburger(); // inizializza menu dopo il caricamento dell'header
  });

fetch('footer.html')
  .then(res => res.text())
  .then(data => document.getElementById('footer-placeholder').innerHTML = data);

// Funzione menu hamburger + animazione vertebre
function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav-menu');
  const vertebre = document.querySelectorAll('.nav-menu li .vertebra');

  function animateVertebre() {
    vertebre.forEach((v, index) => {
      v.style.animation = `vertebraAppear 0s linear ${0.27 * (index + 1)}s forwards`;
    });
  }

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');

    if (nav.classList.contains('active')) {
      animateVertebre(); // applica animazione con delay
    } else {
      // reset vertebre quando chiudi
      vertebre.forEach(v => v.style.visibility = 'hidden');
    }
  });
}

// Fade-in on scroll generale
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

// Animazione fade-in singole card servizi
const serviziCards = document.querySelectorAll('.servizio');
const serviziObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
serviziCards.forEach(card => serviziObserver.observe(card));

// Animazione Chi siamo
const chiSiamoElements = document.querySelectorAll('.chi-siamo-video, .chi-siamo-testo');
const chiSiamoObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
chiSiamoElements.forEach(el => chiSiamoObserver.observe(el));