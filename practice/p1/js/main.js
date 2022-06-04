

// // function skipFives (n1){
// //     for (let i = 1; i <= 5; i++) {
// //         if (n1%5 === 0){
// //         console.log (i);
// //         }
// //     }
// // }
// // skipFives(19)





// function skipFives (n1) {
//     for (let i = 1; i <= n1; i++) {
//         if (n1 % 5 !== 0){
//             console.log (i);
//         }
//     }
// }
// skipFives(15)




// function takesArray (arr) {
//     if (arr[0] < arr [ arr.length - 1] ) {
//         alert ('Hi')
//     }else if
//         (arr[0] > arr [ arr.length - 1] ){
//             alert ('bye')
//     }else{
//         alert("we close in an hour")
//     }
// }




// function takesArray (robot) {
//     if (arr[0] < arr[arr.length -1])
// }



// const stringToNumber = function(str){
//    return parseInt(str);
//   }


// const stringToNumber2 = str => parseInt(str)

function makeNegative(num) {
    if (num < 0){
        return (num)
    }else if (num * -1){
    }
  }

  const makeNegative2 = num => (num < 0) ? num : (num * -1)





  function makeNegative(num) {
      if (num < 0){
          return (num)
      }else{
          return (num * -1)
      }
  }

  




function even_or_odd(number) {
    if (number%2 === 0){
        return ('even')
    }else{
        return ('odd')
    }
}


const even_or_odd2 = number => (number%2 === 0) ? 'even' : 'odd'
        
const even_or_odd3 = number => number%2 ? 'even' : 'odd'



function makeNegative(num) {
    if (num < 0) {
        return (num)
    }else{
        return (num * -1)
    }
  }



  function squareOrSquareRoot(array) {
    return array.length; 
  }


  const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]



function squareOrSquareRoot(array) {
    return array
  }

  function squareOrSquareRoot(array) {
    if (array.map (x => Math.sqrt(x) % 1) ){
        return (x * x)
    }else{
        return (Math.sqrt(x))
    }
  }



  squareOrSquareRoot = array => array.map(x => Math.sqrt(x) % 1 ? x * x : Math.sqrt(x))






  function calcHypotenuse(a, b) {
    return (Math.sqrt((a * a) + (b * b)));
  }
  
  console.log(calcHypotenuse(3, 4));
  // expected output: 5
  
  console.log(calcHypotenuse(5, 12));
  // expected output: 13
  
  console.log(calcHypotenuse(0, 0));
  // expected output: 0
  




  function makeNegative(num) {
    if (num < 0) {
        return (num)
    }else{
        return (num * -1)
    }
  }

  Syntax
// Arrow function
map((element) => { /* ... */ })
map((element, index) => { /* ... */ })
map((element, index, array) => { /* ... */ })

// Callback function
map(callbackFn)
map(callbackFn, thisArg)

// Inline callback function
map(function(element) { /* ... */ })
map(function(element, index) { /* ... */ })
map(function(element, index, array){ /* ... */ })
map(function(element, index, array) { /* ... */ }, thisArg)




function stringToArray(string){

	// code code code

}



Syntax
split()
split(separator)
split(separator, limit)



function stringToArray(string){
    return string.split(' ');
  }




const stringToArray = string => string.split(' ');



const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]


Syntax
split()
split(separator)
split(separator, limit)


Array.prototype.filter()
The filter() method creates a new array with all elements that pass the test implemented by the provided function.


  const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

  const result = words.filter(word => word.length > 6);
  
  
  console.log(result);
  // expected output: Array ["exuberant", "destruction", "present"]


  Syntax
  // Arrow function
Using this one:
  filter((element, index) => { /* ... */ } )


  let stopwatch ■ {}

stopwatch.currentTime = 12

stopwatch.tellTime = function(time){

console.log(`The current time is ${time}.`)
}

stopwatch.tellTime(stopwatch.currentTime)
