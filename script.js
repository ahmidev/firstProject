const btnResp = document.querySelector('.btn-responsive-menu ');

const nav = document.querySelector('.navBar');

btnResp.addEventListener('click', ()=>{
    btnResp.classList.toggle('active');
    nav.classList.toggle('activeMenu');
})