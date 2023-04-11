import React, {Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import http from "./httpService.js";
class Products extends Component{
    state = {products:[]};
    //Make a request to the server
    //Server will compute the response
    // Send back the response

  async componentDidMount(){
        let response=await http.get("/productApp/products");
        console.log(response);
        let {data}=response;
       // let s1={...this.state};
        //s1.products=data;
        this.setState({products: data});
    }
    render(){
        const {products}=this.state;
        return(
            <div className="container">
                <h4>Welcome to the PRODUCTS page</h4>
                {products.map((pr)=>(
                    <div className="row" key={pr.id}>
                <div className="col-2 border">
                    <Link to={`/products/${pr.id}`}>{pr.id}</Link>
                </div>
                <div className="col-2 border">{pr.name}</div>
                <div className="col-2 border">{pr.price}</div>
                    </div>
                ))}
                
            </div>
        )
    }

}
export default Products;