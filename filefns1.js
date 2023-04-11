let fs= require("fs");
let readLine=require("readline-sync");

let fname="abcd.txt";
let txt=readLine.question("Enter text to be appended to file:");
fs.appendFile(fname,txt,function(err,content){
    if(err) console.log(err);
    else {
        fs.readFile(fname,"utf8",function (err,content){
            if (err) console.log(err);
            else console.log(content);
        });
    }
});