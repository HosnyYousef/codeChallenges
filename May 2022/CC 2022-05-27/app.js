noSpace = x => x.replace(/\s+/g, '')

// between the two back slashes "/" we but an escape character "\s" and a plus, just in case there are multiples in a row. And, a "g", and we'll replace them with single quotes ''.


function noSpace(x){
    return x.replace(/\s/g, '');
  }


  function noSpace(x){return x.split(' ').join('')}



  function noSpace(x){
    return x.replace(/ /g,'')
 }


 function noSpace(x){
    return x.replace(/\s+/g,'')
  }



  function noSpace(str){

    return str.replace(/\s/g, '');
    }
    
    
    //.replace(/\s/g, '') is the code to remove the whitespace in a string - \s is the 
    // regex for "whitespace", and g is the "global" flag, meaning match ALL \s (whitespaces).

    function noSpace(x){

    }