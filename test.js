// const titleCursorPosition = document.querySelector("#title-cursor-position");

// document.addEventListener("mousemove", (event) => {
//   titleCursorPosition.innerHTML = `X:${event.clientX} , Y:${event.clientY}`;
// });



// const str = "This website is for losers LOL!";
// function disemvowel(str) {
  
//   return str.replace(/o|a|i|u|e|O|A|I|U|E/g, "")
// }
// console.log(disemvowel(str));

let nb = 39 ;
let nbC = nb.toString();

function persistence(num) {
  function multiply(n){
    return n.reduce(function(a,b){return a*b;});
}
var count =0; 

while(num.toString().length > 1) {
    num= num.toString().split("");
    num = multiply(num);
    count++;
 }
 return count;
}
let nbS = nb.toString().split("")
//console.log(nbS[0]*nbS[1])

let phrase = "is2 Thi1s T4est 3a";
let p = phrase.split(' ');
for(let i = 0; i < phrase.length; i++){
  let numbers = parseInt(phrase[i]) ;
  for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i])
  }
 }
 

