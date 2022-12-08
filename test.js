<<<<<<< HEAD
const obj = {firstName:"toto", age:45};
const array = [obj,["blue", "red", "yellow"],1, "titi", 2];
// const [a,...b] = array;
//console.log(b);
 //const obj1 = {lastName:"titi",age:2,...obj};
//console.log(obj1)
//console.log(obj)
// const {firstName} = obj;
//console.log(firstName)
//console.log(age)*
//const array = ["blue","red","yellow"];

// for(let i = 0; i < array.length; i++){
//     console.log(array[i])
// };
// for(let e in array){
//     console.log(array[e])
// }
// 
array.forEach(element => {
    console.log(element)
});
=======
// const titleCursorPosition = document.querySelector("#title-cursor-position");

// document.addEventListener("mousemove", (event) => {
//   titleCursorPosition.innerHTML = `X:${event.clientX} , Y:${event.clientY}`;
// });



// const str = "This website is for losers LOL!";
// function disemvowel(str) {
  
//   return str.replace(/o|a|i|u|e|O|A|I|U|E/g, "")
// }
// console.log(disemvowel(str));

// let nb = 39 ;
// let nbC = nb.toString();

// function persistence(num) {
//   function multiply(n){
//     return n.reduce(function(a,b){return a*b;});
// }
// var count =0; 

// while(num.toString().length > 1) {
//     num= num.toString().split("");
//     num = multiply(num);
//     count++;
//  }
//  return count;
// }
// let nbS = nb.toString().split("")
// //console.log(nbS[0]*nbS[1])

// let phrase = "is2 Thi1s T4est 3a";
// let p = phrase.split(' ');
// for(let i = 0; i < phrase.length; i++){
//   let numbers = parseInt(phrase[i]) ;
//   for(let i = 0; i < numbers.length; i++){
//     console.log(numbers[i])
//   }
//  }
//  let random =  Math.floor(Math.random()*(14-10));
//  let a = 0;
//  let h4 = document.querySelector('h4');
//  let image = document.querySelector('img');
// let timerId = setInterval( ()=>{
//   let random =  Math.floor(Math.random()*(15-10))
//    console.log(random)
//    image.src = `${random}.png`

// } , 2000);
// //console.log(random)
  
//    console.log()
function sayHello(userName) {
  console.log(`Hello, ${userName}`);
}

function sayWelcome(userName) {
  console.log(`Welcome, ${userName}`);
}

let phrase = "is2 Thi1s T4est 3a";
let p = phrase.split(' ');
for(let i = 0; i < phrase.length; i++){
  let numbers = parseInt(phrase[i]) ;
  for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i])
  }
 }
 

