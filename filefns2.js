let fs= require("fs");
let readLine=require("readline-sync");

let fname=readLine.question("Enter name of file:");
let txt=readLine.question("Enter text to be appended to file:");

fs.access(fname,function(err){
    if(err){
        fs.writeFile(fname,txt,function (err){
            if(err) console.log(err);
            else{
        console.log("Write successful");
        fs.readFile(fname,"utf8",function(err,content){
            if(err) console.log(err);
            else console.log(content);
        });
            }
        });
    }
    else{
        fs.readFile(fname,"utf8",function(err,content){
            if (err) console.log(err);
            else{
                console.log("Before::",content);
        fs.appendFile(fname,txt,function(err){
            if(err) console.log(err);
            else{
                console.log("Append Successful");
                fs.readFile(fname,"utf8",function(err,content){
                    if(err) console.log(err);
                    else console.log("After::",content);
                });
            }
        });
            }
        });
    }
})