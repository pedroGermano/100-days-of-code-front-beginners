const number = [4, 6, 8, 12, 43, 23]




// function isEven(num){
//   if(num % 2 == 0){
//     return true
//   } else {
//     return false
//   }
// }

const newValues = number.filter((num) => num % 2 == 0)

console.log(newValues);