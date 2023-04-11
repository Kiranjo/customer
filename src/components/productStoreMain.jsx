import React, {Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ProductStoreNavbar from "./productStoreNavbar";
import ProductStoreNewProd from "./productStoreNewProd";
import ProductStoreRecv from "./productStoreRecv";

class ProductStoreMain extends Component{
    state={
        products:[
 {
 code: "PEP1253", price: 20, brand: "Pepsi", category: "Food",
 specialOffer: false, limitedStock: false, quantity: 25
 },
 {
 code: "MAGG021", price: 25, brand: "Nestle", category: "Food",
 specialOffer: true, limitedStock: true, quantity: 10
 },
 {
 code: "LEV501", price: 1000, brand: "Levis", category: "Apparel",
 specialOffer: true, limitedStock: true, quantity: 3
 },
 {
 code: "CLG281", price: 60, brand: "Colgate", category: "Personal Care",
 specialOffer: true, limitedStock: true, quantity: 5
 },
 {
 code: "MAGG451", price: 25, brand: "Nestle", category: "Food",
 specialOffer: true, limitedStock: true, quantity: 0
 },
 {
 code: "PAR250", price: 40, brand: "Parachute", category: "Personal Care",
 specialOffer: true, limitedStock: true, quantity: 5
 }
],
brands:
["Nestle", "Haldiram", "Pepsi", "Coca Cola", "Britannia",
 "Cadburys", "P&G", "Colgate", "Parachute",
"Gillete", "Dove", "Levis", "Van Heusen", "Manyavaar", "Zara"],
prodCode:["PAR250","MAGG451","CLG281","LEV501", "PEP1253","MAGG021"],
view:0,
editIndex:-1,
receivedStock:[],
    }
    handleNewProd=()=>{
        let s1={...this.state};
        s1.view=1;
        this.setState(s1);
    }
    handleReceiveStock=()=>{
        let s1={...this.state};
        s1.view=2;
        this.setState(s1);
    }
    handleSubmitBtn=(prod)=>{
        let s1={...this.state};
        console.log(prod);
        s1.editIndex>=0 ?(s1.products[s1.editIndex]=prod):
        s1.products.push(prod);
        s1.view=0;
        s1.editIndex=-1;
        this.setState(s1);
    }
    handleEditBtn=(index)=>{
        let s1={...this.state};
        s1.view=1;
        s1.editIndex=index;
        this.setState(s1);
    }
    handleGoBack=()=>{
        let s1={...this.state};
        s1.view=0;
        this.setState(s1);
    }
    handleStock=(stock)=>{
        let s1={...this.state};
        s1.receivedStock.push(stock);
        let find=s1.products.find((pr)=>pr.code==stock.code);
        find.quantity=find.quantity+(+stock.quantity);
        s1.view=0;
        this.setState(s1);
    }
    render(){
        let {products,view,editIndex}=this.state;
        let product={code:"",year:"",month:"",date:"",quantity:""};
        return(
            <div className="container">
                <ProductStoreNavbar products={products}/>
                <br/>
        {view==0?
        <React.Fragment>
        <div className="row">
      {products.map((pr,index)=>(
       
            <div className="col-3 border bg-light text-center">
           <h6> Code: {pr.code}</h6> Brand: {pr.brand} <br/> Category:{pr.category} <br/>
            Price: {pr.price} <br/> Quantity: {pr.quantity} <br/> 
            Special Offers:{pr.specialOffer==true?"Yes":"No"}<br/> 
            Limited Stocks: {pr.limitedStock==true?"Yes":"No"}
            <br/>
        <button className="btn btn-warning" 
        onClick={()=>this.handleEditBtn(index)}>Edit Details</button>
            </div>
      
      ))}
      </div>
        <button className="btn btn-primary m-2" 
      onClick={()=>this.handleNewProd()} >Add New Product</button>
      <button className="btn btn-primary m-2" 
      onClick={()=>this.handleReceiveStock()}>Receive Stocks</button>

      </React.Fragment>
      :view==1?
      <ProductStoreNewProd product={editIndex>=0?products[editIndex]:{}} onSubmit={this.handleSubmitBtn} 
      handleGoBack={this.handleGoBack} editIndex={editIndex} products={products}/>
      
      :view==2?
      <ProductStoreRecv products={products} product={product} handleGoBack={this.handleGoBack}
      onSubmitStock={this.handleStock}/>
      
      :""}
      
            </div>
        )
    }

}
export default ProductStoreMain;