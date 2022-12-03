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

  
    for(let wal of walders){
        createCard(`${wal.nom.toUpperCase()} ${wal.prenom}`, wal.photo);
    }
    



    let bouton1 = document.querySelectorAll(".card-button");
     console.log(bouton1)

let pop = document.querySelector("#pop");
// Variables liées à la modale
let h2 = document.querySelector("#modale h2");
let img = document.querySelector("#modale img");
let p = document.querySelector("#modale p");

for(let i = 0; i < bouton1.length; i++){
    // console.log(val)
    bouton1[i].addEventListener("click", function () {
    pop.classList.add("active");
    h2.innerText = walders[i].nom.toUpperCase()+" "+walders[i].prenom;
    img.setAttribute("src", walders[i].photo);
    // img.setAttribute("alt", this.dataset.nom);
    img.getAttribute("src");
    p.innerHTML = walders[i].presentation;
  });
}
  
if (pop) {
  pop.addEventListener("click", function () {
    this.classList.remove("active");
  });}
  