function positiveSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        sum += arr[i];
        }
    }
    return sum;
  }


//or

  function positiveSum(arr) {
    return arr.reduce((prev, current) => {
      if (current > 0) {
        return prev + current;
      }
  
      return prev
    }, 0)
  }
  

  function positiveSum(arr) {
    let sum = 0
    
    for (let i=0; i<arr.length; i++){
      if (arr[i] > 0) {
        sum += arr[i]
      }
    }
     return sum
  }