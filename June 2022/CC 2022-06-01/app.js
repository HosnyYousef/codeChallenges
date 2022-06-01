function removeEveryOther(arr){
    //your code here
  }
  

  function removeEveryOther(arr){
    return arr.filter((_,index) => index % 2 == 0)
    }


    function removeEveryOther(arr){
  return arr.filter(function(elem, index) {
    return index % 2 === 0;
  });
}



function removeEveryOther(arr){
    var newArr=[];
  for (var i = 0; i < arr.length; i+=2){
    newArr.push(arr[i]);
    }
  return newArr;
  }



  function removeEveryOther(arr){
    //your code here
    for (var i = 1; i < arr.length;i++){
        arr.splice(i,1);
    }
    return arr;
  }


  const removeEveryOther = arr => arr.filter((item, i) =>  i % 2 == 0);



  