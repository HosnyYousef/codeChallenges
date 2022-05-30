// const rock = document.querySelector('.rock')
// const scissor = document.querySelector('.scissor')
// const paper = document.querySelector('.paper')
// const results = document.querySelector('.results')
// const reset = document.querySelector('.reset')


// let userChoice = [rock,paper,scissor]
// let robotChoice = Math.random()


// function rockButtonClicked(){
//   rock.addEventListener('click', event => {
//     console.log(event.target.value)
//   })
// }

// function scissorButtonClicked(){
//   scissor.addEventListener('click', event => {
    
//   })
// }

// function paperButtonClicked(){
//   paper.addEventListener('click', event => {
    
//   })
// }
// let compare = function(userChoice, robotChoice){
//     if(userChoice === robotChoice){
//         return "Tie! Play again!";
//     }
//     else if(userChoice === "rock"){
//         if(robotChoice === "scissors"){
//             return "rock wins"
//         }
//         else if(robotChoice === "paper"){
//             return "paper wins";
//         }
//     }
//     else if(userChoice === "paper"){
//         if(robotChoice ==="scissors"){
//             return "scissors win"
//         }
//         else if(robotChoice ==="rock"){
//             return "paper wins";
//         }
//     }
//     else if(userChoice ==="scissors"){
//         if(robotChoice ==="paper"){
//             return "scissors win"
//         }
//         else if(robotChoice ==="rock"){
//             return "rock wins";
//         }
//     }
    
// }
// compare(userChoice, robotChoice)



// ==========================================================================================



// DEFINING BUTTONS AND PUTTING THEM INTO ARRAY
const rock = document.querySelector('.rock')
const scissor = document.querySelector('.scissor')
const paper = document.querySelector('.paper')
const playerOptions = ['rock','paper','scissor']
const computerOptions = ['rock','paper','scissor']
const confirm = document.querySelector('.confirm')
const result = document.querySelector('.results')
const reset = document.querySelector('.reset')


// // EVENT LISTENER
// playerOptions.forEach(option => {
//     option.addEventListener('click', async function(){
//         // const choiceNumber = Math.floor(Math.random()*3);
//         // const computerChoice = computerOptions[choiceNumber];
//         // winner(option.innerText, computerChoice)
//       console.log('CLICK');
//       alert('WORKING');
//       const res = await fetch('/api');
//       const data = await res.json();
//       document.querySelector('.results').innerText = data.name;
//       console.log(data);
//     })
// })

rock.addEventListener('click', _ => {
  console.log('CLICK');
  alert('CLICKING');
   const res = await fetch('/api');
    const data = await res.json();
    document.querySelector('.results').innerText = data.name;
    console.log(data);
})



// WIN CONDITIONS 
const winner = (player, computer) => {
    player = player.toLowerCase()
    computer = computer.toLowerCase()
    if(player === computer){
        result.textContent = 'Tie'
    } else if (player === 'rock') {
        if(computer === 'paper'){
            result.textContent = 'Computer Won';
        } else {
            result.textContent = 'Player Won';
        }
    } else if (player === 'scissor') {
        if(computer === 'rock'){
            result.textContent = 'Computer Won';
        } else {
            result.textContent = 'Player Won';
        }
    } else if (player === 'paper') {
        if(computer === 'scissor'){
            result.textContent = 'Computer Won';
        } else {
            result.textContent = 'Player Won';
        }
    }
}

