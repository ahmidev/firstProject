
import { wilders } from "./wilders.js";
import { formateurs } from "./formers.js";
import {createCard} from "./functionCreateCards.js"
import {createCardFormer} from "./functionCreateCardsFormer.js"



// ---- mernu burger -----
const btnResp = document.querySelector('.btn-responsive-menu ');
const nav = document.querySelector('.navBar');
const itemNav = document.querySelectorAll('.item-nav');


btnResp.addEventListener('click', ()=>{
    btnResp.classList.toggle('active');
    nav.classList.toggle('activeMenu');
})

// permet de fermer le menu une fois cliqué sur un element
itemNav.forEach(item =>{
    item.addEventListener('click', ()=> {
        btnResp.classList.toggle('active');
        nav.classList.toggle('activeMenu');
    })
})

// ---- end mernu burger -----//


  
// --------- cards for former --------------//

formateurs.forEach((former, i)=> {

  
    createCardFormer(`${former.nom.toUpperCase()} ${former.prenom}`, former.photoNb);
    
});

 let btns = document.querySelectorAll(".card-former .card-button-former");
 popUp(btns, formateurs)



  //----------- cards for wilders-----------------//  
   for(let wal of wilders){
    let boutons = document.querySelectorAll(".card-button");
    createCard(`${wal.nom.toUpperCase()} ${wal.prenom}`, wal.photoNb);
    cardHover(wilders);
    popUp(boutons, wilders)
   }
   




   
       

   
   

  // ------ filter for checkbox femme
  const femmes = wilders.filter(number => number.bool);
  
  const cards = document.querySelector(".cards");
  const checkFemme = document.querySelector('#checkFemme');
  
  checkFemme.addEventListener('input', (e)=>{
    
    if(e.target.checked){
        cards.innerHTML ="";
        checkHomme.checked = "";
        for(let femme of femmes){
          createCard(`${femme.nom} ${femme.prenom}`, femme.photoNb)
          cardHover(femmes);
          let boutons = document.querySelectorAll(".card-button");
          popUp(boutons, femmes)
        
        const searchInput = document.querySelector('#search');
 
          searchInput.addEventListener("input", filterData);
          
          function filterData(e) {
          
            cards.innerHTML = ""

            const searchedString = e.target.value.toLowerCase().replace(/\s/g, "");

            const filteredArr = femmes.filter(el => 
              el.nom.toLowerCase().includes(searchedString) || 
              el.prenom.toLowerCase().includes(searchedString) ||
              `${el.prenom + el.nom}`.toLowerCase().replace(/\s/g, "").includes(searchedString) ||
              `${el.nom + el.prenom}`.toLowerCase().replace(/\s/g, "").includes(searchedString)
            
              )
              
              for(let array of filteredArr){
                
                createCard(`${array.nom} ${array.prenom}`, array.photoNb);
                cardHover(filteredArr)
                let boutons = document.querySelectorAll(".card-button");
                popUp(boutons, filteredArr);

              }
            }
          };
    }
    

    if(!e.target.checked){
        cards.innerHTML ="";
        
        for(let wilder of wilders){
          createCard(`${wilder.nom.toUpperCase()} ${wilder.prenom}`, wilder.photoNb);
          cardHover(wilders);
          let boutons = document.querySelectorAll(".card-button");
          popUp(boutons, wilders);
          const searchInput = document.querySelector('#search');
 
          searchInput.addEventListener("input", filterData);
          
          function filterData(e) {
          
            cards.innerHTML = ""

            const searchedString = e.target.value.toLowerCase().replace(/\s/g, "");

            const filteredArr = wilders.filter(el => 
              el.nom.toLowerCase().includes(searchedString) || 
              el.prenom.toLowerCase().includes(searchedString) ||
              `${el.prenom + el.nom}`.toLowerCase().replace(/\s/g, "").includes(searchedString) ||
              `${el.nom + el.prenom}`.toLowerCase().replace(/\s/g, "").includes(searchedString)
            
              )
              
              for(let array of filteredArr){
                
                createCard(`${array.nom} ${array.prenom}`, array.photoNb);
                cardHover(filteredArr)
                let boutons = document.querySelectorAll(".card-button");
                popUp(boutons, filteredArr);

              }
            }
        }
        
    }
    
  });





  // ------ filter for checkbox homme
  const hommes = wilders.filter(number => !number.bool);
  const checkHomme = document.querySelector('#checkHomme');
 
  checkHomme.addEventListener('input', (e)=>{
    

          if(e.target.checked){
              cards.innerHTML ="";
              checkFemme.checked = "";
              for(let homme of hommes){
                createCard(`${homme.nom} ${homme.prenom}`, homme.photoNb);
                cardHover(hommes);
                let boutons = document.querySelectorAll(".card-button");
                popUp(boutons, hommes);

                const searchInput = document.querySelector('#search');
 
                searchInput.addEventListener("input", filterData);
                
                function filterData(e) {
                
                  cards.innerHTML = ""
      
                  const searchedString = e.target.value.toLowerCase().replace(/\s/g, "");
      
                  const filteredArr = hommes.filter(el => 
                    el.nom.toLowerCase().includes(searchedString) || 
                    el.prenom.toLowerCase().includes(searchedString) ||
                    `${el.prenom + el.nom}`.toLowerCase().replace(/\s/g, "").includes(searchedString) ||
                    `${el.nom + el.prenom}`.toLowerCase().replace(/\s/g, "").includes(searchedString)
                  
                    )
                    
                    for(let array of filteredArr){
                      
                      createCard(`${array.nom} ${array.prenom}`, array.photoNb);
                      cardHover(filteredArr)
                      let boutons = document.querySelectorAll(".card-button");
                      popUp(boutons, filteredArr);
      
                    }
                  }
                };  
             
            
              };        
          
           if(!e.target.checked){
              cards.innerHTML ="";
              for(let wilder of wilders){
                createCard(`${wilder.nom} ${wilder.prenom}`, wilder.photoNb);
                cardHover(wilders);
                let boutons = document.querySelectorAll(".card-button");
                popUp(boutons, wilders);
                const searchInput = document.querySelector('#search');
 
                searchInput.addEventListener("input", filterData);
                
                function filterData(e) {
                
                  cards.innerHTML = ""
      
                  const searchedString = e.target.value.toLowerCase().replace(/\s/g, "");
      
                  const filteredArr = wilders.filter(el => 
                    el.nom.toLowerCase().includes(searchedString) || 
                    el.prenom.toLowerCase().includes(searchedString) ||
                    `${el.prenom + el.nom}`.toLowerCase().replace(/\s/g, "").includes(searchedString) ||
                    `${el.nom + el.prenom}`.toLowerCase().replace(/\s/g, "").includes(searchedString)
                  
                    )
                    
                    for(let array of filteredArr){
                      
                      createCard(`${array.nom} ${array.prenom}`, array.photoNb);
                      cardHover(filteredArr)
                      let boutons = document.querySelectorAll(".card-button");
                      popUp(boutons, filteredArr);
      
                    }
                  }
              }
            
            }

});



 //----- filtrer les wilders dans le input de recherche


 const searchInput = document.querySelector('#search')
 
 searchInput.addEventListener("input", filterData)

 function filterData(e) {
 
      cards.innerHTML = ""
    
      const searchedString = e.target.value.toLowerCase().replace(/\s/g, "");
    
      const filteredArr = wilders.filter(el => 
        el.nom.toLowerCase().includes(searchedString) || 
        el.prenom.toLowerCase().includes(searchedString) ||
        `${el.prenom + el.nom}`.toLowerCase().replace(/\s/g, "").includes(searchedString) ||
        `${el.nom + el.prenom}`.toLowerCase().replace(/\s/g, "").includes(searchedString)
      
        )
        
        for(let array of filteredArr){
          
          createCard(`${array.nom} ${array.prenom}`, array.photoNb);
          cardHover(filteredArr)
          let boutons = document.querySelectorAll(".card-button");
          popUp(boutons, filteredArr);

        }
      
 };



 


   

    //---------------effet hover sur les cartes des wildres ------------------//

    function cardHover(wilders){
      let cardImg = document.querySelectorAll('.card-img');
   
    
        for(let i =0 ; i < cardImg.length; i++){
            //console.log(cardImg[i])
         
            cardImg[i].addEventListener('mouseover', ()=>{
                //console.log(walders[i].photo);
                cardImg[i].style.backgroundImage = `url(${wilders[i].photo})`;
                cardImg[i].style.backgroundColor = "rgb(230, 133, 109)";
                cardImg[i].style.transition = `all 1s`;
                
            })
            cardImg[i].addEventListener('mouseleave', ()=>{
                //console.log(walders[i].photo);
                cardImg[i].style.backgroundImage = `url(${wilders[i].photoNb})`;
                cardImg[i].style.backgroundColor = "rgb(202, 202, 202)";
                cardImg[i].style.transition = `all 2s`;
            })
        }

    }
    


//---------------Fenetre popup des cartes de former ------------------//



 //---------------Fenetre pop des cartes des waldres ------------------//

let boutons = document.querySelectorAll(".card-button");
     


function popUp(boutons, wilder){
  const wilders = wilder;
  let pop = document.querySelector("#pop");
  // Variables liées à la modale
  let h2 = document.querySelector("#modale h2");
  let img = document.querySelector("#modale img");
  let p = document.querySelector("#modale p");
  let github = document.querySelector('#github');
  let mail = document.querySelector('#mail');

    boutons.forEach((btn, i)=>{
        
          btn.addEventListener("click", function (e) {
         
          pop.classList.add("active");
          h2.innerText = wilders[i].nom.toUpperCase()+" "+wilders[i].prenom;
          img.setAttribute("src", wilders[i].photo);
          // img.setAttribute("alt", this.dataset.nom);
          img.getAttribute("src");
          p.innerHTML = wilders[i].presentation;
          github.href =`https://github.com/${wilders[i].githubId}`;
          mail.href = `mailto:${wilders[i].email}`;
          });
    });
    if (pop) {
      pop.addEventListener("click", function () {
        this.classList.remove("active");
      });}
      
}


 

 
// image aleatoire 

// const imgPrincipal = document.querySelectorAll('ul li img');
// imgPrincipal.forEach((li,i)=>{
//   console.log(li)
// })

// let randomIgm = function(){
//    const alea =Math.floor(Math.random()*10);
//    imgPrincipal.forEach((li,i)=>{
//    li.src = `./assets/${alea}.jpg`
//   })
  //  imgPrincipal.src = `./assets/${alea}.jpg`
  //  console.log( alea);
   
  //};

 //setInterval(randomIgm,2000);

//imgPrincipal.src = `./assets/${imgAleatoire}.jpg`
//console.log(setInterval(randomIgm,1000))
