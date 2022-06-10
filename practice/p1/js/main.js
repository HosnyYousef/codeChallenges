
squareOrSquareRoot = array => array.map(x => Math.sqrt(x) % 1 ? x * x : Math.sqrt(x))

function squareOrSquareRoot (array) {
  if (array.map(x => Math.sqrt(x) % 1)){
    return (x * x)
  }else{
    return (Math.sqrt(x))
  }
}

//We use modulous 1 to determine if there is a remainder
// then we're going to say, if the square root of x has a remainder, then we're going to square it (x * x), if not, we're going to get the square root of it (Math.sqrt(x))


Array.sort( (a,b)=>a - b )


let drink = {}

drink.brand = 'Gatorade'
drink.size = '20 fl oz'
drink.color = 'Yellow'
drink.hasAlchol = false
drink.pour = function(){
console.log('Now it is all over the floor')
}

let drink = {
  brand: 'Gatorade',
  size: '20fl oz1',
  }
  
  
  let drink = {
    drink.brand: 'Gatorade',
    size: '20fl oz1',
    }


    let drink = {
      brand: 'Gatorade',
      size: '20fl oz',      
      pour: function(){      
        console.log(`I love my ${this.brand}`)
      }  
    }