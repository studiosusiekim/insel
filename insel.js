

const navigation =  document.querySelector('.navigation__background');
const navigationList = document.querySelector('.navigation__list');

navigationList.addEventListener('click', e => {
   if(e.target.tagName === 'A') {
   navigation.style.display ='none';
   const projekteLink = document.getElementById("projekte");  

    projekteLink.scrollIntoView();
   }
   });
