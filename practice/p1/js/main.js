let woof = 'humb'
alert(woof.charAt(1))



function checkForSummer(month){
    let monthLowerCase = month.toLowerCase()
    if(monthLowerCase === 'june' || monthLowerCase === 'july' || monthLowerCase === 'august'){
        alert('Yay')
    }else{
        alert('Boo')
    }
}