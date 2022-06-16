function skipFives (n) {
  for (let i = 1; i <= n; i++) {
  if (n%5 !== 0){
    console.log(i)
    }
  }
}

function hiBye (arr) {
  if (arr[0] < arr[arr.length -1]){
    alert ('Hi')
  }else if (arr[0] > arr[arr.length -1]){
    alert ('bye')
  }else{
    alert ('We close in an hour')
  }
}

function multiplyNum (arr) {
  let product = 1

  arr.forEach(n => product *= n)
    alert(product)
}
multiplyNum(2,4,6)


function onlyEvens (arr) {
  let evens = []

  for (let i = 0; i < arr.length; i++) {
  if (i%2 === 0){
    return evens
    }
  }
}

function onlyEvens2 (arr) {
  let evens = []

  arr.forEach (n => {
    if (n%2 === 0){
      return evens
    }
  })
  evens (i)
}


function onlyEvens3 (arr) {
  let evens = []

  arr.forEach(n => {
    if (n%2 ===0){
      arr.push (n)
    }
  })
  return evens
}
console.log (arr([1,2,3,4,5,6]))

