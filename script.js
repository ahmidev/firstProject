import { walders } from "./walders.js";
import { formateur } from "./former.js";
import {createCard} from "./functionCreateCards.js"



// console.log(walders[0].nom)
const btnResp = document.querySelector('.btn-responsive-menu ');

const nav = document.querySelector('.navBar');

const itemNav = document.querySelectorAll('.item-nav');


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

const animalsToAdopt = [
    {
      name: "Lucky",
      picture: "https://placekitten.com/200/287"
    },
    {
      name: "Symba",
      picture: "https://placekitten.com/200/139"
    },
    {
      name: "Léo",
      picture: "https://placekitten.com/200/90"
    },
    {
      name: "Milo",
      picture: "https://placekitten.com/200/194"
    },
    {
      name: "Charly",
      picture: "https://placekitten.com/200/179"
    }
  ];

  for (let cat of animalsToAdopt) {
    for(let wal of walders){
        createCard(wal.nom, cat.picture);
    }
    
  }