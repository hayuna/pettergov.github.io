// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuLeft = document.querySelector('.menu-left');
const navItems = document.querySelectorAll('.nav-item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  menuBtn.classList.toggle('close');
  menu.classList.toggle('show');
  menuNav.classList.toggle('show');
  menuLeft.classList.toggle('show');
  navItems.forEach(item => item.classList.toggle('show'));
  
  showMenu = true;
    
}
