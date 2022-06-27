function twoSort(s) {
    return s.sort()[0].split('').join('***');
  }

  function twoSort(s) {

}


// 1 Plain solution
function twoSort(s) {
    const last = s.sort(
      (a, b) => a < b ? -1 : 1
    )[0];
    let res = last[0];
    
    for(let i = 1; i < last.length; i++) {
      res += "***" + last[i];
    }
    
    return res;
  }
  
  // 2 Optimized solution
  function twoSort(s) {
    const res = s.sort(
      (a, b) => a < b ? -1 : 1
    )[0];
    
    return res
      .split("")
      .join("***");
  }
  
  // 3 Clever solution
  function twoSort(s) {
    return s
      .sort()[0]
      .split``
      .join`***`;
  }
  
  // 4 Coding golf
  twoSort = s => [
    ...s.sort()[0]
  ].join('***')






//wrong attempts

function twoSort(s) {
    for (let key in s) {  
}
  s.sort().join('***')
  return s[0]
}



function twoSort(s) {
    let arr = s.split('')
  for (i=0; i< arr.length; i++){
    return arr.sort().join('***')
  } 
}

