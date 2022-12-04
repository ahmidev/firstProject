 const cardsFormer = document.querySelector(".cards-former");
export function createCardFormer(title, imageUrl) {
    const cardFormer = document.createElement("div");
    cardFormer.classList.add("card-former");
    cardsFormer.appendChild(cardFormer);
  
    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header-former");
    cardFormer.appendChild(cardHeader);
    
    const cardImg = document.createElement("div");
    cardImg.style.backgroundImage = `url(${imageUrl})`;
    cardImg.style.backgroundColor = "rgb(202, 202, 202)";
    cardImg.style.cursor = "pointer";
    cardImg.style.transition = `all 1s`;
    cardImg.classList.add("card-img-former");
    cardHeader.appendChild(cardImg);
  
    // Step1: Create the cardBody div, add the class card-body and add it to the card
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body-former");
    cardFormer.appendChild(cardBody);
    // Step2: Create the cardTitle h2, add the class card-title,
    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("card-title-former");
    // set the text inside the tag to the "title" parameter of this function
    cardTitle.innerHTML = title;
    // and add it to the cardBody
    cardBody.appendChild(cardTitle);
  
    // Step3: Create the cardButton button, add the class card-button,
    const cardButton = document.createElement("button");
    cardButton.classList.add("card-button-former");
    // set the text inside the tag to be "Adopt Now"
    cardButton.innerHTML = `En savoir plus`;
  
    // and add it to the cardBody
    cardBody.appendChild(cardButton);
  }