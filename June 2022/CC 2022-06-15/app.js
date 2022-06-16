
const well = x => {
    const good_count = x.filter(x => x == 'good').length;
    return good_count < 1 ? 'Fail!' : 
           good_count < 3 ? 'Publish!' : 'I smell a series!';
  }


function well(x) { 
    let num = 0; 
    for (let i = 0; i < x.length; i++) { 
        x[i] === 'good' ? num++ : num; 
    } if (num > 2) { 
        return 'I smell a series!'; } 
        else if (num >= 1 && num <= 2) {
             return 'Publish!'; 
            }else{ 
                return 'Fail!'; 
            } 
        }


//TRAIN:
function well(x){

}


//WRONG:


function well(x){
    let ideas = 0
    for (let i = 0; i < x.length; i++){
    if (x[i] = 2 * 'good'){
      return ('publish')
    }else if (x[i] = 2 *< 'good'){
      return ('I smell a series')
      }else{
        return ('Fail')
      } 
    }
  }

function well(x){
    let count = 0
    
    for (let i = 0; i < x.length; i++){
    if (x.[i] = 'good' < 2)
    }
  }


