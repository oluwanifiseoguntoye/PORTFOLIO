const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(navLink => {
    navLink.addEventListener('click', function() {
        // Add the 'active' class to the clicked nav item
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});

const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show(){
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}

function close(){
  mainMenu.style.top = '-100%';
}

window.addEventListener('load', function() {
  document.querySelector('.text').classList.add('animate');
});

const aboutSection = document.querySelector('#about');
const aboutTitle = document.querySelector('.about-title');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const aboutTitle = entry.target.querySelector('.about-title')
    if (entry.isIntersecting) {
      aboutTitle.classList.add('animate');
      return;
    }
    aboutTitle.classList.remove('animate');
    
  });
});

observer.observe(aboutSection);

