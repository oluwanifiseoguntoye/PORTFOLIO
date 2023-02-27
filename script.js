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
  mainMenu.addEventListener('transitionend', function() {
      mainMenu.style.display = 'none';
      mainMenu.removeEventListener('transitionend', arguments.callee, false);
  }, {once: true});
}

