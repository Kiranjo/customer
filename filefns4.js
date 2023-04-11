let fs= require("fs");
let readLine=require("readline-sync");
fname="abcd.txt";
let txt=readLine.question("Enter Options 1,2,3,4:");

 /*if(txt==1){
    writeFile(fname,"0");
}
 if(txt==2){
    readFile(fname); 
 }
if(txt==3){
    fs.readFile(fname,"utf8",function(err,content){
        if(err) console.log(err);
        else{
            console.log("Before::",content);
            fs.writeFile(fname,+content+1,function(err){
                if(err) console.log(err);
                else{
                    console.log("write Successfull");
                    fs.readFile(fname,"utf8",function(err,content){
                        if(err) console.log(err);
                        else console.log("After::",content);
                    })
                }
            })
        }e
    })
}

function writeFile(filename,data){
    console.log("writeFile:",filename);
    fs.writeFile(filename,data,function(err){
        if (err) console.log(err);
        
    });
}
function readFile(filename){
    console.log("readFile:",filename);
    fs.readFile(filename,"utf8",function(err,content){
        if (err) console.log(err);
        else console.log(content);
    });
}*/