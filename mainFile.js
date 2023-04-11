let abc=require("./sale1.js");
let xyz=require("./mod1.js");

//console.log(xyz);
console.log(abc);
let find=(xyz.getMobileById("3"));
//console.log(find);
//console.log(find.price);
//console.log(abc.orders);
let val=getVal(find.id);
console.log(val);
function getVal(id){
    let find2=abc.orders.find((or)=>or.mobileId==id);
    console.log(find2.quantity);
    console.log(find.price);
    if(find2)
     return (+find.price)*(+find2.quantity);
}










//console.log(xyz.getMobileById("9"));










//console.log(xyz.getMobileByModel("Mi 11"));















//console.log(xyz);
//console.log("Yes we can export data and functions")
//console.log(xyz.knowsTech("JS"));