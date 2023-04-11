let express=require("express");
let app=express();
app.use(express.json());
app.use(function (req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header(
        "Access-Control-Allow-Methods",
        "GET,POST,OPTIONS,PUT,PATCH,DELETE,HEAD"
    );
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});
//const port =2410;
var port=process.env.PORT ||2410;

app.listen(port,()=>console.log(`Node app listening on port ${port}!`));
let {customersData}=require("./customerFileData.js");
let fs=require("fs");
let fname="customers.json";

app.get("/resetData",function(req,res){
    let data=JSON.stringify(customersData);
    fs.writeFile(fname,data,function(err){
        if(err) res.status(404),send(err);
        else res.send("Data in file is reset");
    });
});
app.get("/customers",function(req,res){
    fs.readFile(fname,"utf8",function(err,data){
        if(err) res.status(404).send(err);
        else{
            let customersArray=JSON.parse(data);
            res.send(customersArray);
        }
    });
});


app.post("/customers",function(req,res){
    let body=req.body;
    fs.readFile(fname,"utf-8",function(err,data){
        if (err){ res.status(404).send(err+"error in read part");
   }
        else{
            let customersArray=JSON.parse(data);
       
            let newCustomer={...body };
        

            customersArray.push(newCustomer);
            let data1=JSON.stringify(customersArray);
          
            fs.writeFile(fname,data1,function (err){
                if(err){ res.status(404).send(err+"err in write part")
            }
                else{ 
                  
                    res.send(newCustomer)
                };
            });
        }
    });
});
 app.put("/customers/:id",function(req,res){
    let body=req.body;
    let id=req.params.id;
    fs.readFile(fname,"utf8",function(err,data){
        if (err) res.status(404).send(err);
        else{
            let customersArray=JSON.parse(data);
            let index=customersArray.findIndex((st)=>st.id===id);
            if(index>=0){
                updatedCustomer={...customersArray[index],...body};
                customersArray[index]=updatedCustomer;
            let data1=JSON.stringify(customersArray);
            fs.writeFile(fname,data1,function(err){
                if(err) res.status(404).send(err);
                else res.send(updatedCustomer);
            });
        }else res.status(404).send("NO customer found");
    }
    });
});

app.delete("/customers/:id",function(req,res){
    let id=req.params.id;
    fs.readFile(fname,"utf8",function(err,data){
        if (err) res.status(404).send(err);
        else{
            let customersArray=JSON.parse(data);
            let index=customersArray.findIndex((st)=>st.id===id);
            if(index>=0){
               let deleteCustomer=customersArray.splice(index,1);
            let data1=JSON.stringify(customersArray);
            fs.writeFile(fname,data1,function(err){
                if(err) res.status(404).send(err);
                else res.send(deleteCustomer);
            });
        }else res.status(404).send("NO customer found");
    }
    });
});
