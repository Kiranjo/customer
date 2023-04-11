let fs= require("fs");
function getStat(filename){
    console.log("stat:",filename);
    fs.stat(filename,function(err,content){
        if (err) console.log(err);
        else console.log(content);
    });
}
function checkAccess(filename){
    console.log("access:",filename);
    fs.access(filename,function(err){
        if (err) console.log("Does not exist");
        else console.log("Exists");
    });
}
function readFile(filename){
    console.log("readFile:",filename);
    fs.readFile(filename,"utf8",function(err,content){
        if (err) console.log(err);
        else console.log(content);
    });
}
function writeFile(filename,data){
    console.log("writeFile:",filename);
    fs.writeFile(filename,data,function(err){
        if (err) console.log(err);
        
    });
}
function appendFile(filename,data){
    console.log("appendFile:",filename);
    fs.appendFile(filename,data,function(err){
        if (err) console.log(err);
        
    });
}
let fname="hello.txt";
console.log("The file functions are asynchronous");
console.log("means it does not wait for the function to finish before calling append file we did not get different values");

readFile(fname);
writeFile(fname,"XYZxyz");
readFile(fname);
appendFile(fname,"PQRSpqrs");
readFile(fname);