function onlyEvens (arr) {
  let evens = []

  arr.forEach (x => {
    if (x%2 === 0){
      evens.push(x)
    }
  })
    return evens
}
console.log (onlyEvens([1,2,3,4,5,6]))



booleanAndString = (b, string) => b ? alert (string): console.log (string)



function fizzBuzz (n){
  for (let i=1; i <= n; i++){
    if (i%3 ===0){
      console.log ('fizz')
    }else if (i%5 === 0){
      console.log ('buzz')
    }else if (i%3 ===0 && i%5 === 0){
    console.log ('fizzbuzz')  
    }else{
      console.log (i)
    }
  }
}



let movies = ['In It TO Win It', 'Fight To The Finish', 'Worldwide Cheersmack']
let firstMovie = movies[0]
let arrLength = movies.length
console.log(arrLength)


let lastElement = movies[ movies.length - 1]