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



  // cards for walders 
    for(let wal of walders){
        createCard(`${wal.nom.toUpperCase()} ${wal.prenom}`, wal.photoNb);
        
  
    }
    let cardImg = document.querySelectorAll('.card-img');
    //console.log(cardImg)
    
    for(let i =0 ; i < cardImg.length; i++){
        //console.log(cardImg[i])
        cardImg
        cardImg[i].addEventListener('mouseover', ()=>{
            //console.log(walders[i].photo);
            cardImg[i].style.backgroundImage = `url(${walders[i].photo})`;
            cardImg[i].style.transition = `all 1s`;
            
        })
        cardImg[i].addEventListener('mouseleave', ()=>{
            //console.log(walders[i].photo);
            cardImg[i].style.backgroundImage = `url(${walders[i].photoNb})`;
            cardImg[i].style.transition = `all 2s`;
        })
    }



let boutons = document.querySelectorAll(".card-button");
     //console.log(bouton1)

let pop = document.querySelector("#pop");
// Variables liées à la modale
let h2 = document.querySelector("#modale h2");
let img = document.querySelector("#modale img");
let p = document.querySelector("#modale p");
let github = document.querySelector('#github');
let mail = document.querySelector('#mail');
console.log(github)
for(let i = 0; i < boutons.length; i++){
    // console.log(val)
    boutons[i].addEventListener("click", function (e) {
   console.log(e)
    pop.classList.add("active");
    h2.innerText = walders[i].nom.toUpperCase()+" "+walders[i].prenom;
    img.setAttribute("src", walders[i].photo);
    // img.setAttribute("alt", this.dataset.nom);
    img.getAttribute("src");
    p.innerHTML = walders[i].presentation;
    github.href =`https://github.com/${walders[i].githubId}`;
    mail.href = `mailto:${walders[i].email}`;
  });
}
  
if (pop) {
  pop.addEventListener("click", function () {
    this.classList.remove("active");
  });}
  