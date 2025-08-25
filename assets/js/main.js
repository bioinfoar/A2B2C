document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const body = document.querySelector('body');
  function toggleMenu() {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    body.classList.toggle('menu-open');
  }

  hamburger.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleMenu();
  });
  const dropdownToggles = document.querySelectorAll('.dropdown > a');
  
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        e.stopPropagation();
        
        const parent = this.parentElement;
        const wasActive = parent.classList.contains('active');
        document.querySelectorAll('.dropdown').forEach(dropdown => {
          dropdown.classList.remove('active');
        });
        if (!wasActive) {
          parent.classList.add('active');
        }
      }
    });
  });

  const navItems = document.querySelectorAll('.nav-links a:not(.dropdown > a)');
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        closeMenu();
      }
    });
  });

  document.addEventListener('click', function(e) {
    if (!e.target.closest('.nav-links') && 
        !e.target.closest('.hamburger') &&
        navLinks.classList.contains('active')) {
      closeMenu();
    }
  });

  navLinks.addEventListener('click', function(e) {
    e.stopPropagation();
  });

  function closeMenu() {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    body.classList.remove('menu-open');

    document.querySelectorAll('.dropdown').forEach(dropdown => {
      dropdown.classList.remove('active');
    });
  }
  
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
      body.classList.remove('menu-open');
      
      document.querySelectorAll('.dropdown').forEach(dropdown => {
        dropdown.classList.remove('active');
      });
    }
  });
});