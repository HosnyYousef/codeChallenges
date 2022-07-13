// function onlyEvens (arr) {
//     let evens = []

//     arr.forEach (x => {
//         if (x%2 ===0){
//             evens.push (x)
//         }
//     })
//         return evens
// }

// console.log (onlyEvens([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]))


// function fizzBuzz (n) {
//     for (let i=1; i<=n; i++){
//         if (i%3 === 0 && i%5 === 0){
//             console.log ('fizzbuzz')
//         }else if (i%3 === 0){
//             console.log ('fizz')
//         }else if (i%5 === 0){
//             console.log ('buzz')
//         }else{
//             console.log (i)
//         }
//     }
// }
// fizzBuzz (100)

// let movies = ['woof', 'man', 'dog']

// for (let i=0; i<movies.length; i++){
//     document.querySelector('h2').innerText += movies[i]
// }

let nums = [10, 20, 30]

nums.forEach ((item, i) => {
    nums[i] = item + 3
})

console.log (nums)