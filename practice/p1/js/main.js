function onlyEvens (arr) {
    let evens = []

    arr.forEach (x => {
        if (x%2 === 0){
            return evens.push(x)
        }
    })
        return evens
}

console.log (onlyEvens([1,2,3,4,5,6]))

function fizzBuzz (n){
    for (let i=1; i<=n; i++){
        if (i%3 === 0 && i%5 ===0){
            console.log ('fizzbuzz')
        }else if (i%3 === 0){
            console.log ('fizz')
        }else if (i%5 ===0){
            console.log ('buzz')
        }else{
            console.log (i)
        }
    }
}


let movies = ['superman', 'batman', 'woofman']

let firstMovie = movies[0]

let movieLength = movies.length
console.log (movieLength)

let lastElement = movies [movies.length -1]



let movieTitles = ['bark', 'woof', 'dog']
    for (let i=0; i <= movieTitles; i++){
        document.querySelector('h2'.innerText (i))
    }



let movieTitles2 = ['dog', 'man', 'woof']
 for (let i=0; i< movieTitles2.length; i++){
    document.querySelector('h2').innerText += movieTitles2 [i]
 }

 let arrOfNumb = [1,2,3,4,5]
 for (let i=0; i<arrOfNumb; i++){
    arrOfNumb.map (x => x + 3)
 }



 let nums = [2,3,5]

 nums.forEach ((item, i) =>{
    nums[i] = item + 3
 })

 