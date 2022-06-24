function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
  }


  // accepts indefinite number of arrays
function arrayPlusArray(...arrays) {
    return [].concat(...arrays).reduce((a,b) => a+b,0)
  }


  function arrayPlusArray(arr1, arr2) {
    let arr = [...arr1, ...arr2];
    return arr.reduce((a, b) => a + b);
  }



//my solution right:
function arrayPlusArray(arr1, arr2) {
    let arr3 = arr1.concat(arr2)
    
    const sum = 0
    const sumTotal = arr3.reduce (
      (prev, current) => prev + current, sum) 
    return (sumTotal)
  }

  //train:

  function arrayPlusArray(arr1, arr2) {
    return arr1 + arr2; //something went wrong
  }