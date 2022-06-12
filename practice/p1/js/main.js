function skillFives (n) { 
  for (let i = 1; i <= n; i++) {
  if (n%5 !== 0){
    console.log(i)
    }
  }
}
skillFives(50,20,30)

function takeInArray (arr) {
  if (arr [0] < arr[arr.length -1]){
    alert ('HI')
  }else if (arr [0] > arr[arr.length-1]){
    alert ('BYE')
  }else{
    alert ('We close in an hour')
  }
}
takeInArray (40, 50, 13)


function multiplyArr (arr) {
  let product = 1
  let arr.map [x => product *= x]{
  alert (product)
  }
}


function takeInArray2 (arr) {
  let product = 1
  let arr.forEach (x => product *= x)
  alert (product)
}

function takeInArray3 (arr){
  let product = 1
  arr.forEach (x =>product *= x)
  alert (product)
}
takeInArray3 (10,30,40)

function takeInArray4 (arr){
  let product = 1
  arr.map (x => product *= x)
  alert (product)
}
takeInArray4 (10, 40, 50, 100)


//psudeo code:
//

function newArr (numbers) {
  let newArray = numbers.length 
}

let evens = []

//---------------------------


function onlyEvens (numbers) {
  let even = []

  numbers.forEach(n => {
    if (n % 2 === 0){
      even.push(n)
    } 
  })
  return even
}
console.log (onlyEvens([1,2,3,4,5,6]))


function onlyEvens2 (numbers) {
  let evens = []

  array.forEach(n => {
    if (n % 2 === 0){
      evens.push(n)
    }
  })
  return (numbers)
}

console.log ([1,2,3,4,5,6])



function onlyEvens3 (numbers) {
  let evens = []

  numbers.forEach(n => {
    if (n % 2 === 0){
      evens.push (n)
    }
  })
  return (numbers)
}

console.log ([1,2,3,4,5,6])


function onlyEvens4 (numbers) {
  let evens = []

  numbers.forEach (n => {
    if (n%2 === 0){
      evens.push(n)
    }
  })
  return evens
}

console.log ([1,2,3,4,5,6])







function squareOrSquareRoot(array) {
  return array; 
}




const squareOrSquareRoot = array => array.map(x => array%2 === 0) ? squareOrSquareRoot(array) : array.sqrt 

squareOrSquareRoot = array => array.map(x => Math.sqrt(x) % 1 ? x * x : Math.sqrt(x))


squareOrSquareRoot = array => array.map(x => Math.sqrt(x) % 1 ? x * x : Math.sqrt(x) )

function squareOrSquareRoot(array) {
  if (Math.sqrt(x) % 1){
    return (x * x)
  }else{
    return Math.sqrt(x)
  }
} 




function squareOrSquareRoot(array) {
  if (array.map (x => Math.sqrt(x)% 1)){
    return (x * x)
  }else{
    return (Math.sqrt(x))
  }
}


class Kata {
  static getVolumeOfCuboid(length, width, height) {
    // your code here
  }
}

const kata = {
  getVolumeOfCuboid : (length, width, height) => length * width * height
}


function toFreud(string) {
  return string.join(" ")
  }