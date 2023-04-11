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

let {carData,carMaster}=require("./carData.js");



app.get("/cars",function(req,res){ 
    console.log("GET /cars",req.query);
    let minprice=req.query.minprice;
    let maxprice=req.query.maxprice;
    let fuel=req.query.fuel;
    let type=req.query.type;
    let sort=req.query.sort;
    let arr1=carData;
    if(minprice){
        arr1=arr1.filter((st)=>st.price>minprice);
    }
    if(maxprice){
        arr1=arr1.filter((st)=>st.price<maxprice);
    }
    if(sort==="kms"){
        arr1.sort((st1,st2)=>+st1.kms-(+st2.kms));
    }
    if(sort==="price"){
        arr1.sort((st1,st2)=>+st1.price-(+st2.price));
    }
    if(sort==="year"){
        arr1.sort((st1,st2)=>+st1.year-(+st2.year));
    }
    if(fuel){
        arr2=carMaster.find((st)=>st.fuel===fuel);
        arr1=arr1.filter((st)=>st.model===arr2.model);
        console.log(arr1,"arr1");
    }
    if(type){
        arr2=carMaster.find((st)=>st.type===type);
        arr1=arr1.filter((st)=>st.model===arr2.model);
    }
   

    res.send(arr1);
})
app.get("/carmaster",function(req,res){ 
    res.send(carMaster);
})
app.get("/cars/:id",function (req,res){
    let id=req.params.id;
    let car=carData.find((st)=>st.id===id);
    if(car) 
    res.send(car);
    else res.status(404).send("NO car found");
});


app.post("/cars",function (req,res){
    let body=req.body;
    console.log(body); 
   carData.push(body);
    res.send(carData);

});

app.put("/cars/:id",function (req,res){
    let id=req.params.id;
    let body=req.body;
    let index=carData.findIndex((st)=>st.id===id);
    if(index>=0){
    let updatedCar={id:id,...body};
    carData[index]=updatedCar;
    res.send(updatedCar);}
    else
    res.status(404).send("No Car found");
   
});

app.delete("/car/:id",function (req,res){
    let id=req.params.id;
    let index=carData.findIndex((st)=>st.id===id);
    if(index>=0){
    let deletedCar=carData.splice(index,1);
    res.send(deletedCar);}
    else
    res.status(404).send("No Car found");
   
});