// Importing data from another file - app.js
// const app = require('./app')
// console.log(app);

// filter function
// var arr = [2, 5, 4, 2, 7, 9, 2];
// let res = arr.filter((item) => {
//     return item >= 4;
// })

// console.log(res);

//importing modules(non-global modules) and using file system
// you can also use other name in place of fs for variable name
// let fs = require('fs');
// fs.writeFileSync("hello.txt", "hey i am writing to this file.");

// printing current directory and filename
// console.log("-->", __dirname);
// console.log("-->", __filename);

//making basic server
// const http = require('http');
// http.createServer((req, resp) => {
//     resp.write("<h1>Hello this is Pulkit Chaudhari</h1>");
//     resp.end();
// }).listen(4500);

//The package. json file is the heart of any Node project.
//It records important metadata about a project which is required before publishing to NPM,
//and also defines functional attributes of a project that npm uses to install dependencies, run scripts,
// and identify the entry point to our package.
// package.json helps in idetifiying dependencies under dependency field
// deleting package.json file destroys all the package info and rest important info so NEVER DELETE Package.json
// package-lock.json however can be deleted
// below code prints output in different colors

// const colors = require('colors');
// console.log("package.json".red);

// if your node_modules file is deleted then run command -> node install
// this will install all dependencies
// nodejs is single threaded
// .gitignore has paths that should be pushed to github

// Nodemon continuously runs nodejs project so that you dont have to run it again and again
// adding -g while installing installs package globally

// console.warn("hello");
// console.log(100 + 100);

// nodejs is async based that means it doesnt wait for current command (with complex operation) to end to jump to next command
// instead it jumps to next command and is interrupted when the command with complex operation is completed.

// HOW TO MAKE API IN NODE JS
// rememeber resp.end() is necessary to end the function

// const http = require('http');
// const data = require('./data');
// http.createServer((req, resp) => {
//     resp.writeHead(200, { 'Content-type': 'application\json' });
//     resp.write(JSON.stringify(data));
//     resp.end();
// }
// ).listen(4500);

// Taking input from command line
// console.log(process.argv[7]);

// const fs = require('fs');
// const input = process.argv;
// fs.writeFileSync(input[3], input[4]);
// if (input[2] == 'add') {
//     fs.writeFileSync(input[2], input[3]);
// }
// else if (input[2] == 'remove') {
//     fs.unlinkSync(input[3]);
// }
// else {
//     console.log('invalid op');
// }

//SHOW FILE LIST WITH FILE SYSTEM
// const { dir } = require('console');
// const fs = require('fs');
// fs.writeFileSync('apple.txt', 'this is an apple file');
// path = require('path');
// const dirPath = path.join(__dirname, 'files');
// console.log(dirPath);
// for (i = 0; i < 5; i++) {
//     fs.writeFileSync(dirPath + "/apple" + i + ".txt", "a simple text file");
// }
// fs.readdir(dirPath, (error, files) => {
//     files.forEach((otem) => {
//         console.log("file name is : " + otem);
//     });
// });

//CRUD WITH FILE SYSTEM
// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname, 'crud');
// const filePath = `${dirPath}/apple.txt`;
// fs.writeFileSync(filePath, "this is a simple text file");
// fs.readFile(filePath, 'utf8', (error, item) => {
//     console.log(item);
// })
// fs.appendFile(filePath, ' and file name is apple.txt', (error) => {
//     if (error == null) console.log("file is updated");
// });
// fs.rename(filePath, `${dirPath}/fruit.txt`, (error) => {
//     if (error == null) console.log("file is renamed");
// });
// fs.unlinkSync(`${dirPath}/fruit.txt`);

// Asynchronous Nodejs
// async doesnt wait for one task to complete
// while sync waits

// let a = 10;
// let b = 0;
// promise has resolve and reject as arguments where resolve is when work is done perfectly and reject is for error
// here waitingdata will store the value 20
// let waitingData = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(20);
//     }, 2000)
// })
// .then function checks if the waitingData variable has a value in it
// if there is a value then console.log(a + data)
// waitingData.then((data) => {
//     console.log(a + data);
// })
// console.log(a + b);

// HOW NODEJS WORKS

// NodeJS has Call stack, Node APIs and callback queue
// Call stack stores function call where the first function to enter the call stack is main function
// here setTimeout function is written in C++ as nodeJS is made up of 92% JS and 8% C & C++
// so any function call written in C++ will go to Node APIs block
// these c++ functions are not directly stored in Call stack because they require the whole stack to be empty
// so they wait for the main function to be completed in call stack by waiting in the callback queue
// watch the video for more clarity

// console.log("starting up");

// setTimeout(() => {
//     console.log("2 second log");
// }, 2000);

// setTimeout(() => {
//     console.log("0 second log");
// }, 0);

// console.log("finishing up");

// ExpressJS

// const express = require('express');
// const app = express();
// app.get('', (req, resp) => {
//     console.log("Data sent by browser", req.query.name);
//     resp.send(`<h1> Hello, this is Welcome home page </h1> <br> <a href="/about"> Go to about page </a>`);
// });
// app.get('/about', (req, resp) => {
//     resp.send(`<input type="text" placeholder = "User name" value="${req.query.name}" />`);
// });
// app.get('/help', (req, resp) => {
//     resp.send({
//         name: 'anil',
//         email: 'anil@test.com'
//     });
// });
// app.listen(5000);

//Adding HTML page to routing

// const express = require('express');
// const app = express();
// const path = require('path');
// const publicPath = path.join(__dirname, 'public');
// console.log(publicPath);

// app.get('/help', (req, resp) => {
//     resp.sendFile(`${publicPath}/help.html`);
// })

// app.get('', (req, resp) => {
//     resp.sendFile(`${publicPath}/index.html`);
// })

// app.get('/about', (req, resp) => {
//     resp.sendFile(`${publicPath}/about.html`);
// })

// // Generating 404 code for non-accessible pages

// app.get('*', (req, resp) => {
//     resp.send(`Error 404 : Page not found`);
// })

// app.listen(4500);

// Template Engine JS

// const express = require('express');
// const app = express();
// const path = require('path');
// const publicPath = path.join(__dirname, 'public');
// console.log(publicPath);

// app.set('view engine', 'ejs');
// app.get('/profile', (req, resp) => {
//     const user = {
//         name: 'pulkit chaudhari',
//         email: 'pulkitchaudhari@gmail.com',
//         city: 'Kalyan',
//         skills: ['c++', 'c', 'python', 'js', 'java', 'mysql', 'nodeJS :)']
//     }
//     resp.render('profile', { user });
// })
// app.listen(4500);

// app.get('/login', (req, resp) => {
//     resp.render('login');
// })

// IMP
// <%= include('common/header'); %>  here = sign denotes that the file will be decrypted as JavaScript file
// <%- include('common/header'); %> here - sign denotes files will be decoded as HTML

// Middleware NodeJS &  ROUTE LEVEL MIDDLEWARE
// here reqFilter is a filter to allow acces to website based on age for certain routes while allowing other routes

// const express = require('express');
// const app = express();
// const reqFilter = require('./middleware');
// const route = express.Router();
// route.use(reqFilter);
// // route will be applied to about and contact  which basically applies only to these both the reqFilter
// app.get('/', (req, resp) => {
//     resp.send("welcome to home page");
// })
// app.get('/users', (req, resp) => {
//     resp.send("welcome to users page");
// })
// route.get('/about', (req, resp) => {
//     resp.send("welcome to About page");
// })
// route.get('/contact', (req, resp) => {
//     resp.send("welcome to Contact page");
// })
// app.use('/', route);
// app.listen(4500);


// CRUD OPERATIONS IN MONGODB
// to be used inside mongodb compass
// show dbs displays all databases
// use youtube command is used to use a table
// db.videos.drop() is used to drop the videos table
// db.dropDatabase() is used to drop database
// db.createCollection('playlist') is used to create table called playlist
// db.products.insertOne({name:"iphone lite max ultra pro",brand:"Apple",year:"9234",price:10,category:"mobile"}) is used to insert data given as argument into product table 
// db.products.find() is used to find all the data in products table 
// db.products.updateOne({name:"note 7 pro"},{$set:{brand:"Redmi"}}) is used to update the table where first argument stands for identifying
// the document and second argument for updating the desired field
// MongoDB has collections and not Tables

//Connect MongoDB with NodeJS && READ data from MongoDB 
// Watch mongodb.js file

// const dbConnection = require('./mongodb');

// dbConnection().then((resp)=>{
//     resp.find().toArray().then((data)=>{
//         console.warn(data)
//     })
// })
// console.log(dbConnection());

// const main = async ()=>{
//     let data = await dbConnection();
//     data = await data.find().toArray();
//     console.warn(data);
// }

// main();

// Insert data in mongodb Database
// See insert.js file

// Update data in MongoDB 
// see update.js file

// Delete data in MongoDB
// see delete.js file

// api with mongodb
// see api.js

// Mongoose 
// Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.
// Schema forms a format for data validation
// Model verifies schema and creates a connection between MongoDB and NodeJS
const mongoose = require('mongoose');

const main = async () => {
    console.log("hello");
    await mongoose.connect('mongodb://127.0.0.1:27017/e-comm');
    console.log("hello");
    const ProductSchema = new mongoose.Schema({
        name : String
    });
    const ProductsModel = mongoose.model('products',ProductSchema);
    let data = new ProductsModel({name:"m8"});
    let result = await data.save();
    console.log(result);
}

main();





