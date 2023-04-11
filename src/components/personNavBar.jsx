import React, {Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
class PersonNavbar extends Component{
    render(){
        return(
 <div className="container">
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link  to="/" className="navbar-brand">Portal101</Link>
        <div className="" >
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                <Link  to="/persons" className="nav-link">All Persons</Link></li>
            <li className="nav-item"><Link  to="/persons/add" className="nav-link">Add Person   </Link></li>
          
            </ul>
        </div>
        </nav>
        

            </div>
        )
    }
}
export default PersonNavbar;