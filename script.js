const btnResp = document.querySelector('.btn-responsive-menu');
const listeNav = document.querySelector('.liste-nav');
const items = document.querySelectorAll('.item-nav')

btnResp.addEventListener('click', ()=>{
    btnResp.classList.toggle('active');
    listeNav.classList.toggle('active-menu');
})
items.forEach(item => {
    item.addEventListener('click', ()=>{
    btnResp.classList.toggle('active');
    listeNav.classList.toggle('active-menu');
    })
})