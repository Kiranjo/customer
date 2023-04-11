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

let {mobilesData}=require("./mobilesData.js");



app.get("/mobiles",function(req,res){
    console.log("GET /mobiles",req.query);
    let ram=req.query.ram;
    let rom=req.query.rom;
    let color=req.query.color;
    let brand=req.query.brand;
    let arr1=mobilesData;
    if(ram){
        arr1=arr1.filter((st)=>st.RAM.find((rm=>rm===ram)));
  }
  if(rom){
    arr1=arr1.filter((st)=>st.ROM.find((rm=>rm===rom)));
}
if(color){
    arr1=arr1.filter((st)=>st.colors.find((rm=>rm===color)));
}
if(brand){
    arr1=arr1.filter((st)=>st.brand==brand);
}
    res.send(arr1);
});

app.get("/mobiles/:name",function (req,res){
    let name=req.params.name;
    let mobile=mobilesData.find((st)=>st.name===name);
    if(mobile) 
    res.send(mobile);
    else res.status(404).send("NO Product found");
});
app.get("/mobiles/brand/:brandName",function (req,res){
    let brandName=req.params.brandName;
    let mobile=mobilesData.filter((st)=>st.brand===brandName);
    if(mobile) 
    res.send(mobile);
    else res.status(404).send("NO Product found");
});
app.get("/mobiles/color/:color",function (req,res){
    let color=req.params.color;
    let mobile=mobilesData.filter((st)=>st.colors.find((cl)=>cl===color));
    if(mobile) 
    res.send(mobile);
    else res.status(404).send("NO Product found");
});
app.get("/mobiles/RAM/:ramSize",function (req,res){
    let ramSize=req.params.ramSize;
    let mobile=mobilesData.filter((st)=>st.RAM.find((cl)=>cl===ramSize));
    if(mobile) 
    res.send(mobile);
    else res.status(404).send("NO Product found");
});
app.get("/mobiles/ROM/:romSize",function (req,res){
    let romSize=req.params.romSize;
    let mobile=mobilesData.filter((st)=>st.ROM.find((cl)=>cl===romSize));
    if(mobile) 
    res.send(mobile);
    else res.status(404).send("NO Product found");
});

