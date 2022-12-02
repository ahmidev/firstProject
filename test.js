// const titleCursorPosition = document.querySelector("#title-cursor-position");

// document.addEventListener("mousemove", (event) => {
//   titleCursorPosition.innerHTML = `X:${event.clientX} , Y:${event.clientY}`;
// });

function disemvowel(str) {
  for(let i=0; i < str.length; i++){
    const str2 =str[i].replace(/o/,"");
    return str2
  }
  
}

const str = "bonjour tout le monde ";
console.log(disemvowel(str));