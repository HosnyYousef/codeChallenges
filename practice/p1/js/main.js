function skippingFives (n){

  for (let i=1; i<=n; i++){
    if (i%5 !==0){
      console.log(i)
    }
  }
}

skippingFives (15)



function onlyEvens (arr){
  let evens = []

  arr.forEach (x => {
    if (x%2 === 0){
      evens.push(x)
    }
  })
    return evens
}

console.log (onlyEvens([1,2,3,4,5,6]))



let barkLikeADog = true
alert (barkLikeADog)

let favColor = 'red'
favColor = 'blue'
console.log (favColor)


function booleanAndString (b, string) {
  if (b){
    alert (string)
  }else{
    console.log (string)
  }
}


const booleanAndString2 = (b, string) => b ? alert(string) : console.log(string)


function fizz (n){

  for (let i=1; i<n; i++){
    if (n%3===0){
      console.log ("fizz")
    }else if (n%5 ===0){
      console.log ("buzz")
    }else if (n%3 === 0 && n%5 ===0){
      console.log ("fizzbuzz")
    }
  }
}