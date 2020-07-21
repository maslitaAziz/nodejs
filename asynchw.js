//You need to produce the same result as per synchw.js but you only need to use asynchronous methods 

//go to or search for
//fs documentation
//https://nodejs.org/api/fs.html

//tengok 
//fs.readFile
//fs.appendFile

//hw to be discuss in class

var fs = require("fs");

console.log("Begin reading file");
fs.readFile("input.txt", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
console.log("End reading file");

console.log("Begin appending file");
fs.appendFile('input.txt', 'I am appending a file\n', (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});
console.log("End appending file");
console.log("Begin re-reading file")
