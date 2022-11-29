const logoMenu = document.querySelector('.btnResponsiveMenu');
const contItems = document.querySelector('.contItems');
const homme = document.querySelector('#checkboxHomme');
const femme = document.querySelector('#checkboxFemme');
const arrItems = document.querySelectorAll('.items');
console.log(arrItems);
if(femme.id === 'checked'){
    console.log('coucou femme');
}

logoMenu.addEventListener('click', () => {

      
    logoMenu.classList.toggle('active');
    contItems.classList.toggle('activeMenu');
  
})

arrItems.forEach(item => {
    item.addEventListener('click', ()=>{
    logoMenu.classList.toggle('active');
    contItems.classList.toggle('activeMenu');
    })
})