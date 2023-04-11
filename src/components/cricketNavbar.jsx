import React, {Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
class CricketNavbar extends Component{
    render(){
        return(
 <div className="container">
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link  to="/" className="navbar-brand">SportStar</Link>
        <div className="" >
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
         <Link  to="/stars" className="nav-link">All</Link></li>
     <li className="nav-item">
        <Link  to="/stars/cricket" className="nav-link">Cricket </Link></li>
        <li className="nav-item">
        <Link  to="/stars/football" className="nav-link">Football</Link></li>
        <li className="nav-item">
        <Link  to="/star" className="nav-link">Add Star</Link></li>
          
            </ul>
        </div>
        </nav>
        

            </div>
        )
    }
}
export default CricketNavbar;