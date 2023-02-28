mainMenu.addEventListener('transitionend', function() {
    mainMenu.style.display = 'none';
    mainMenu.removeEventListener('transitionend', arguments.callee, false);
}, {once: true});