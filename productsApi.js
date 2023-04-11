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

let {productsData}=require("./productsData.js");

app.get("/products",function(req,res){
    console.log("GET /products",req.query);
    let category=req.query.category;
    let maxPrice=req.query.maxPrice;
    let maxqty=req.query.maxqty;
    let minqty=req.query.minqty;
    let arr1=productsData;
    if(category){
        let categoryArr=category.split(",");
        arr1=arr1.filter((st)=>categoryArr.find((c1)=>c1===st.category));
    }
    if(maxPrice){
        arr1=arr1.filter((st)=>st.price>+maxPrice);
  }
  if(maxqty){
    arr1=arr1.filter((st)=>st.price<+maxqty);
}
  if(minqty){
    arr1=arr1.filter((st)=>st.quantity>+minqty);
}
    res.send(arr1);
})


app.get("/products/:prodName",function (req,res){
    let prodName=req.params.prodName;
    let product=productsData.find((st)=>st.prod===prodName);
    if(product) 
    res.send(product);
    else res.status(404).send("NO Product found");
});
app.get("/products/category/:catName",function (req,res){
    let catName=req.params.catName;
    let product=productsData.filter((st)=>st.category===catName);
    if(product) 
    res.send(product);
    else res.status(404).send("NO Product found");
});
app.get("/products/order/:field",function (req,res){
    let field=req.params.field;
    console.log(field);
    let product=productsData.filter((st)=>st.price===+field || st.quantity===+field || st.quantity*st.price===+field);
    
    if(product) 
    res.send(product);
    else res.status(404).send("NO Product found");
});

app.post("/products",function (req,res){
    let body=req.body;
    console.log(body); 
    productsData.push(body);
    res.send(productsData);

});

app.put("/products/:prodName",function (req,res){
    let prodName=req.params.prodName;
    let body=req.body;
    let index=productsData.findIndex((st)=>st.prod===prodName);
    if(index>=0){
    let updatedProduct={prod:prodName,...body};
    productsData[index]=updatedProduct;
    res.send(updatedProduct);}
    else
    res.status(404).send("No Product found");
   
});

app.delete("/products/:prodName",function (req,res){
    let prodName=req.params.prodName;
    let index=productsData.findIndex((st)=>st.prod===prodName);
    if(index>=0){
    let deletedProduct=productsData.splice(index,1);
    res.send(deletedProduct);}
    else
    res.status(404).send("No Product found");
   
});