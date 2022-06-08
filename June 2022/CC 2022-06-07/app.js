function squareSum(numbers){

}


const squareSum = numbers => numbers.reduce((acc, curr) => acc + Math.pow(curr, 2), 0);



function squareSum(numbers){
    return numbers.map(x => x * x).reduce((prev,curr) => prev + curr, 0)
    }

    


    function squareSum(numbers){
        return numbers.reduce(function(sum, n){
          return (n*n) + sum;
        }, 0)
      }




      function squareSum(numbers){
        return numbers.reduce((sum,num) => sum + (num * num), 0);
      }



      function squareSum(numbers){
        var sum = 0;
        numbers.forEach(function(n) {
          sum += n * n
        });
        return sum;
      }