
function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    //Create a place to hold counter value
      var sheepCounter = 0;
      //loop number of sheep in array
      for( var i = 0; i < arrayOfSheep.length; i++) {
        //if sheep value is equal to true add one
        if(arrayOfSheep[i]=== true) {
          sheepCounter++;
        }
      }
      //return number of sheep
      return sheepCounter;
  }




function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}




function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    var num = 0;
    
    for(var i = 0; i < arrayOfSheep.length; i++)
      if(arrayOfSheep[i] == true)
        num++;
        
    return num;
  }


  function countSheeps(arrayOfSheep) {
    var count = 0;
    
    arrayOfSheep.forEach( function (sheep) {
      if (sheep)
        count++;
    });
    
    return count;
  }


  function countSheeps(arr) {
    return arr.filter(Boolean).length;
  }

  

// Train:

function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
  }

