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
const shadow = document.querySelector('.shadow');


window.onload = () => {
  for(let i = 0; i < galery.length; i++){
    let newIndex = i;
    let clickImgIndex;
    
    galery[i].onclick = () => {
      clickImgIndex = newIndex; 
      function preview(){
        let selectedImgUrl = galery[newIndex].querySelector('img').src;
        //console.log(selectedImgUrl)
        previewImg.src = selectedImgUrl
      }

      const prevBtn = document.querySelector('.prev');
      const nextBtn = document.querySelector('.next');

      if(newIndex == 0){
        prevBtn.style.display = "none";
      }
      if(newIndex >= galery.length - 1){
        nextBtn.style.display = "none";
      }

      prevBtn.onclick = () => {
        newIndex--;
        if(newIndex == 0){
          preview();
          prevBtn.style.display = "none";

        } else {
          preview();
          nextBtn.style.display = "block";
        }
        
      }

      nextBtn.onclick = () => {
        newIndex++;
        if(newIndex >= galery.length - 1){
          preview();
          nextBtn.style.display = "none";
        } else {
          preview();
          prevBtn.style.display = "block";
        }
      }

      preview()
      previewBox.classList.add('show');
      shadow.style.display = "block";

      closeIcon.onclick = () => {
        newIndex = clickImgIndex; 
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
        previewBox.classList.remove('show');
        shadow.style.display = "none";
      }
    }
  }
}