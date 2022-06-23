function skipFives (n){
    for (let i = 1; i < n; i++) {
    if (i%5 !== 0){
            console.log(i)
        }   
    }
}
skipFives (15)


function multiplyNumb (arr) {
    let product = 1

    arr.forEach (x => product *= x)
    alert (product)       
}
multiplyNumb (15, 20, 25)


function onlyEvens (arr) {
    let evens = 0

    arr.forEach (x => {
    if (x%2 ===0){
        evens.push (x)
        }    
    })
    return evens
}
console.log (arr([2,4,6,8,10]))




function onlyEvens2 (arr) {
    let evens = []

    arr.forEach (x => {
        if (x%2 ===0){
            evens.push(x)
        }
    })
    return evens
}
console.log (arr([2,4,6,8,10]))

let woof = woof2

const woof2 = x => dogman ? "true" : "false"

let duck = true
alert (duck)

let haveADuck = true
alert (haveADuck)




function postiveSum (arr) {
    return arr.reduce((prev, current) => {
        if (current > 0) {
            return prev + current;
        }
        return prev
    }, 0)
}


function postiveSum2 (arr) {
    return arr.reduce ((prev, current) => {

    })
}




function positiveSum(arr) {
  return arr.reduce ((prev, current) {

  })
}


function positiveSum(arr) {
    return arr.reduce ((prev, current) => {

    })
}




function positiveSum(arr) {
    return arr.reduce ((prev, current) => {
        if (current > 0){
            return prev + current
        }
        return prev
    }, 0)
}



function positiveSum(arr) {
    return arr.reduce ((prev, current)=> {
        if (current > 0){
            return prev + current
        }
            return prev
    },0)
}

arr.reduce (x => y , 0)


function positiveSum(arr) {
    return arr.reduce((prev, current) => {
        if (current > 0){
            return prev + current
        }
            return prev
    }, 0)
}




function positiveSum(arr) {
    return arr.reduce((prev, current) => {
        if (current > 0){
            return prev + current
        }
            return prev
    }, 0)
}


function positiveSum(arr) {
    let sum = 0

    for (let i = 0; i < arr.length; i++) {
    if (arr[i]> 0){
        sum += arr[i]
        }
    }
    return sum
}


function positiveSum(arr) {
  let sum = 0

  for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0){
      sum += arr[i]
    }
  }
  return sum
}



let user = []
user.name = "John"
user.surname = "Smith"
user.name = "Pete"
delete user.name

let user = {}
user.name = "John"
user.surname = "Smith"
user.name = "Pete"
delete user.name

function isEmpty (obj) {
    for (let key in obj) {
        return false
    }
        return true
}





function isEmpty (obj) {
    for (let key in obj) {
        return false
    }
        return true
}


function isEmpty (obj) {
    for (let key in obj){
        return false
    }
        return true
}

for (let prop in obj)


function isEmpty (obj) {
    for (let key in obj) {
        return false
    }
        return true
    }

let object = {}
user.name = "John"
user.surname = "Smith"
user.name = "Pete"
delete user.name





function isEmpty (obj) {
    for (let key in obj){
        return false
    }
        return true
}



function isEmpty (obj) {
    for (let key in obj){
        return false
    }
        return true
}