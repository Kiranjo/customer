import React, {Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
class NavBarProduct extends Component{
    render(){
        return(
 <div className="container">
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link  to="/" className="navbar-brand">MyPortal</Link>
        <div className="" >
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                <Link  to="/products" className="nav-link">Products
                
                </Link></li>
            <li className="nav-item"><Link  to="/products/add" className="nav-link">Add Product
            </Link></li>
          
            </ul>
        </div>
        </nav>
        

            </div>
        )
    }
}
export default NavBarProduct;