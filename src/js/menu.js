'use strict';
// Variabler
const menuIcon = document.getElementById('hamburger-icon');
menuIcon.addEventListener('click', toggleMenu);
const menu = document.getElementById('main-nav');
let foo = 0;
// Öppnar och stänger hamburgermenyn
function toggleMenu() {
    if (!foo || foo % 2 == 0) {
        menu.style.display = 'block';
        menu.style.position = 'fixed';
        menu.style.top = '59px';
        menu.style.left = '0px';
        menu.style.right = '0px';
        menuIcon.className = 'open';
    } else if (foo % 2) {
        menu.style.display = 'none';
        menuIcon.className = '';
    }
    foo++;
}
