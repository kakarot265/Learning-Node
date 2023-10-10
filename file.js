//"fs" is a built in module
const fs = require("fs");

//Sync call
//fs.writeFileSync("./test.txt", "Hello");

// Second sync call overrides the text in test.txt
//fs.writeFileSync("./test.txt", "hiii");

//Reading file sync way. utf-8 describes the encoding decoding pattern
//const result = fs.readFileSync("./test.txt", "utf-8")
//console.log(result)

//ASYNC Calls
// reads file async. Takes callback fxn with err and result as 2 parameters
/*fs.readFile("./test.txt", "utf-8", (err, result) =>{
    if(err){
        console.log("Error", err);
    }
    else{
        console.log(result)
    }
})

fs.writeFile("./newFile.txt", "hello world", (err)=>{
    if(err){
        console.log("Error", err);
    }
}) */

//Copy a file to new file

fs.cpSync("./test.txt", "./copy.txt")

//delete a file
fs.unlinkSync("./copy.txt")