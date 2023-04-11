import React, {Children, Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import queryString from "query-string";
import http from "./httpService.js";
import { Link } from "react-router-dom";

class BookAppNavBar extends Component{
    render(){
        return(
            <div className="container">
           <nav className="navbar navbar-expand-sm navbar-light bg-light text-dark">
          <Link  to="/" className="navbar-brand ">BookSite
          <i className="fa fa-book"></i></Link>
                <div className="" >
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                 <Link  to="/books/Harry Potter" className="nav-link">Harry Potter</Link></li>
             <li className="nav-item">
                <Link  to="/books/Agatha Christie" className="nav-link">Agatha Christie</Link></li>
                <li className="nav-item">
                <Link  to="/books/Premchand" className="nav-link">Premchand</Link></li>
                <li className="nav-item">
                <Link  to="/books/Jane Austen" className="nav-link">Jane Austen</Link></li>
                <li className="nav-item">
                <Link  to="/books/MyBook" className="nav-link">My Books</Link></li>
                <li className="nav-item">
                <Link  to="/books/setting" className="nav-link">Settings</Link></li>
                  
                    </ul>
                </div>
                </nav>
                
        
                    </div>
        )
    }

}
export default BookAppNavBar;