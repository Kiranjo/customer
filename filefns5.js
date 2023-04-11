let fs= require("fs");
let readLine=require("readline-sync");

let fname="abcd.txt";
let txt=readLine.question("Choose options from 1,2,3,4:");
//console.log("options is",txt);
let data="";
if(txt==1){
  //  console.log("The option is 1");
    writeFile(fname,"0");
}
else if(txt==2){
  //  console.log("The option is 2");
    readFile(fname);
}
else if(txt==3){
   // console.log("The option is 3");
  
    readFile(fname);
    data=+data+1;
    data= data.toString();
    writeFile(fname,data);
    readFile(fname);
}
else if(txt==4){
   // console.log("The option is 3");
    readFile(fname);
    data=+data-1;
   data= data.toString();
    writeFile(fname,data);
    readFile(fname);
}

function readFile(filename){
   // console.log("readFile:",filename);
    fs.readFile(filename,"utf8",function(err,content){
        if (err) console.log("err is",err);
        else{
            data=content;
          //  console.log("the content of file is:",content);
          console.log("the value decremented:",content);

        }
      /*  else {
            data=content;
            if(txt==3){
                console.log("the content of file is:",+content+1)     
            }
            if(txt==4){
                console.log("the content of file is:",+content-1)     
            }
            else{
            console.log("the content of file is:",content);}
        }*/
    });
}
function writeFile(filename,data){
   //n console.log("writeFile:",filename);
    fs.writeFile(filename,data,function(err){
        if (err) console.log(err);
        
    });
}
