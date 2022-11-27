const btnResp = document.querySelector('.btn-responsive-menu ');

const nav = document.querySelector('.navBar');

const itemNav = document.querySelectorAll('.item-nav');
console.log(itemNav);

btnResp.addEventListener('click', ()=>{
    btnResp.classList.toggle('active');
    nav.classList.toggle('activeMenu');
})

itemNav.forEach(item =>{
    item.addEventListener('click', ()=> {
        btnResp.classList.toggle('active');
        nav.classList.toggle('activeMenu');
    })
})