// let user = {}
// user.name = 'John'
// user.surname = 'Smith'
// user.name = 'John'
// delete user.name


// function isEmpty (obj){
//     for (let key in obj){
//         return false
//     }
//     return true
// }


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }


let sum = 0

for (let key in salaries) {
    sum += salaries[key]
}
alert(sum)