// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: array may be empty, in this case return 0.

function positiveSum(arr) {
  return arr.reduce((prev, current) => {
    if (current > 0) {
      return prev + current;
    }

    return prev
  }, 0)
}

// Sum using reduce who start a 0
// if the current is bigger than 0 than mean is position so add the value to the prev one
// if not return the prev





function positiveSum(arr) {
    let sum = 0
    for (let i=0; i < arr.length; i++){
      if(arr[i] > 0){
        sum += arr[i]
      }
    } 
    return sum
}


function positiveSum(arr) {
  
}


function positiveSum(arr) {
    var total = 0;    
    for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
      if (arr[i] > 0) {                   // if arr[i] is greater than zero
        total += arr[i];                  // add arr[i] to total
      }
    }
    return total;                         // return total
  }