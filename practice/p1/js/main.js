// 


// function isEmpty (obj) {
//     for (let key in obj){
//         return false
//     }
//         return true
// }

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }

//   let sum = 0
//   for (let key in salaries){
//     sum += salaries[key]
//   }

//   console.log(sum)

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

function multiplyNumeric (obj) {
    let total = 1
    
    for (let key in obj){
        total = obj[key] *= 2
    }
}

console.log (total)

console.log(typeof 42);
// expected output: "number"

console.log(typeof 'blubber');
// expected output: "string"

console.log(typeof true);
// expected output: "boolean"

console.log(typeof undeclaredVariable);
// expected output: "undefined"
