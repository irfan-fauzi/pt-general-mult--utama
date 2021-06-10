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

const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]')

//console.log(tabContents)

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget);

    tabContents.forEach(tabContent => tabContent.classList.remove('active'));
    
    tabs.forEach(tab => tab.classList.remove('active'));

    tab.classList.add('active');
    target.classList.add('active');

  })
})