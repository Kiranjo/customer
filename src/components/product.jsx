import React, {Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import http from "./httpService.js";
class Product extends Component{
    state ={product:{}};
    async componentDidMount(){
        let {id}=this.props.match.params;
        let response = await http.get(`/productApp/products/${id}`);
        console.log("Product",response);
        let {data}=response;
        this.setState({product:data});
    }
    render(){
        const {product}=this.state;
        return(
            <div className="container">
              Product ID : {product.id}  
              <br/>
              Name : {product.name}
              <br/>
              Price: {product.price}
              <br/>
            </div>
        )
    }

}
export default Product;