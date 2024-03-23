// const amount = 9;
// if (amount>10){
//     console.log("small amount");
// }
// else {
//     console.log ("large number")
// }
// console.log("hello world");
// console.log(__dirname);
//modules
// const names= require('./app-2');
// const sayHI=(name)=>{
//     console.log('hello there'+ name)

// }
// console.log(names);
// sayHI(abel);
// sayHI(abel);
// sayHI(john);
// const os = require('os');
// //info about current user
// const user = os.userInfo();
// console.log(user);
// console.log(os.uptime());
// file syn read and write
// const {readFileSync,writeFileSync} = require('fs')
// writeFileSync("./content/firstt.txt","i really owe you a aplology")
//  writeFileSync("./content/secondd.txt","i wish i was as good as you",{flage:'a'})
// const path = require("path");
// const ffr = (path.join("./content/first.txt"))
// console.log(ffr);
// const {readfile,writefile} = require('fs');
// readfile('./content/first.txt','utf8',(err,result)=>{
//     if(err){
//         console.log(err);
//         return;
//     }  
//         console.log(result)
// // })
// const http = require('http');
// const server = http.createServer((req,res)=> {
//     if(req.url === './'){
//         res.end("hello home page");
//     }
//     if(req.url === './about'){
//         res.end("hello about");
//     }
//     if(req.url === './contact'){
//         res.end("hello contact");
//     }
//     if(req.url === './shop'){
//         res.end("hello shop");
//     }
//     res.end("ooops! we dont have that")
// })
// server.listen(5000);
// const path = require('path');
// const first = path.resolve("./app.js");
// console.log(first);
const _ = require("lodash")
const items = [1,[2,[3,[4,[5]]]]]
const rr =_.flattenDeep(items)
console.log(rr);


