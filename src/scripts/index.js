import 'regenerator-runtime'; /* for async await transpile */

import '../styles/main.css';

const clickMenu = () => {
  const menuBtn = document.querySelector('.nav__btn');
  const navList = document.querySelector('.nav__list');
  menuBtn.addEventListener('click', function(){ 
    navList.classList.toggle('show');
  })
}

clickMenu();