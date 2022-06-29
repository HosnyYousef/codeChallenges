function skippingFives (n) {
  for (let i=1; i<=n; i++){
  if (i%5 !== 0){
    console.log (i)
    }
  }
}
skippingFives(15)



function onlyEvens (arr) {
  let evens = []

  for (let i=0; i<arr.length; i++) {
  if (i%2 === 0) {
    console.log (i)
    }
    return evens
  }
}
onlyEvens (arr([1,2,3,4,5,6]))


function onlyEvens2 (arr) {
  let evens = []

  arr.forEach (n => {
    if (n%2 ===0){
      evens.push (n)
    }
   
  })
  return evens
}
console.log (onlyEvens2([1,2,3,4,5,6]))

function onlyEvens3 (arr) {
  let evens = []

  arr.forEach (n => {
    if (n%2===0){
      evens.push(n)
    }
  })
  return evens
}
console.log (onlyEvens3([1,2,3,4,5,6]))

let woof = true
alert (woof)

let woofCat = red
let red = blue
console.log(woofcat)


let favColor = 'red'
favColor = 'blue'
console.log (favColor)






function sumOfThree (n1, n2, n3, n4) {
  return (n1 + n2 + n3) / n4
}
sumOfThree (15, 20, 60, 2)


function firstPowerToSecond (n1, n2) {
  console.log (Math.pow(n1, n2))
}
firstPowerToSecond (20, 2)



Syntax
Math.pow(base, exponent)



