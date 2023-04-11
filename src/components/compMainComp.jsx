import React, {Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

import queryString from "query-string";
import http from "./httpService.js";
import CompNavbar from "./compNavbar.jsx";
import CompA from "./compA.jsx";
import CompB from "./compB.jsx";

class CompMainComp extends Component{
    state ={

};





    render(){
  
             return(
     <div className="container">
      <CompNavbar/>
      <Switch>
        <Route path="/compA" component={CompA}/>
        <Route path="/compB/:name" component={CompB}/>
        </Switch>  
            
       
        </div>
    
      
             )
         }
}
export default CompMainComp;