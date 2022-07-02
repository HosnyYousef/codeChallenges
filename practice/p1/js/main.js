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




let woof = true
alert (woof)



let favColor = 'red'
favColor = 'blue'
console.log (favColor)



function booleanAndString (b, string) {
  if (b){
    alert(string)
  }else{
    console.log(string)
  }
}



const booleanAndString2 = (b, string) => b ? alert(string): console.log(string)



function fizzbuzz (n) {
  for (let i=1; i<=n; i++){
    if (i%3 ===0){
      console.log('fizz')
    }else if (i%5 ===0){
      console.log('buzz')
    }else if (i%3 === 0 && i%5=== 0){
      console.log ('fizzbuzz')
    }else{
      return (i)
    }
  }
}




function fizzbuzz2 (n) {
  for (let i=1; i<=n; i++){
    if (i%3 === 0) {
      console.log ('fizz')
    }else if (i%5 === 0) {
      console.log ('buzz')
    }else if (i%3 === 0 && i%5 === 0){
      console.log ('fizzbuzz')
    }else{
      console.log (i)
    }
  }
}





let movies = ['batman', 'spiderman', 'superman']

//wrong:
// movies[0] = woof

let firstMovie = movies[0]

let arrLength = movies.length 
console.log (arrLength)



