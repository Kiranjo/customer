import React, {Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
class CustomerNavbar extends Component{
    render(){
        return(
 <div className="container">
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger">
            <Link  to="/" className="navbar-brand text-dark">CustomerSite</Link>
        <div className="" >
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
         <Link  to="/customers" className="nav-link">Show Customers</Link></li>
     <li className="nav-item">
        <Link  to="/customers/add" className="nav-link">New Customer</Link></li>
          
            </ul>
        </div>
        </nav>
        

            </div>
        )
    }
}
export default CustomerNavbar;