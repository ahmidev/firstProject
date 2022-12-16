 const cards = document.querySelector(".cards");
 
export function createCard(title, imageUrl) {
    const card = document.createElement("div");
    card.classList.add("card");
    cards.appendChild(card);
  
    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    card.appendChild(cardHeader);
    
    const cardImg = document.createElement("div");
    cardImg.style.backgroundImage = `url(${imageUrl})`;
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
  
    cardTitle.innerHTML = title;
    
    cardBody.appendChild(cardTitle);
  
  
    const cardButton = document.createElement("button");
    cardButton.classList.add("card-button");
   
    cardButton.innerHTML = `En savoir plus`;
  
    
    cardBody.appendChild(cardButton);
  }