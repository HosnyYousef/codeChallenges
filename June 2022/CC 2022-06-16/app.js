function abbrevName(name) {
    [first, last] = name.toUpperCase().split(' ');
    return first[0] + '.' + last[0];
  }


  function abbrevName(name){

    return name.split(' ').map(i => i[0].toUpperCase()).join('.')

}


function abbrevName(name){
    return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
  }


// TRAIN:
  function abbrevName(name){

    // code away

}


