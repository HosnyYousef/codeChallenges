function skippingFives (n){
  for (let i=1; i<n; i++) {
  if (i%5 !==0) {
    console.log(i)
    }
  }
}

skippingFives(15)




function skippingFives2 (n){
  for (let i=1; i<=n; i++){
  if (i%5 !==0){
    console.log (i)
    }
  }
}


function onlyEvens (arr) {
  let evens = []

  arr.forEach (n => {
    if (n%2 === 0){
      evens.push (n)
    }
  })
  return evens
}
console.log (arr([1,2,3,4,5,6]))


function onlyEvens2 (arr) {
  let evens = []

  arr.forEach (n => {
    if (n%2 === 0){
      evens.push (n)
    }
  })
    return evens
}

console.log (onlyEvens2([1,2,3,4,5,6]))




let woof = woof2
woof = true





let duck = true
alert (duck)


function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
      }
  }
  return sum;
}