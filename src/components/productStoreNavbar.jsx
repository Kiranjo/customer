import React, {Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import BookSiteMainComp from "./cricketNavbar";

import queryString from "query-string";
import http from "./httpService.js";
class ProductStoreNavbar extends Component{
    render(){
        let {products}=this.props;
        let length=products.length;
        let qty=products.reduce((acc,curr)=>acc+curr.quantity,0);
        let val=products.reduce((acc,curr)=>acc+curr.price*curr.quantity,0);
        return(
            <div className="container">
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <a className="navbar-brand" href="#">ProdStoreSys</a>
                <div className="" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                 <li className="nav-item"><a className="nav-link" href="#">Products
                 <span className="badge badge-pill badge-secondary bg-secondary">{length}</span>
                        </a></li>
                 <li className="nav-item"><a className="nav-link" href="#">Quantity
       <span className="badge badge-pill badge-secondary bg-secondary">{qty}</span>
                        </a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Value
        <span className="badge badge-pill badge-secondary bg-secondary">{val}</span>
                        </a></li>
                    </ul>
                </div>
                </nav>
                </div>
        )
    }

}
export default ProductStoreNavbar;