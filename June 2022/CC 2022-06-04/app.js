

  function firstNonConsecutive(arr) {
    for (let i = 0; i < arr.length - 1; ++i) {
      if (arr[i] + 1 !== arr[i + 1]) {
        return arr[i + 1]
      }
    }
    return null
  }


  function firstNonConsecutive (arr) {
    let result = arr.find((val, index) => val !== index + arr[0]);

    return (Number.isInteger(result)) ? result : null;
}


function firstNonConsecutive(arr){
    var out = null;
    for(var i = 1; i < arr.length; i++){
      if((arr[i] - arr[i - 1]) != 1){
        out = arr[i];
        break;
      }
    }
    return out;
  }

  function firstNonConsecutive (arr) {
    let fnc = arr.find((x,y) => x !== y + arr[0])
    
    return Number.isInteger(fnc) ? fnc : null;
  }


// WRONG:
//     function firstNonConsecutive (arr) {
//         return (arr.length > 2 || let (i=0; i > arr.length; i++) ?  Math.max [let (i=0; i > arr.length; i++) (...arr) ) : null
//       }
    