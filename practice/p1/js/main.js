function skipFives (n) {
  for (let i = 1; i <= n; i++) {
  if (n%5 !== 0){
    console.log (i)
    }
  }
}

// mistake:
// I forgot the <= in the for-Loop


function hours (arr) {
  if (arr[0] < arr[arr.length -1]){
    alert('Hi')
  }else if (arr[0] > arr[arr.length -1]){
    alert('Bye')
  }else{
    alert ('We close in an hour')
  }
}

function multiNumsInArr(arr){
  let product = 1
  arr.forEach( num => product *= num )
  alert(product)
}
multiNumsInArr([10,2,3])



function multiNumsInArr(arr){
  let product = 1
  for(let i = 0; i < arr.length; i++){
  product *= arr[i]
  }
  alert(product)
}
multiNumsInArr([10,2,3])