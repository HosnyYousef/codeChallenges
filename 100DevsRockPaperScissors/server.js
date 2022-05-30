const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');


const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  
  // SERVER SIDE MATH.RANDOM 
  else if (page == '/api') {
     
     
    let computerChoice = Math.random()*3
    if (computerChoice >= 2) {
      computerChoice = 'rock'
    } else if (computerChoice >= 1) {
      computerChoice = 'paper'
    } else {
      computerChoice = 'scissors'
    }
    
    res.writeHead(200, {'Content-Type': 'application/json'});
    const objToJson = {
      name: computerChoice
    }
    res.end(JSON.stringify(objToJson));
    
    // if('student' in params){
    //   if(params['student']== 'leon'){
    //     res.writeHead(200, {'Content-Type': 'application/json'});
    //     const objToJson = {
    //       name: "leon",
    //       status: "Boss Man",
    //       currentOccupation: "Baller"
    //     }
    //     res.end(JSON.stringify(objToJson));
    //   }//student = leon
    // }//student if
  }//else if
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  } //else{
  //   figlet('404!!', function(err, data) {
  //     if (err) {
  //         console.log('Something went wrong...');
  //         console.dir(err);
  //         return;
  //     }
  //     res.write(data);
  //     res.end();
  //   });
  // }
});

const PORT = process.env.PORT || 8000;

server.listen(PORT, _ => 'Server is running . . .');


// PASTE MAYANWOLFE'S REFACTORED VERSION HERE

// const http = require('http');
// const fs = require('fs')
// const url = require('url');
// const querystring = require('querystring');
// const figlet = require('figlet')

// const server = http.createServer((req, res) => {

//   const readWrite = (file, contentType) => {
//   fs.readFile(file, function(err, data) {
//     res.writeHead(200, {'Content-Type': contentType});
//     res.write(data);
//     res.end();
//   });
// }


//   const page = url.parse(req.url).pathname;
//   const params = querystring.parse(url.parse(req.url).query);
//   console.log(page);

//   switch(page) {
//     case '/':
//       readWrite('index.html', 'text/html')
//       break;
//     case '/otherpage':
//       readWrite('otherpage.html', 'text/html')
//       break;
//     case '/otherotherpage':
//       readWrite('otherotherpage.html', 'text/html')
//       break;
    // case '/api':
    //  let flipResult = 'Type flip into the input box' 
    //  if (params['student'] == 'flip') {
    //   flipResult = Math.random() <= .5 ? 'heads' : 'tails'
    //  }
    //   res.writeHead(200, {'Content-Type': 'application/json'});
    //   const objToJson = {
    //     name: flipResult
    //   }
    //   res.end(JSON.stringify(objToJson));
    //   break;
//     case '/css/style.css':
//       fs.readFile('css/style.css', function(err, data) {
//         res.write(data);
//         res.end();
//       });
//       break;
//     case '/js/main.js':
//       readWrite('js/main.js', 'text/  javascript')
//       break;
//     default:
//       figlet('404!!', function(err, data) {
//         if(err) {
//           console.log('Something went   wrong...');
//           console.dir(err);
//           return;
//         }
//        res.write(data);
//        res.end();
//       });
//       break;
//     }
// });

// server.listen(8000);
