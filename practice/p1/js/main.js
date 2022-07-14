
// function onlyEvens (arr) {
//     let evens = []

//     arr.forEach (x => {
//         if (x%2 ===0){
//             evens.push(x)
//         }
//     })
//         return evens
// }
// console.log(onlyEvens([1,2,3,4,5,6]))



let movies = ['dog', 'woof', 'barkLikeADog']

for (let i = 0; i < movies.length; i++){
    document.querySelector('h2').innerText += movies[i]
}

let num = [10, 20, 40]
let sum = 0

num.forEach ((item, x) => {
    sum += item 
})