
const mobiles =  [{id:1, brand:"Apple",model:"iPhone11",price:55000},
{id:2, brand:"Xiaomi", model:"Poco F1",price:16000},
{id:3, brand:"Apple", model:"iPhone12",price:71000},
{id:4, brand:"Xiaomi", model:"Poco F2",price:19000},
{id:5, brand:"Xiaomi", model:"Mi 11",price:21000},
{id:6, brand:"Apple", model:"iPhoneXR",price:48500}];
const brands = ["Apple","Xiaomi"];

function getMobileById(id){
    return mobiles.find((b1)=>b1.id==id); 
}

module.exports={mobiles,brands,getMobileById};






/*function getMobileByModel(model){
    return mobiles.find((b1)=>b1.model==model)?true:false;
}*/



/*let name="Jack";
let age=25;
let techs=["JS","Node","Reacts"];
function knowsTech(tech){
    console.log("In function knowsTech:",tech);
    return techs.find((t1)=>t1==tech)?true:false;
}
module.exports={name,age,techs,knowsTech};*/











/*module.exports.name=name;
module.exports.age=age;
module.exports.techs=techs;
module.exports.hello="Hello";*/
