import { walders } from "./walders.js";
import {createCard} from "./functionCreateCards.js";

const searchInput = document.querySelector("#search")
const searchResult = document.querySelector(".table-results")


let dataArray;

 function getUsers(){

 
  
  dataArray = orderList(walders)
  createUserList(dataArray)
}

getUsers()

function orderList(data) {

  const orderedData = data.sort((a,b) => {
    if(a.nom.toLowerCase() < b.nom.toLowerCase()) {
      return -1;
    }
    if(a.nom.toLowerCase() > b.nom.toLowerCase()) {
      return 1;
    }
    return 0;
  })
  
  return orderedData;
}


function createUserList(usersList) {

  usersList.forEach(user => {
    console.log(user.phto)
    // const listItem = document.createElement("div");
    // listItem.setAttribute("class", "table-item");
    // console.log(user)
    // listItem.innerHTML = `
    // <div class="container-img">
    // <img src=${user.photo}>
    // <p class="name">${user.nom} ${user.prenom}</p>
    // </div>
    // <p class="email">${user.email}</p>
    
    // `
    const card =   document.createElement("div");
    card.classList.add("card");
    
  
    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    card.appendChild(cardHeader);
    
    const cardImg = document.createElement("div");
    cardImg.style.backgroundImage = `url(${user.photoNb})`;
    cardImg.style.backgroundColor = "rgb(202, 202, 202)";
    cardImg.style.cursor = "pointer";
    cardImg.style.transition = `all 1s`;
    cardImg.classList.add("card-img");
    cardHeader.appendChild(cardImg);
  
   
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);
   
    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("card-title");
  
    cardTitle.innerHTML = user.nom;
    
    cardBody.appendChild(cardTitle);
  
  
    const cardButton = document.createElement("button");
    cardButton.classList.add("card-button");
   
    cardButton.innerHTML = `En savoir plus`;
  
    
    cardBody.appendChild(cardButton);
   

    
    searchResult.appendChild(card);
    //searchResult.appendChild(listItem);
  })

}

searchInput.addEventListener("input", filterData)

function filterData(e) {

  searchResult.innerHTML = ""

  const searchedString = e.target.value.toLowerCase().replace(/\s/g, "");

  const filteredArr = dataArray.filter(el => 
    el.nom.toLowerCase().includes(searchedString) || 
    el.prenom.toLowerCase().includes(searchedString) ||
    `${el.prenom + el.nom}`.toLowerCase().replace(/\s/g, "").includes(searchedString) ||
    `${el.nom + el.prenom}`.toLowerCase().replace(/\s/g, "").includes(searchedString)
    )

  createUserList(filteredArr)
}