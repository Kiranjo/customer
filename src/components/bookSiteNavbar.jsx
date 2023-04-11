import React, {Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
class BookSiteNavBar extends Component{
    render(){
        return(
 <div className="container">
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link  to="/" className="navbar-brand">BookSite</Link>
        <div className="" >
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
         <Link  to="/book/new" className="nav-link">New Arrival</Link></li>
     <li className="nav-item">
        <Link  to="/books/children" className="nav-link">Children</Link></li>
        <li className="nav-item">
        <Link  to="/books/fiction" className="nav-link">Fiction</Link></li>
        <li className="nav-item">
        <Link  to="/books/mystery" className="nav-link">Mystery</Link></li>
        <li className="nav-item">
        <Link  to="/books/management" className="nav-link">Management</Link></li>
        <li className="nav-item">
        <Link  to="booksapp/books" className="nav-link">All Books</Link></li>
          
            </ul>
        </div>
        </nav>
        

            </div>
        )
    }
}
export default BookSiteNavBar;