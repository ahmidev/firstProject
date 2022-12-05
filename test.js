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