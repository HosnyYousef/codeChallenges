function cubeRoot (n1) {
    console.log (Math.cbrt(n1).toFixed(4))
}
cubeRoot(50)

function summerMonth (month) {
    let monthLowerCase = month.toLowerCase ()
    if (monthLowerCase === 'june' || monthLowerCase === 'july' || monthLowerCase === 'august'){
        alert('YAY')
    }else{
        alert('Booo')
    }
}

function skipFives (n1) {
    for (let i = 1; n1 < 5; i++) {
        console.log [n1%5 !== 0];
    }
}

function skipFives (n1)
    for (let i = 1; i < n1; i++) 
    if (n1 % 5 !== 0){
        console.log [i];
    }
skipFives (15)


function skipFives (n1) {
    for (let i = 1; i < n1; i++) {
    if (n1%5 !==0){
        console.log [i]
        }
    }
}



function skipFives (n1) {
    for (let i = 1; i <= n1; i++){
        if (n1 % 5 !== 0){
            console.log [i]
        }
    }
}


function skipFives (n1){
    for (let i = 1; i <= n1 ; i++){
        if (n1 % 5 !== 0){
            console.log (i)
        }
    }
}


function even_or_odd(number) {
    if (number%2 == 0){
        return ('Even')
    }else{
        return ('odd')
    }
}

let even_or_odd = number => number%2 ? 'even' : 'odd'

let even_or_odd = number => number%2 === 0 ? 'even' : 'odd'

function sumOfDifferences(arr) {
    return arr.length < 1 ? Math.max (...arr) - Math.min (...arr) : 0
}

const sumOfDifferences = arr => arr.length < 1 ? Math.max (...arr) - Math.min (...arr) : 0


const stringToNumber = function(str){
    return parseInt(str);
  }




  function doubleInteger(i) {
    return i*2;
  }


 const doubleInteger = i => i*2



 function makeNegative(num) {
    for (let i = 0; i < num; i++) {
        if (num%2 === 0){
            return (i)
       }
    }
  }



  Math.abs('-1');     // 1
  Math.abs(-2);       // 2
  Math.abs(null);     // 0
  Math.abs('');       // 0
  Math.abs([]);       // 0
  Math.abs([2]);      // 2
  Math.abs([1,2]);    // NaN
  Math.abs({});       // NaN
  Math.abs('string'); // NaN
  Math.abs();         // NaN



  const stringToNumber = function(str){
    return parseInt(str);
  }


  const stringToNumber = str => parseInt(str)


  function makeNegative(num) {
    if (num < 0){
        console.log (num)
    }else{
        (num * -1)
    }
  }

  function even_or_odd(number) {
 
}


function even_or_odd(number) {
    if (number%2 == 0){
        return ('even')
    }else{
        return('Odd')
    }
}


const even_or_odd = number => number%2 == 0 ? 'even' : 'Odd'

const even_or_odd = number => number%2 ? 'even' : 'Odd'


function even_or_odd(number) {
    return number % 2 ? "Odd" : "Even"
  }
  
  function even_or_odd(number) {
    if (number%2 == 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }
  function even_or_odd(number) {
     return number % 2 === 0 ? 'Even' : 'Odd';
  }
  
  const even_or_odd = n => (n % 2) ? 'Odd' : 'Even';
  
  
  function makeNegative(num) {
    if (num < 0){
        return(num)
  }else{
      return (num * -1)
  }
}


function makeNegative(num) {
    return (Math.abs(-num))
  }


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



  