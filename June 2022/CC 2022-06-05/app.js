
function fakeBin(x){
    return x.split('').map(y => y < 5 ? 0 : 1).join('')
  }





  function fakeBin(str){
    var newStr = "";
    for(var i=0;i<str.length;i++){
      if(Number(str[i])>=5){
        newStr += "1"
      }
      else{
        newStr += "0";
      }
    }
    return newStr;
  }




// WRONG:
// function fakeBin(x){
//     if (x.length > 5) {
//       return ('0')
//     }else{
//       return ('1')
//     }
//   }