const digitize = (n) => n.toString(10).split('').map(Number).reverse ()

function digitize(n) {
    //code here
  }



  function digitize(n) {
    return String(n).split('').map(Number).reverse()
  }

  function digitize(n) {
    return Array.from(String(n), Number).reverse();
  }

  function digitize(n) {
    return n.toString().split("").reverse().map(Number);
  }
