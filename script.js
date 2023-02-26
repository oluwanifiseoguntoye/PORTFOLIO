const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(navLink => {
    navLink.addEventListener('click', function() {
      // Add the 'active' class to the clicked nav item
      navLinks.forEach(link => link.classList.remove('active'));
      this.classList.add('active');
    });
  });

let button = document.querySelector('.navbar-toggler');
let menu = document.querySelector('.collapse');
  
button.addEventListener('click', function() {
  menu.classList.toggle('show');
});
  