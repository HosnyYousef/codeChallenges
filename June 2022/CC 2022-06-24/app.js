
function isVow(a){
    let l = a.length
    for (let i=0; i<l; ++i)
    {
      let char = String.fromCharCode(a[i])
      if ('aeiou'.indexOf(char) !== -1)
      a[i] = char;
    }
    
    return a;
  }


function isVow(a){
    for (var i=0, l=a.length; i<l; ++i)
    {
      var char = String.fromCharCode(a[i])
      if ('aeiou'.indexOf(char) !== -1)
      a[i] = char;
    }
    
    return a;
  }

  //one to practice
  const isVow = a => a.map(x=>'aeiou'.includes(y=String.fromCharCode(x)) ? y : x)



  const v={"97":"a","101":"e","105":"i","111":"o","117":"u"}
const isVow=a=>a.map(x=>v[x]||x)


//wrong

function isVow(a){
    if (a.toUpperCase() != a){
      let aLowerCase = a.toLowerCase ()
    }
  }