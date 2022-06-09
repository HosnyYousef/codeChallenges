function skippingFives (n) {
  for (let i = 1; i < n; i++) {
  if (n%5 !==0){
    console.log(i)
    }
  }
}


function hiBye (robot) {
  if (robot[0] < robot[robot.length -1]){
    alert ('Hi')
  }else if (robot[0] > robot[robot.lenth -1]){
  alert ('bye')
}else{
  alert ('we close in an Hour')
  }
}


function takeArray (arr) {
  let product = 1
  arr.forEach (num => product *=num )
  alert (product)
}
takeArray([10,2,3]
  
  
  
function woof (arr) {
  let product = 1
  arr.forEach (num => product *= num)
  alert (product)
}
woof ([10, 20, 30])
 


