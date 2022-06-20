function findNeedle(haystack) {
    return "found the needle at position " + haystack.indexOf("needle");
  }


  const findNeedle = haystack => `found the needle at position ${haystack.indexOf('needle')}`;


function findNeedle(haystack) {
    let a = haystack.indexOf('needle');
    return `found the needle at position ${a}`
  }


function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf('needle')}`;
}

//TRAIN:
function findNeedle(haystack) {
    // your code here
  }


//Wrong:

function findNeedle(haystack) {
    let found = haystack.find(h => h = ("needle")){
      return ("found the needle at position ") found.indexOf("needle")
    }
  }
