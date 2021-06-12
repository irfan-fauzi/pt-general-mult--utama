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

// ----------------------Industry-------------------------------
// Precast
const precast = document.querySelector('#satu');
const galeryPrecast = precast.querySelectorAll('.container .card')
const previewBoxPrecast = precast.querySelector('.preview-box');
const previewImgPrecast = previewBoxPrecast.querySelector('img');
const closeIconPrecast = precast.querySelector('.close');
const shadow = document.querySelector('.shadow');
const prevPrecast = previewBoxPrecast.querySelector('.prev');
const nextPrecast = previewBoxPrecast.querySelector('.next');

// fasility
const industrialFacility = document.querySelector('#dua');
const galeryIndustrial = industrialFacility.querySelectorAll('.container .card');
const previewBoxIndustrial = industrialFacility.querySelector('.preview-box');
const previewImgIndustrial = previewBoxIndustrial.querySelector('img');
const closeIconIndustrial = industrialFacility.querySelector('.close');
const prevIndustrial = previewBoxIndustrial.querySelector('.prev');
const nextIndustrial = previewBoxIndustrial.querySelector('.next');

// bitumen
const bitumen = document.querySelector('#tiga');
const galeryBitumen = bitumen.querySelectorAll('.container .card');
const previewBoxBitumen = bitumen.querySelector('.preview-box');
const previewImgBitumen = previewBoxBitumen.querySelector('img');
const closeIconBitumen = bitumen.querySelector('.close');
const prevBitumen = previewBoxBitumen.querySelector('.prev');
const nextBitumen = previewBoxBitumen.querySelector('.next');

// ------------------------ Energy and Industrial plant----

// epc
const epc = document.querySelector('#satu-2');
const galeryEpc = epc.querySelectorAll('.container .card');
const previewBoxEpc = epc.querySelector('.preview-box');
const previewImgEpc = previewBoxEpc.querySelector('img');
const closeIconEpc = epc.querySelector('.close');
const prevEpc = previewBoxEpc.querySelector('.prev');
const nextEpc = previewBoxEpc.querySelector('.next');

// operation and maintance

const operation = document.querySelector('#dua-2');
const galeryOperation = operation.querySelectorAll('.container .card');
const previewBoxOperation = operation.querySelector('.preview-box');
const previewImgOperation = previewBoxOperation.querySelector('img');
const closeIconOperation = operation.querySelector('.close');
const prevOperation = previewBoxOperation.querySelector('.prev');
const nextOperation = previewBoxOperation.querySelector('.next');

// ------------------------- Infrastructure and Building ------

// civil construction
const civil = document.querySelector('#infra-1');
const galeryCivil = civil.querySelectorAll('.container .card');
const previewBoxCivil = civil.querySelector('.preview-box');
const previewImgCivil = previewBoxCivil.querySelector('img');
const closeIconCivil = civil.querySelector('.close');
const prevCivil = previewBoxCivil.querySelector('.prev');
const nextCivil = previewBoxCivil.querySelector('.next');

// building constructor
const building = document.querySelector('#infra-2');
const galeryBuilding = building.querySelectorAll('.container .card');
const previewBoxBuilding = building.querySelector('.preview-box');
const previewImgBuilding = previewBoxBuilding.querySelector('img');
const closeIconBuilding = building.querySelector('.close');
const prevBuilding = previewBoxBuilding.querySelector('.prev');
const nextBuilding = previewBoxBuilding.querySelector('.next');

// steel construction
const steel = document.querySelector('#infra-3');
const galerySteel = steel.querySelectorAll('.container .card');
const previewBoxSteel = steel.querySelector('.preview-box');
const previewImgSteel = previewBoxSteel.querySelector('img');
const closeIconSteel = steel.querySelector('.close');
const prevSteel = previewBoxSteel.querySelector('.prev');
const nextSteel = previewBoxSteel.querySelector('.next');




window.onload = () => {

  fungsiPreviewPrecast(galeryPrecast, previewBoxPrecast, previewImgPrecast, closeIconPrecast, shadow, prevPrecast, nextPrecast);

  fungsiPreviewPrecast(galeryIndustrial, previewBoxIndustrial, previewImgIndustrial, closeIconIndustrial, shadow, prevIndustrial, nextIndustrial);

  fungsiPreviewPrecast(galeryBitumen, previewBoxBitumen, previewImgBitumen, closeIconBitumen, shadow, prevBitumen, nextBitumen);

  fungsiPreviewPrecast(galeryEpc, previewBoxEpc, previewImgEpc, closeIconEpc, shadow, prevEpc, nextEpc);
  
  fungsiPreviewPrecast(galeryOperation, previewBoxOperation, previewImgOperation, closeIconOperation, shadow, prevOperation, nextOperation);
  
  fungsiPreviewPrecast(galeryCivil, previewBoxCivil, previewImgCivil, closeIconCivil, shadow, prevCivil, nextCivil);

  fungsiPreviewPrecast(galeryBuilding, previewBoxBuilding, previewImgBuilding, closeIconBuilding, shadow, prevBuilding, nextBuilding);

  fungsiPreviewPrecast(galerySteel, previewBoxSteel, previewImgSteel, closeIconSteel, shadow, prevSteel, nextSteel);

}

const fungsiPreviewPrecast = (galery, previewBox, previewImg, closeIcon, shadow, prevBtn, nextBtn ) => {
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



