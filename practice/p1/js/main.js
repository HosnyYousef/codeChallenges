function skipFives (numbers) {
  for (let i = 1; i < numbers; i++) {
  if (numbers%5 !== 0){
    console.log (i)
    }  
  }
}



function skipFives2 (n){
  for (let i = 1; i <= n; i++) {
  if (n%5 !== 0){
    console.log(i)
   } 
  }
}
skipFives2(15)

function takeInArray (arr) {
  if (arr[0] < arr[arr.length -1]){
    alert ("Hi")
  }else if (arr[0] > arr[arr.length -1]){
    alert ("Bye")
  }else{
    alert ("We close in an hour")
  }
}



function multiplyProduct (arr) {
  let product = 1
  alert (arr.filter ( x => product *= x))
}


function multiplyProduct2 (arr) {
  let product = 1
  arr.forEach (x => product *= x)
  alert (product)
}
multiplyProduct2([2,4,6])


function multiplyProduct3 (arr) {
  let product = 1
  arr.forEach (x => product *= x)
  alert(product)
}
multiplyProduct3 ([2,4,6])


function returnNewArr (n) {
  if (arr%2 ===0){
    return ([arr])
  }
}


function onlyEvens(nums){
  let evens = []
  //return a new array containing even numbers
  //so we are going to create a new array using literal notation (an empty array to store all the even values)

  nums.forEach( n => {
      if(n % 2 === 0){
          evens.push(n)
      }
  })
//we have to loops through the nums array (we can use forEach)
//we need to take in each of the elements (we will call it n)
//we need to see if the number is even, when the number is even, we push it into the array 


  return evens
}
//then we return the new array

console.log( onlyEvens([1,2,3,4,5,6]) )
// we want to see it




const toFreud = str => str === '' ? '' : str.split(' ').map(e => 'sex').join(' ')






const toFreud2 = string => '' ? '' : string.split(' ').map(n => 'sex').join (' ')




const toFreud3 = string => '' ? '' : string.split(' ').map(n => 'sex').join(' ')





const toFreud4 = string => '' ? '' : string.split(' ').map(n => 'sex').join('')




function toFreud5 (string){
  return '' ? '' : string.split(' ').map(x => 'sex').join('')
}

const toFreud = string => string === '' ? '' : string.split(' ').map(x => 'sex').join (' ')


function squareOrSquareRoot(array) {
  return array; 
}

const squareOrSquareRoot = array => array%2 === 0 : array : Math.sqrt(x => array *2)

