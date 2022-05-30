function countPositivesSumNegatives(input) {
    return input && input.length ? input.reduce((prev,curr) => ( curr > 0 ? prev[0] = prev[0] + 1 : prev[1] = prev[1] + curr, prev), [0,0]) : []
  }


  

  function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
      return [];
    
    var positive = 0;
    var negative = 0;
    
    for (var i=0, l=input.length; i<l; ++i)
    {
      if (input[i] > 0)
        ++ positive;
      else
        negative += input[i];
    }
    
    return [positive, negative];
}

