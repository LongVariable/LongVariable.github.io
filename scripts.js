document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab');
  const cards = document.querySelectorAll('.project-card');

  function filterProjects(category) {
    cards.forEach(card => {
      card.classList.toggle('show', card.dataset.category === category);
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      filterProjects(tab.dataset.category);
    });
  });

  // Výchozí zobrazení první kategorie
  filterProjects('school');
});

window.addEventListener('DOMContentLoaded', () => {
  const uvodText = document.querySelector('.uvod-text');
  const keyboardFoto = document.querySelector('.keyboard-foto');

  if (uvodText && keyboardFoto) {
    // Jsme na index.html
    requestAnimationFrame(() => {
      uvodText.classList.add('animate');
      keyboardFoto.classList.add('animate');
    });

    uvodText.addEventListener('transitionend', () => {
      startDotAnimation();
      startButtonAnimation();
      startTypewriter();
    });

    // Delay na line animation (po ~1s)
    setTimeout(() => {
      startLineAnimation();
    }, 1000);
  } else {
    // Jsme na jiné stránce (about, projects, ...)
    startLineAnimation();
  }
  });
  function startDotAnimation() {
    const teckaZdravim = document.querySelector('.tecka');
    requestAnimationFrame(() => {
      teckaZdravim.classList.add('fadeIn');
    });
  }
  function startButtonAnimation() {
    const bttnCV = document.querySelector('.download-cv-btn');
    requestAnimationFrame(() => {
    bttnCV.classList.add('borderPulse');
    });
  }
    function startLineAnimation() {
      document.querySelectorAll(".nav-links li a").forEach(link => {
        link.classList.add("animateLines");
          requestAnimationFrame(() => {
          bttnCV.classList.add('borderPulse');
            setTimeout(() => {
              link.classList.remove("animateLines");
            }, 1200);
          });
      });
    }

    window.addEventListener('DOMContentLoaded', () => {
    const uvodText = document.querySelector('.about-foto');
    const keyboard = document.querySelector('.about-text');
    requestAnimationFrame(() => {
    uvodText.classList.add('animate');
    keyboard.classList.add('animate');
    });
    });

    function toggleMenu() {
      const nav = document.getElementById("navLinks");
      nav.classList.toggle("active");
    }


    function startTypewriter() {
  const el = document.querySelector('.profese');
  if (!el) return;

  const words = ['IT nadšenec','Junior'];   // můžeš přidat více frází
  const typeSpeed = 130;
  const deleteSpeed = 60;
  const holdTime = 4000;
  const pauseBetween = 500;

  let wordIndex = 0;
  let charIndex = 0;
  let typing = true;

  el.textContent = '';

  const tick = () => {
    const word = words[wordIndex];

    if (typing) {
      el.classList.remove('blink'); // při psaní kurzor svítí
      charIndex++;
      el.textContent = word.slice(0, charIndex);

      if (charIndex === word.length) {
        typing = false;
        el.classList.add('blink'); // po dopsání začne blikat
        setTimeout(tick, holdTime);
        return;
      }
      setTimeout(tick, typeSpeed);

    } else {
      el.classList.remove('blink'); // při mazání kurzor svítí
      charIndex--;
      el.textContent = word.slice(0, charIndex);

      if (charIndex === 0) {
        typing = true;
        el.classList.add('blink'); // po smazání začne blikat
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(tick, pauseBetween);
        return;
      }
      setTimeout(tick, deleteSpeed);
    }
  };

  tick();
}






