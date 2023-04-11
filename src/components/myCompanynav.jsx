import React, {Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
class MyCompanyNavBar extends Component{
    render(){
        return(
 <div className="container">
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link  to="/" className="navbar-brand">MyCompany</Link>
        <div className="" >
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
         <Link  to="/emps" className="nav-link">All</Link></li>
     <li className="nav-item">
        <Link  to="/NewDelhi" className="nav-link">New Delhi</Link></li>
        <li className="nav-item">
        <Link  to="/Noida" className="nav-link">Noida</Link></li>
          
            </ul>
        </div>
        </nav>
        

            </div>
        )
    }
}
export default MyCompanyNavBar;