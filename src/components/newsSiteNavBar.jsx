import React, {Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
class NewsSiteNavBar extends Component{
    render(){
        return(
 <div className="container">
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger">
            <Link  to="/home" className="navbar-brand text-dark">NewsSite</Link>
        <div className="" >
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
         <Link  to="/&q=sport" className="nav-link">Sport</Link></li>
     <li className="nav-item">
        <Link  to="/&q=cricket" className="nav-link">Cricket</Link></li>
        <li className="nav-item">
        <Link  to="/&q=movies" className="nav-link">Movies</Link></li>
        <li className="nav-item">
        <Link  to="/&q=education" className="nav-link">Education</Link></li>
          
            </ul>
        </div>
        </nav>
        

            </div>
        )
    }
}
export default NewsSiteNavBar;