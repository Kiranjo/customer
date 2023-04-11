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
const port =2410;
app.listen(port,()=>console.log(`Node app listening on port ${port}!`));

let {customersData}=require("./customersData.js");



app.get("/customers",function(req,res){
    console.log("GET /products",req.query);
    let city=req.query.city;
    let gender=req.query.gender;
    let payment=req.query.payment;
    let sortBy=req.query.sortBy;
    let arr1=customersData;
    if(city){
        arr1=arr1.filter((st)=>st.city===city);
    }
    if(gender){
        arr1=arr1.filter((st)=>st.gender===gender);
    }
    if(payment){
        arr1=arr1.filter((st)=>st.payment===payment);
    }
    if(sortBy==="payment"){
        arr1.sort((st1,st2)=>st1.payment.localeCompare(st2.payment));
   }
   if(sortBy==="city"){
     arr1.sort((st1,st2)=>st1.city.localeCompare(st2.city));
 }
 if(sortBy==="age"){
    arr1.sort((st1,st2)=>+st1.age-(+st2.age));
}
    res.send(arr1);
})
app.get("/customers/:id",function (req,res){
    let id=req.params.id;
    let customer=customersData.find((st)=>st.id===id);
    if(customer) 
    res.send(customer);
    else res.status(404).send("NO customer found");
});


app.post("/customers",function (req,res){
    let body=req.body;
    console.log(body); 
   customersData.push(body);
    res.send(customersData);

});

app.put("/customers/:id",function (req,res){
    let id=req.params.id;
    let body=req.body;
    let index=customersData.findIndex((st)=>st.id===id);
    if(index>=0){
    let updatedCustomer={id:id,...body};
    customersData[index]=updatedCustomer;
    res.send(updatedCustomer);}
    else
    res.status(404).send("No Customer found");
   
});

app.delete("/customers/:id",function (req,res){
    let id=req.params.id;
    let index=customersData.findIndex((st)=>st.id===id);
    if(index>=0){
    let deletedCustomer=customersData.splice(index,1);
    res.send(deletedCustomer);}
    else
    res.status(404).send("No Customer found");
   
});