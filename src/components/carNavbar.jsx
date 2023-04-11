import React, {Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
class CarNavbar extends Component{
    render(){
        return( 
            <div className="container ">
                <nav className=" navbar-dark bg-danger">
                    <ul className="navbar-nav ">
                    <div className="row bg-danger text-dark">
                            <div className="col-2">
        
                 <Link  to="/cars" className="nav-link">Home</Link>
                 </div>
                <div className="col-8"></div>
                 <div className="col-1 text-right">
                <Link  to="/car" className="nav-link text-right ">New Car</Link>
                </div>
                </div>       
             
                
                    </ul>      
        </nav>
         {/* <nav className="navbar navbar-expand-sm navbar-dark bg-danger">
                    <ul className="navbar-nav mr-auto">
                        <div className="row">
                            <div className="col-2">
                        <li className="nav-item">
                 <Link  to="/cars" className="nav-link">Home</Link></li>
                 </div>
                <div className="col-8"></div>
                 <div className="col-2 text-right">
             <li className="nav-item text-right">
                <Link  to="/car" className="nav-link text-right ">New Car</Link></li>
                </div>
                </div>
                    </ul>      
        </nav>*/}
                    </div>
      
           
        )
    }
}
export default CarNavbar;