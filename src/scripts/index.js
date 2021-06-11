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

// ----------------------------- infra
const tabInfra = document.querySelectorAll('[data-infra-target]');
const tabContentInfra = document.querySelectorAll('[data-infra-content]');

tabInfra.forEach(el => {
  el.addEventListener('click', () => {
    const target = document.querySelector(el.dataset.infraTarget);
    tabContentInfra.forEach(el => el.classList.remove('active'));
    tabInfra.forEach(el => el.classList.remove('active'));

    el.classList.add('active');
    target.classList.add('active');
  })
})
// --------------------------- end infra 

// ------------------------- property -----

const tabProperty = document.querySelectorAll('[data-property-target]');
const tabContentProperty = document.querySelectorAll('[data-property-content]');

tabProperty.forEach(el => {
  el.addEventListener('click', () => {
    const target = document.querySelector(el.dataset.propertyTarget);
    tabContentProperty.forEach(el => el.classList.remove('active'));
    tabProperty.forEach(el => el.classList.remove('active'));

    el.classList.add('active');
    target.classList.add('active');
  })
})


const satu = document.querySelector('#satu')
const galery = satu.querySelectorAll('.container .card')
const previewBox = document.querySelector('.preview-box');
const previewImg = previewBox.querySelector('img');
const closeIcon = document.querySelector('.close');



window.onload = () => {
  for(let i = 0; i < galery.length; i++){
    let newIndex = i;
    galery[i].onclick = () => {

      function preview(){
        let selectedImgUrl = galery[newIndex].querySelector('img').src;
        //console.log(selectedImgUrl)
        previewImg.src = selectedImgUrl
      }

      const prevBtn = document.querySelector('.prev');
      const nextBtn = document.querySelector('.next');

      prevBtn.onclick = () => {
        newIndex--;
        preview()
      }

      nextBtn.onclick = () => {
        newIndex++;
        preview();
      }

      preview()
      previewBox.classList.add('show')
      closeIcon.onclick = () => {
        previewBox.classList.remove('show')
      }
    }
  }
}