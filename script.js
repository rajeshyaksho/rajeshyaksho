document.addEventListener('DOMContentLoaded', function() {
  // JavaScript to toggle theme and switch
  const themeToggle = document.getElementById('theme-toggle');
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  let storedTheme = localStorage.getItem('theme');

  // If no theme is stored or it's invalid, use the default theme
  if (storedTheme !== 'dark' && storedTheme !== 'light') {
    storedTheme = prefersDarkMode ? 'dark' : 'light';
  }

  // Set initial theme
  document.documentElement.setAttribute('data-theme', storedTheme);
  themeToggle.checked = storedTheme === 'dark';

  // Update header bar color based on the stored theme
  const header = document.querySelector('.header');
  header.classList.toggle('dark-mode', storedTheme === 'dark');

  themeToggle.addEventListener('change', function() {
    const theme = themeToggle.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    // Toggle dark mode class on the header
    header.classList.toggle('dark-mode', theme === 'dark');
  });

  // JavaScript to create rain elements
  const interactiveBg = document.querySelector('.interactive-bg');

  function createRain() {
    for (let i = 0; i < 100; i++) {
      const rain = document.createElement('div');
      rain.classList.add('rain');
      rain.style.left = `${Math.random() * 100}%`;
      rain.style.animationDuration = `${Math.random() * 4 + 1}s`;
      interactiveBg.appendChild(rain);
    }
  }

  createRain();
});

// Add event listeners to each project container
document.querySelectorAll('.project-container').forEach(container => {
  container.addEventListener('click', (event) => {
      // Prevent the event from propagating when clicking the GitHub button
      if (event.target.tagName === 'BUTTON') return;

      // Redirect the user to the page URL specified in the data-page-url attribute
      window.location.href = container.getAttribute('data-page-url');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const chatbotBtn = document.getElementById('chatbot-btn');
  const chatbotModal = document.getElementById('chatbot-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const getQuoteBtn = document.getElementById('get-quote-btn');
  const quoteText = document.getElementById('quote-text');

  // Function to show the chatbot modal
  function showChatbotModal() {
      chatbotModal.style.display = 'block';
  }

  // Function to hide the chatbot modal
  function hideChatbotModal() {
      chatbotModal.style.display = 'none';
  }

  // Function to fetch a random quote
  function getQuote() {
      // Fetching quotes from an API or using a list of quotes
      const quotes = [
          "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
          "The best way to predict your future is to create it. - Peter Drucker",
          "The only way to do great work is to love what you do. - Steve Jobs",
          "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau"
      ];

      // Select a random quote from the list
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const randomQuote = quotes[randomIndex];

      // Display the quote
      quoteText.innerText = randomQuote;
  }

  // Event listeners for chatbot button and close button
  chatbotBtn.addEventListener('click', showChatbotModal);
  closeModalBtn.addEventListener('click', hideChatbotModal);
  getQuoteBtn.addEventListener('click', getQuote);

  // Hide the chatbot modal if the user clicks outside of the modal content
  window.addEventListener('click', function(event) {
      if (event.target === chatbotModal) {
          hideChatbotModal();
      }
  });
});

document.addEventListener('DOMContentLoaded', function () {
    const originalTitle = document.querySelector('.title1');
    const newTitleWrapper = document.querySelector('.title-wrapper');
    const newTitleElement = newTitleWrapper.querySelector('h1');
    
    function toggleTitle() {
        // Hide the original title
        originalTitle.style.display = 'none';

        // Show the new title
        newTitleWrapper.style.display = 'block';

        // Type the new title
        type();
    }

    function type() {
        const phrase = 'Welcome To My Portfolio!';
        let currentCharacterIndex = 0;

        function typeCharacter() {
            const currentText = phrase.substring(0, currentCharacterIndex + 1);
            newTitleElement.textContent = currentText;
            currentCharacterIndex++;

            // If the phrase is fully typed, wait for a few seconds before toggling back
            if (currentCharacterIndex === phrase.length) {
                setTimeout(() => {
                    // Hide the new title and show the original title
                    newTitleWrapper.style.display = 'none';
                    originalTitle.style.display = 'block';
                    // Call toggleTitle again after 2 seconds
                    setTimeout(toggleTitle, 1000);
                }, 1000); // Delay before toggling back to the original title
            } else {
                setTimeout(typeCharacter, 80); // Typing speed (adjust as needed)
            }
        }

        // Start the typing effect
        typeCharacter();
    }

    // Call the toggleTitle function after a delay of 2 seconds to start the cycle
    setTimeout(toggleTitle, 2000);
});

// Function to toggle the menu for smaller screens
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  if (menu && icon) { // Check if elements exist
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  } else {
    console.error("Menu or icon element not found."); // Log an error if elements are not found
  }
}
