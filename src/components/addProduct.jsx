import React, {Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import http from "./httpService.js";
class AddProduct extends Component{
    state={
        product: {id:"", name:"",price:""},
    }
    handleChange=(e)=>{
        const {currentTarget: input}=e;
        let s1={...this.state};
        s1.product[input.name]=input.value;
        this.setState(s1);
    }
    async postData(url,obj){
        let response=await http.post(url,obj);
        console.log(response);
        this.props.history.push("/products");
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.postData("/productApp/products",this.state.product);
    }
    render(){
        let {id,name,price}=this.state.product;
        return(
            <div className="container">
              <div className="form-group">
            <label>Product ID</label>
            <input type="text" className="form-control" id="id" 
            name="id" placeholder="Enter Product ID"
            value={id}
            onChange={this.handleChange}/>
        </div>
        <div className="form-group">
            <label>Product Name</label>
            <input type="text" className="form-control" id="name" 
            name="name" placeholder="Enter Product Name"
            value={name}
            onChange={this.handleChange}/>
        </div>
        <div className="form-group">
            <label>Product Price</label>
            <input type="text" className="form-control" id="price" 
            name="price" placeholder="Enter Price"
            value={price}
            onChange={this.handleChange}/>
        </div>
        <button className="btn btn-primary m-2" onClick={this.handleSubmit}>
            {this.props.edit ? "Update": "Submit"}</button>
        
            </div>
        )
    }

}
export default AddProduct;