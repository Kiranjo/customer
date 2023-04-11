import React, {Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBarProduct from "./navbarProduct";
import Product from "./product";
import Products from "./products";
import AddProduct from "./addProduct";
class MainCompProduct extends Component{
    render(){
        return(
            <div className="container">
        <NavBarProduct />
        <Switch>
        <Route path="/products/add" component={AddProduct}/>
        <Route path="/products/:id" component={Product}/>
        <Route path="/products" component={Products}/>
        <Redirect from="/" to="/products"/>
        </Switch>
            </div>
        )
    }

}
export default MainCompProduct;