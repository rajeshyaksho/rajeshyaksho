document.addEventListener('DOMContentLoaded', function () {
  // Theme Toggle Logic
  const themeToggle = document.getElementById('theme-toggle');
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  let storedTheme = localStorage.getItem('theme');

  if (storedTheme !== 'dark' && storedTheme !== 'light') {
    storedTheme = 'light';
  }

  document.documentElement.setAttribute('data-theme', storedTheme);
  themeToggle.checked = storedTheme === 'dark';

  const header = document.querySelector('.header');
  header.classList.toggle('dark-mode', storedTheme === 'dark');

  function createRain() {
    const interactiveBg = document.querySelector('.interactive-bg');
    if (interactiveBg) {
      for (let i = 0; i < 100; i++) {
        const rain = document.createElement('div');
        rain.classList.add('rain');
        rain.style.left = `${Math.random() * 100}%`;
        rain.style.animationDuration = `${Math.random() * 4 + 1}s`;
        interactiveBg.appendChild(rain);
      }
    }
  }

  function removeRain() {
    const rainElements = document.querySelectorAll('.rain');
    rainElements.forEach(rain => rain.remove());
  }

  if (storedTheme === 'dark') {
    createRain();
  }

  themeToggle.addEventListener('change', function () {
    const theme = themeToggle.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    header.classList.toggle('dark-mode', theme === 'dark');

    if (theme === 'dark') {
      createRain();
    } else {
      removeRain();
    }
  });

  // Project Container Click Logic
  document.querySelectorAll('.project-container').forEach(container => {
    container.addEventListener('click', (event) => {
      if (event.target.tagName === 'BUTTON') return;
      window.location.href = container.getAttribute('data-page-url');
    });
  });

  // Title Toggle Logic
  const originalTitle = document.querySelector('.title1');
  const newTitleWrapper = document.querySelector('.title-wrapper');
  const newTitleElement = newTitleWrapper.querySelector('h1');

  function toggleTitle() {
    originalTitle.style.display = 'none';
    newTitleWrapper.style.display = 'block';
    type();
  }

  function type() {
    const phrase = 'Welcome To My Portfolio!';
    let currentCharacterIndex = 0;

    function typeCharacter() {
      const currentText = phrase.substring(0, currentCharacterIndex + 1);
      newTitleElement.textContent = currentText;
      currentCharacterIndex++;

      if (currentCharacterIndex === phrase.length) {
        setTimeout(() => {
          newTitleWrapper.style.display = 'none';
          originalTitle.style.display = 'block';
          setTimeout(toggleTitle, 1000);
        }, 1000);
      } else {
        setTimeout(typeCharacter, 80);
      }
    }

    typeCharacter();
  }

  setTimeout(toggleTitle, 2000);

  // Menu Toggle Logic
  function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    if (menu && icon) {
      menu.classList.toggle("open");
      icon.classList.toggle("open");
    } else {
      console.error("Menu or icon element not found.");
    }
  }
});
