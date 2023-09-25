// let app = require('./app')
// console.log(app);

// const fs = require('fs').writeFileSync;
// fs('hello.txt','code now')
// console.log(__dirname)
// console.log(__filename)

// -----------------

// const http = require("http");
// http
//   .createServer((req, res) => {
//     res.write("<h1> Welcome to NASA </h1>");
//     res.end();
//   })
//   .listen(5000);

// -----------------

// package.json

// npm init

// const colors = require('colors')
// console.log('My name is Saurabh'.red);
// console.log('My name is Saurabh'.blue);
// console.log('My name is Saurabh'.green);
// console.log('My name is Saurabh'.yellow);
// console.log('My name is Saurabh'.black);

// delete node modules file then
// use npm install to install all modules
// -----------------

// do not push node_mod files into git
// use .gitignore

// -----------------

// Nodemon

// npm i nodemon -g

// console.log("Hi");

// use gitbash to run server  - nodemon index.js

// -----------------

// Create API
// const data = require('./data')
// const http = require('http')
// http.createServer((req, res)=>{
//     res.writeHead(200,{'Content-Type':'application\json'})
//     // res.write()
//     res.write(JSON.stringify(data))
//     res.end()
// }).listen(3000);

// -----------------
// taking commands from the users

// console.log('Hello dear how are you ?');
// console.log(process);

// used to take inputs from user
// console.log(process.argv);

// create file and write into it
// const fs = require('fs')
// const input = process.argv;
// fs.writeFileSync(input[2], input[3])

// create file or remove file

// const fs = require('fs')
// const input = process.argv;
// if(input[2] == 'add'){
//     fs.writeFileSync(input[3], input[4])
// }
// else if(input[2] == 'remove'){
//     fs.unlinkSync(input[3])
// }
// else{
//     console.log('Invalid input');
// }

// -----------------
// creating multiple files in a folder using NodeJS
// const fs = require('fs')
// const path = require('path')
// files is a empty folder created
// const dirPath = path.join(__dirname, 'files')
// console.log(dirPath);
// for(let i=0;i<5;i++){
//     fs.writeFileSync(dirPath+`/hello${i}.txt`, 'hello this is my file')
// }

// to list all the files
// fs.readdir(dirPath,(err, files)=>{
//     console.log(files);
//     console.log(err);
// });

// -----------------
// CRUD

// const fs = require('fs')
// const path = require('path')
// const dirPath = path.join(__dirname, 'crud')
// const filePath = `${dirPath}/saurabh.txt`
// console.log(filePath);

// Create
// fs.writeFileSync(filePath, 'This is my simple apple file')

// Read
// fs.readFile(filePath,'utf8',(err, item)=>{
//     console.log(item);
// })

// Update
// fs.appendFile(filePath,' this is new added sentence',(err)=>{
//     if (!err) console.log('file is updated')
// })

// Rename file
// fs.rename(filePath,`${dirPath}/BMW.txt`, (err)=>{
//     if (!err) console.log('file name is updated')
// })

// Delete file
// fs.unlinkSync(`${dirPath}/BMW.txt`)

// -----------------

// synchronus programming
// console.log('1st');
// console.log('2nd');
// console.log('3rd');
// -----------------

// Asynchronus programming
// console.log('1st');

// setTimeout(()=>{
//     console.log('2nd');
// }, 2000)

// console.log('last');

// -------------------------------------------------

// disadvantage of asynchronus
// let a = 10
// let b = 0

// setTimeout(()=>{
//     b=20
// })
// // b updated later

// console.log(a+b);

// -------------------------------------------------
// Handle asynchronus data

// let a = 10
// let b = 0

// use promises

// let waitingdata = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve(30)
//     },3000)
// }).then((data)=>{
//     console.log(a+data);
// })

// -----------------

// Express JS

// used to take request from browser from url

// const express = require('express')
// // console.log(express);
// const app = express()

// app.get('/',(req,res)=>{
//     const name = req.query.name || 'Guest';
//     console.log(name);
//     res.send(`Hello ${name}`)
// })

// app.get('/help',(req,res)=>{
//     const name = req.query.name || 'Guest';
//     console.log(name);
//     res.send('Hello ',name)
// })

// app.listen(3000)

// use this as website
// http://localhost:3000/help/?name=saurabh

// -----------------

// Create html webpage using response

// const express = require('express')
// // console.log(express);
// const app = express()

// app.get('/',(req,res)=>{

//     console.log(req.query.name);
//     // res.send(`Hello ${req.query.name}`)
//     res.send(`<h1>Hello ${req.query.name}</h1>
//     <a href='/help'>Login</a>

//     `)
// })

// app.get('/help',(req,res)=>{

//     res.send('welcome to help page')
// })

// app.listen(3000)

// -----------------

// show html page using nodejs

// const express = require("express");
// const path = require("path");

// const app = express();
// const publicPath = path.join(__dirname, "public");

// app.use(express.static(publicPath));

// app.listen(3000);

// make a public folder and a about.html file into it
// for root website use index.html
// use this link
// http://localhost:3000/about.html

// --------------------------------------------------------------------
// Remove file extension from url

// const express = require("express");
// const path = require("path");

// const app = express();
// const publicPath = path.join(__dirname, "public");

// app.use(express.static(publicPath));
// app.get('',(_, res)=>{

//     res.sendFile(`${publicPath}/index.html`)
// })

// app.get('/about',(_, res)=>{
//     res.sendFile(`${publicPath}/about.html`)
// })

// // this is for wrong url
// app.get('*',(_, res)=>{
//     res.sendFile(`${publicPath}/notfound.html`)
// })

// app.listen(3000);

// --------------------------------------------------------------------

// Template engine- (must make a views folder and ejs file inside it )

// const express = require("express");
// const path = require("path");

// const app = express();
// const publicPath = path.join(__dirname, "public");

// // must write this
// app.set('view engine','ejs')

// app.use(express.static(publicPath));
// app.get('',(_, res)=>{

//     res.sendFile(`${publicPath}/index.html`)
// })

// app.get('/about',(_, res)=>{
//     res.sendFile(`${publicPath}/about.html`)
// })

// app.get('/profile',(_, res)=>{
//     const user = {
//         name:'saurabh choudhary',
//         class: 12
//     }
//     res.render('profile',{user})
// })

// app.listen(3000);

// profile.ejs file code
{
  /* <h1> <%= user.name %> </h1>
<h2>i am in  <%= user.class %> </h2> */
}

// --------------------------------------------------------------------
// loop over in html using node

// const express = require("express");
// const path = require("path");

// const app = express();
// const publicPath = path.join(__dirname, "public");

// // must write this
// app.set('view engine','ejs')

// app.use(express.static(publicPath));
// app.get('',(_, res)=>{

//     res.sendFile(`${publicPath}/index.html`)
// })

// app.get('/about',(_, res)=>{
//     res.sendFile(`${publicPath}/about.html`)
// })

// app.get('/profile',(_, res)=>{
//     const user = {
//         name:'saurabh choudhary',
//         class: 12,
//         skill:['js','php','python']
//     }
//     res.render('profile',{user})
// })

// app.listen(3000);

// profile.ejs
{
  /* <h1><%= user.name %></h1>
<h2>i am in <%= user.class %></h2>
<ul>
  <% user.skill.forEach((val)=>{ %>
  <li><%= val %></li>
  <% }) %>
</ul> */
}

// --------------------------------------------------------------------

// common header

// const express = require("express");
// const path = require("path");

// const app = express();
// const publicPath = path.join(__dirname, "public");

// // must write this
// app.set("view engine", "ejs");

// app.use(express.static(publicPath));
// app.get("", (_, res) => {
//   res.sendFile(`${publicPath}/index.html`);
// });

// app.get("/profile", (_, res) => {
//   const user = {
//     name: "saurabh choudhary",
//     class: 12,
//     skill: ["js", "php", "python"],
//   };
//   res.render("profile", { user });
// });

// app.get("/login", (_, res) => {
//   res.render("login");
// });

// app.listen(3000);

// make common folder inside view folder and make header.ejs file inside it, we gonna show header in login file

// --------------------------------------------------------------------

// Middleware

// const express = require('express')
// const app = express()

// const reqFilter = (req,res,next)=>{
//   // console.log('reqFilter');
//   if(!req.query.age){
//     res.send('please provide age')
//   }
//   else if(req.query.age < 18){
//     res.send('you cannot see the website')
//   }
//   else{
//     next()
//   }
// }

// app.use(reqFilter)

// app.get('/',(req,res)=>{
//   res.send('welcome to home page')
// })

// app.listen(3000)



// --------------------------------------------------------------------
// Single routed middleware 


// comment out the use function
// app.use(reqFilter)

// and pass your middleware here in which you want to add middleware
// app.get('/',reqFilter,(req,res)=>{
//   res.send('welcome to home page')
// })


// --------------------------------------------------------------------
// --------------------------------------------------------------------
// --------------------------------------------------------------------
// --------------------------------------------------------------------
// --------------------------------------------------------------------
// --------------------------------------------------------------------
// --------------------------------------------------------------------
// --------------------------------------------------------------------
// --------------------------------------------------------------------
// --------------------------------------------------------------------



// Youtube video - https://www.youtube.com/playlist?list=PL8p2I9GklV456iofeMKReMTvWLr7Ki9At
// Done - 27 video done


