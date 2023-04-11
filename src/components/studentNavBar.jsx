import React, {Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import queryString from "query-string";
import http from "./httpService.js";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownMenu from "react-bootstrap/esm/DropdownMenu.js";
class StudentNavBar extends Component{
    
    render(){
  let names=["JS","React","Node","Angular"];
             return(
         <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link  to="/" className="navbar-brand">
            Student Portal
            </Link>
        <div className="" >
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
         <Link  to="/students" className="nav-link">Students</Link></li>
         <li className="nav-item">
         <Link  to="/students/add" className="nav-link">Add a Student</Link></li>
         <Dropdown>
      <Dropdown.Toggle variant="dark" id="dropdown-basic">
       Courses
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {names.map((n1)=>(
           <Dropdown.Item href={n1}>
          <Link  key={n1} className="dropdown-item" to={`/students/course/${n1}`}>
                {n1}
            </Link>
            </Dropdown.Item>   
        ))}
       {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>*/}
      </Dropdown.Menu>
    </Dropdown>
    {/*<li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown"
    role="button" data-toggle="dropdown">BBBB</a>
    <div className="dropdown-menu">
        {names.map((n1)=>(
        <React.Fragment>
            <Link  key={n1} className="dropdown-item" to={`/compB/${n1}`}>
                {n1}
            </Link>
            </React.Fragment>
        ))}
    </div>
       </li>*/}
     
            </ul>
        </div>
        </nav>
             );
         }
}
export default StudentNavBar;