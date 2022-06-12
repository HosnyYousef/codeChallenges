
function gooseFilter (birds) {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    
    return birds.filter(word => !geese.includes(word))
    }


function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(b => !geese.includes(b));
};


function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter( bird => geese.indexOf(bird) < 0 );
  };


const GEESE = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
const gooseFilter = birds => birds.filter(bird => !GEESE.includes(bird));


Train:
function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    
    // return an array containing all of the strings in the input array except those that match strings in geese
  };