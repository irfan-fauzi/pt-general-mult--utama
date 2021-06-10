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
    //console.log(target)
    tabContents.forEach(tabContent => tabContent.classList.remove('active'));
    
    tabs.forEach(tab => tab.classList.remove('active'));

    tab.classList.add('active');
    target.classList.add('active');

  })
})

const tabEnergy = document.querySelectorAll('[data-energy-target]');
const tabContentsEnergy = document.querySelectorAll('[data-energy-content]')

tabEnergy.forEach(el => {
  el.addEventListener('click', () => {
    const target = document.querySelector(el.dataset.energyTarget);
    tabContentsEnergy.forEach(el => el.classList.remove('active'));
    tabEnergy.forEach(el => el.classList.remove('active'));

    el.classList.add('active');
    target.classList.add('active');
  })
})

