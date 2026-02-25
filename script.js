// Inserimento dinamico header e footer
fetch('header.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('header-placeholder').innerHTML = data;
    initHamburger();
  });

fetch('footer.html')
  .then(res => res.text())
  .then(data => document.getElementById('footer-placeholder').innerHTML = data);

// Funzione menu hamburger
function initHamburger(){
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav-menu');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
  });
}

// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {threshold:0.1, rootMargin:"0px 0px -50px 0px"};
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));