import React, {Component} from "react";
import { Route, Switch, Redirect, Link } from "react-router-dom";

import queryString from "query-string";
import http from "./httpService.js";
import PersonOptionCb from "./personOptionCb.jsx";
class CarDelete extends Component{
state={data:{},


};
   
   async componentDidMount(){
       const {id}=this.props.match.params;
       let response = await http.deleteApi(`/car/${id}`);
       this.props.history.push("/cars");
    }
   
    render(){
     return "";
    }

}
export default CarDelete;