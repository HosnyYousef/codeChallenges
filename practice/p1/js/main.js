function skipFives (n) {
    for (let i = 1; i <= n; i++) {
    if (n%5 !==0){
        console.log(i)
    }        
 }
}
skipFives(15, 2, 4, 6)


function skipFives2 (n){
    for (let i = 1; i <= n; i++) {
    if (i%5 !==0){
        console.log(i)
     }   
    }
}

function multiplyEachNumber (number){
    let product = 1

    let number.forEach (x => product * x){
        alert (product)
    }
}
multiplyEachNumber(15)




function multiplyEachNumber2 (number) {
    let product = 1

    number.forEach (x => product *= x)
    alert (product)
}

multiplyEachNumber2 (15)


function onlyEvens (arr) {
    let evens = arr

    evens.forEach (x => {
        if (x%2 === 0){
            evens.push(x)
        }
    })
    console.log ([1,2,3,4,5,6])
}


function onlyEvens2 (arr) {
    let evens = []

    evens.forEach (n => {
        if (n%2 ===0){
            evens.push(n)
        }
    })
    return evens
}
console.log (onlyEvens([1,2,3,4,5,6]))






function skipFives3 (n) {
    for (let i = 1; i < n; i++) {
    if (i%5 !== 0){
        console.log(i)
     }   
    }
}
skipFives3 (15, 20, 60)



function skipFives4 (n) {
    for (let i = 1; i <= n; i++) {
    if (i%5 !== 0) { 
        console.log(i)
     }
    }
}
skipFives4 (15)




function positiveSum(arr) {
  let postiveArr = arr.reduce (arr)

  postiveArr.reduce ((previousValue, currentValue) => { /* ... */ } )
}


function positiveSum2 (arr) {
    return arr.reduce((prev, current) => {
        if (current > 0) {
            return prev + current;
        }
    
        return prev
    }, 0)
}

function postiveSum (arr) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
    if (i>0){
        return total
     }
        
    }
}

function postiveSum (arr) {

}


function postiveSum (arr) {
    
}

function postiveSum (arr) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
    if (arr[i]>0){
        total += i
    }
        
    }
}



function postiveSum (arr) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
    if (arr[i]> 0)
        total += arr[i]
        
    }    
return postiveSum
}


function postiveSum (arr) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
    if (arr[i]>0)
        total += arr[i]
    }   
   return total
}



function postiveSum (arr) {
    let sum = 0
    
    for (let i = 0; i < array.length; i++) {
    if (arr[i]> 0){
    total += arr[i]
    }
        
    }
return sum
}


function positiveSum4 (robot) {
    let sum = 0

    for (let i = 0; i < array.length; i++) {
    if (robot[i]> 0){
    sum += robot[i]
        }
    }
return sum
}

function positiveSum5 (woofManBark) {
    let woofSum = 0

    for (let i = 0; i < array.length; i++) {
    if (woofManBark[i]> 0){
    woofSum += woofManBark[i]
        }    
    }
return woofSum
}


let user = {}

user.name = "John"
user.surname = "Smith"

user.name = "Pete"

delete user.name


let user = {}
user.name = "John"
user.surname = "Smith"
user.name = "Pete"
delete user.name

let user = {}
user.name = "John"
user.surname = "Smith"
user.name = "Pete"
delete user.name




let isEmpty = {}

if (isEmpty = {}){
    return ("true")
}else{
    return ("false")
}


let user = {
    name: "John",
    age: 30,
    isAdmin: true
  };
  
  for (let key in user) {
    // keys
    alert( key );  // name, age, isAdmin
    // values for the keys
    alert( user[key] ); // John, 30, true
  }


  function isEmpty2(obj) {
      for (let key in obj) {
          return false
      }
        return true
  }