function skippingFives (n){
  for (let i=0; i<=n; i++){
    if (i%5 !==0){
      console.log (i)
    }
  }
}
skippingFives (15)





function onlyEvens (arr){
  let evens = []

  arr.forEach (x => {
    if(x%2 ===0){
      evens.push (x)
    }
  })
  return evens
}
console.log (arr([1,2,3,4,5,6]))



const duckWoofs = true
alert (duckWoofs)


let favColor = "red"
favColor = "blue"
console.log (favColor)



function booleanAndString (x, string){
  if (x (true)) {
    alert (string)
  }else if (x(false)){
    console.log (string)
  }
}



















