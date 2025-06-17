// script.js

document.addEventListener("DOMContentLoaded", () => {
  const introElements = document.querySelectorAll(".intro-text h1, .intro-text h3, .intro-text p");

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }

  function checkAnimation() {
    introElements.forEach(el => {
      if (isInViewport(el)) {
        el.classList.add("slide-in");
      }
    });
  }

  // Initial check in case already visible
  checkAnimation();

  window.addEventListener("scroll", checkAnimation);
});

  // ----------------------------
  // Tab switching functionality
  // ----------------------------

  function showTab(tabName) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(tab => {
      tab.style.display = 'none';
    });

    // Remove active class from all buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.classList.remove('active');
    });

    // Show selected tab content
    document.getElementById(tabName).style.display = 'block';

    // Add active class to clicked button
    event.target.classList.add('active');
  }

  // Set default tab to 'projects'
  showTab('projects');

  // Attach event listeners to tab buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      showTab(this.textContent.trim().toLowerCase());
    });
  });

function showTab(tabId) {
  const tabs = document.querySelectorAll('.tab-content');
  const buttons = document.querySelectorAll('.tab-btn');

  tabs.forEach(tab => {
    tab.style.display = 'none';
  });

  buttons.forEach(btn => {
    btn.classList.remove('active');
  });

  document.getElementById(tabId).style.display = 'block';
  event.target.classList.add('active');
}

document.addEventListener("DOMContentLoaded", () => {
  // Elements to animate on scroll
  const introElements = document.querySelectorAll(".intro-text h1, .intro-text h3, .intro-text p");
  const floatingIcons = document.querySelectorAll('.floating-icon');

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }

  function checkAnimation() {
    introElements.forEach(el => {
      if (isInViewport(el)) {
        el.classList.add("slide-in");
      }
    });
  }

  // Initial check in case already visible
  checkAnimation();
  window.addEventListener("scroll", checkAnimation);

})

    