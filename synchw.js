var fs = require("fs");

console.log("Begin reading file");
var data = fs.readFileSync("input.txt");
console.log(data.toString());
console.log("End reading file");
console.log("Begin appending file");
fs.appendFileSync("input.txt", "I am appending a file\n");
console.log("End appending file");
console.log("Begin re-reading file")
var anotherData = fs.readFileSync("input.txt")
console.log(anotherData.toString())
console.log("Finish re-reading file")


//Output
//Begin reading file
//This is a sentence
//End reading file
//End appending file
//Begin re-reading file
//This is a sentenceI am appending a file
//Finish re-reading file

//dlm input.txt tambah sentence
//This is a sentenceI am appending a file