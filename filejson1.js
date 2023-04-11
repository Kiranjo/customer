let fs=require("fs");
let readLine=require("readline-sync");
let fname="data1.json";
let Data={A:0,B:0};

function writeJson(){
    let str=JSON.stringify(Data);
    fs.writeFile(fname,str,function(err){
        if(err) console.log(err);
    });
}
function IncrementA(){
    fs.readFile(fname,"utf8",function(err,data){
        if(err) console.log(err);
        else{
            let obj=JSON.parse(data);
            obj.A=+obj.A+1;
            let data1=JSON.stringify(obj);
            fs.writeFile(fname,data1,function(err){
                if(err) console.log(err);
                else console.log("data updated");
            });
        }
    });
}
function IncrementB(){
    fs.readFile(fname,"utf8",function(err,data){
        if(err) console.log(err);
        else{
            let obj=JSON.parse(data);
            obj.B=+obj.B+1;
            let data1=JSON.stringify(obj);
            fs.writeFile(fname,data1,function(err){
                if(err) console.log(err);
                else console.log("data updated");
            });
        }
    });
}


function readJson(){
    fs.readFile(fname,"utf8",function(err,data){
        if(err) console.log(err);
        else{
            console.log("As string:",data);
            let obj=JSON.parse(data);
            console.log(obj);
        }
    });
}
let option=readLine.question
("Enter Option 1:Create/Reset  2:Read 3:IncrementA 4:IncrementB -");
switch(option){
    case "1":
        writeJson();
        break;
        case "2":
            readJson();
            break;
        case "3":
            IncrementA();
            break;
            case "4":
            IncrementB();
            break;
}