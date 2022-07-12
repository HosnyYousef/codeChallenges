function onlyEvens (arr){
    let evens = []

    arr.forEach (x => {
        if (x%2 === 0){
            evens.push (x)
        }
    })
        return evens
}
console.log (onlyEvens([1,2,3,4,5,6]))


function fizzBuzz (n) {
    for (let i=1; i<=n; i++){
        if (i%3 === 0 && i%5 === 0){
            console.log ("FizzBuzz")
        }else if (i%3 === 0){
            console.log ("Fizz")
        }else if (i%5 === 0){
            console.log ("Buzz")
        }else{
            console.log (i)
        }
    }
}


let movies = ['woof', 'dog', 'bark']

let firstMovie = movies[0]

let movieLength = movies.length
console.log (movieLength)

let lastElement = movies [movies.length -1]


// ------------------

let movieTitles = ['barkLikeADog', 'woof', 'dog']

for (let i=0; i< movieTitles.length; i++){
    document.querySelector('h2').innerText += movieTitles[i]
}

let numbers = [20, 40, 60]

numbers.forEach ( x => x += 3)

let nums = [10,20,30]
    nums.forEach ((item, i) => {
        nums[i] = item + 3
    })

    forEach((element, index) => { /* ... */ })






