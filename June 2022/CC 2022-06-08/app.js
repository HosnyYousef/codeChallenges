function mergeArrays(arr1, arr2) {
  
}


function mergeArrays(arr1, arr2) {
    return Array.from(new Set(arr1.concat(arr2).sort((x,y) => x - y)))
}

    
function mergeArrays(arr1, arr2) {
    return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))));
}


function mergeArrays(a, b) {
    return [...new Set(a.concat(b))].sort((a,b)=>a-b)
  }



//my wrong solution:
//   function mergeArrays(arr1, arr2) {
//     const arr3 = arr1.concat(arr2)
//     let unique = [...new Set(arr3)]
//     return(unique)
//   }
  
  
  //combine arrays
  //remove duplicate results

























